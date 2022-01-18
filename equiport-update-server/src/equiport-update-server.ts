// // Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// // persist this object in your app.
// const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {};

// async function onRequest(
  //   request: http.IncomingMessage,
  //   response: http.ServerResponse,
  // ): Promise<void> {
    //   const {headers, url: req_url} = request;
    //   const pathName: string | null = url.parse(req_url).pathname;
    //   const queryString: string = String(url.parse(req_url).query);
    //   const query: Record<string, any> = querystring.parse(queryString);
    
    //   switch (pathName) {
      //     default:
      //       // This shop hasn't been seen yet, go through OAuth to create a session
      //       if (ACTIVE_SHOPIFY_SHOPS[SHOP] === undefined) {
        //         // not logged in, redirect to login
        //         response.writeHead(302, {Location: `/login`});
        //         response.end();
        //       } else {
          //         response.write('Hello world!');
          //         // Load your app skeleton page with App Bridge, and do something amazing!
          //       }
          //       return;
          //   } // end of default path
          // } // end of onRequest()
          
          // http.createServer(onRequest).listen(3000);
          
          
  import http from 'http';
  import url from 'url';
  import querystring from 'querystring';
  import express from 'express';
  import Shopify, { ApiVersion, AuthQuery } from '@shopify/shopify-api';
  require('dotenv').config();
  
  const { API_KEY, API_SECRET_KEY, HOST } = process.env
  
  const app: express.Application = express();

  Shopify.Context.initialize({
    API_KEY,
    API_SECRET_KEY,
    SCOPES: [
      'read_all_orders',
      'read_assigned_fulfillment_orders',
      'write_assigned_fulfillment_orders',
      'read_checkouts',
      'write_checkouts',
      'read_products',
      'write_products',
      'read_script_tags',
      'write_script_tags'
    ],
    HOST_NAME: HOST.replace(/https:\/\//, ""),
    IS_EMBEDDED_APP: false,
    API_VERSION: ApiVersion.October21 // all supported versions are available, as well as "unstable" and "unversioned"
  });

  // Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS: { [key: string]: string | undefined } = {
  shopOne: "https://canada-bestland-industrial.myshopify.com/ "
};

// the rest of the example code goes here

app.get("/", async (req, res) => {
   // This shop hasn't been seen yet, go through OAuth to create a session
  if (ACTIVE_SHOPIFY_SHOPS.shopOne === undefined) {
     // not logged in, redirect to login
    res.redirect(`/login`);
  } else {
    res.send("Hello world!");
    // Load your app skeleton page with App Bridge, and do something amazing!
    res.end();
  }
});

app.get('/login', async (req, res) => {
  let authRoute = await Shopify.Auth.beginAuth(
    req,
    res,
    ACTIVE_SHOPIFY_SHOPS.shopOne,
    '/auth/callback',
    false,
  );
  return res.redirect(authRoute);
})

app.get('/auth/callback', async (req, res) => {
  try {
    const session = await Shopify.Auth.validateAuthCallback(
      req,
      res,
      req.query as unknown as AuthQuery,
    ); // req.query must be cast to unkown and then AuthQuery in order to be accepted
    ACTIVE_SHOPIFY_SHOPS.shopOne = session.scope;
    console.log(session.accessToken);
  } catch (error) {
    console.error(error); // in practice these should be handled more gracefully
  }
  return res.redirect(`/?host=${req.query.host}&shop=${req.query.shop}`); // wherever you want your user to end up after OAuth completes
});

app.get('/login', async (req, res) => {
  let authRoute = await Shopify.Auth.beginAuth(
    req,
    res,
    ACTIVE_SHOPIFY_SHOPS.shopOne,
    '/auth/callback',
    false,
  );
  return res.redirect(authRoute);
});

const session = await Shopify.Utils.loadCurrentSession(req, res);
// Create a new client for the specified shop.
const client = new Shopify.Clients.Rest(session.shop, session.accessToken);
// Use `client.get` to request the specified Shopify REST API endpoint, in this case `products`.
const products = await client.get({
  path: 'products',
});


app.listen(3000, () => {
  console.log('your app is now listening on port 3000');
});

