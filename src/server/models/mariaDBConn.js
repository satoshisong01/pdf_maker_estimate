/*** models/mariaDBConn.js ***/

var mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: '127.0.0.1', 
  port: 3306,
  user: 'root', 
  password: 'P@SsW0Rd!',
  connectionLimit: 5
});

async function getUserList() {
  let conn, rows;
  try {
    conn = await pool.getConnection();
    conn.query('USE nodejs'); // 사용할 DB 명시
    rows = await conn.query('SELECT * FROM users'); // 쿼리 실행
  }
  catch (err) { throw err; }
  finally {
    if (conn) conn.end();
    return rows;
  }
}

module.exports = { getUserList, }