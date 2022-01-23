const { Pool, Client } = require('pg')

const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
pool.query("INSERT INTO ", (err: any, res: any) => {
  console.log(err, res)
  pool.end()
})