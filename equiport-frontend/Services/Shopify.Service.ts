import Client from "shopify-buy";

export const client = Client.buildClient({
  storefrontAccessToken: "e713ddfbbb06f6fa497ae42d8dfe1a68",
  domain: "canada-bestland-industrial.myshopify.com",
});

// export async function storefront(query: any, variables = {}) {
//   let url: string = "";
//   if (process.env.NEXT_PUBLIC_API_URL) {
//     url = process.env.NEXT_PUBLIC_API_URL;
//   }
//   let requestHeaders: any = {
//     "content-type": "application/json ",
//     "X-Shopify-Storefront-Access-Token": "p80816f4a9d05835b91b6803553d7e999",
//   };
//   let requestBody: any = JSON.stringify({ query, variables });
//   // const requestHeaders: HeadersInit = new Headers();
//   // requestHeaders.set('Content-Type', 'application/json');
//   const response = await fetch(
//     "https://canada-bestland-industrial.myshopify.com/api/2022-01/graphql.json",
//     {
//       method: "POST",
//       headers: requestHeaders,
//       body: requestBody,
//     },
//   );
//   console.log("response:", response);
//   return response.json;
// }
// // export const client = new Client(typeBundle, {
// // url: 'https://graphql.myshopify.com/api/graphql',
// // fetcherOptions: {
// //   headers: {
// //     'X-Shopify-Storefront-Access-Token': 'dd4d4dc146542ba7763305d71d1b3d38'
// //   }
// // }
