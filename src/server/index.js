const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const mysql = require('mysql');

const db = mysql.createPool({
  host: '49.50.167.157', // 공인 아이피 주소
  port: '3306',
  user: 'song',
  password: 'song',
  database: 'sysner',
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/insert', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const content = req.body.content;
  const tablename = req.body.tablename;

  console.log(name, price, content);
  const sqlQuery = `INSERT INTO ${tablename} (name, price, content) VALUES (?,?,?)`;
  db.query(sqlQuery, [name, price, content], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/api/insert/table', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const content = req.body.content;
  const idx = req.body.idx;
  const tablename = req.body.tablename;

  console.log(
    'name : ',
    name,
    'price : ',
    price,
    'content : ',
    content,
    'idx : ',
    idx,
    '값받아오기',
  );
  const sqlQuery = `UPDATE ${tablename} 
                        SET name = "${name}", price = "${price}", content = "${content}"
                        WHERE idx = ${idx}`;

  db.query(sqlQuery, (err, result) => {
    console.log('err : ', err);

    console.log('result', result);
    res.send(result);
  });
});

app.post('/api/selectItem', (req, res) => {
  const content_name = req.body.content_name;
  const sqlQuery = `SELECT * FROM ${content_name}`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/all', (req, res) => {
  const sqlQuery = 'show tables;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/platform', (req, res) => {
  const sqlQuery = 'SELECT * FROM platform;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/ui', (req, res) => {
  const sqlQuery = 'SELECT * FROM uipage;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/desing', (req, res) => {
  const sqlQuery = 'SELECT * FROM desing;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/admin', (req, res) => {
  const sqlQuery = 'SELECT * FROM admin;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/upload', (req, res) => {
  const sqlQuery = 'SELECT * FROM upload;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/community', (req, res) => {
  const sqlQuery = 'SELECT * FROM community;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/advance_action', (req, res) => {
  const sqlQuery = 'SELECT * FROM advance_action;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/service_platform', (req, res) => {
  const sqlQuery = 'SELECT * FROM service_platform;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/signin', (req, res) => {
  const sqlQuery = 'SELECT * FROM signin;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/alram_push', (req, res) => {
  const sqlQuery = 'SELECT * FROM alram_push;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/social_tech', (req, res) => {
  const sqlQuery = 'SELECT * FROM social_tech;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/native_tech', (req, res) => {
  const sqlQuery = 'SELECT * FROM native_tech;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/item_list', (req, res) => {
  const sqlQuery = 'SELECT * FROM item_list;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/payment', (req, res) => {
  const sqlQuery = 'SELECT * FROM payment;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/api_crawling', (req, res) => {
  const sqlQuery = 'SELECT * FROM api_crawling;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/document_extraction', (req, res) => {
  const sqlQuery = 'SELECT * FROM document_extraction;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/Overseas', (req, res) => {
  const sqlQuery = 'SELECT * FROM Overseas;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.get('/api/etc', (req, res) => {
  const sqlQuery = 'SELECT * FROM etc;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/api/delete', (req, res) => {
  const items = req.body.delitem;
  const sqlQuery = `SELECT * FROM ${items}`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/api/deleteitem', (req, res) => {
  const delpostitem = req.body.delpostitem;
  const tablename = req.body.delitem;

  delpostitem.forEach((item) => {
    const sqlQuery = `DELETE FROM ${tablename} WHERE idx = ${item}`;
    db.query(sqlQuery, (err, result) => {});
  });
  res.send('success!');
});

app.post('/api/deleteitem/admin', (req, res) => {
  const idx = req.body.idx;
  const tablename = req.body.tablename;

  const sqlQuery = `DELETE FROM ${tablename} WHERE idx = ${idx}`;

  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/api/insert', (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const content = req.body.content;
  const dbname = req.body.dbname;

  const sqlQuery = `INSERT INTO ${dbname} (name, price, content) VALUES (?,?,?)`;
  db.query(sqlQuery, [name, price, content], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/api/update/table', (req, res) => {
  const tbname = req.body.tablename;
  const idx = req.body.idx;
  console.log(tbname, '테이블이름');
  console.log(idx, '인덱스값');
  const sqlQuery = `SELECT * FROM ${tbname} WHERE idx = ${idx}`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
    console.log(result, '수정창에 input에 값넣어주는');
  });
});

app.post('/api/update', (req, res) => {
  const items = req.body.upitem;

  console.log(items);
  const sqlQuery = `SELECT * FROM ${items}`;
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

app.post('/api/updateitem', (req, res) => {
  const delpostitem = req.body.delpostitem;
  const tablename = req.body.delitem;

  delpostitem.forEach((item) => {
    const sqlQuery = `DELETE FROM ${tablename} WHERE idx = ${item}`;
    db.query(sqlQuery, (err, result) => {});
  });
  res.send('success!');
});

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
