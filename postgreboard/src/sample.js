var express = require('express');
var router = express.Router();


/*   PostgresDB  */
const configjs = require("./config")
const pool = configjs.postgre_pool;

const { Client } = require("pg");
const Query = require('pg').Query;

pool.connect(err => { if (err) { console.error('connection error', err.stack) } else { console.log('success!') } });

router.get('/api/read', function(req, res, next) { 
    //전체리스트
    var pg_query = 
    ` SELECT * FROM CONTENT 
    `;

    console.log("Query ==>",pg_query);

    const sendquery = new Query(pg_query);

    pool.query(sendquery);
    var rows = []; 

    sendquery.on("row",row=>{ 
        rows.push(row); 
    });
    
    sendquery.on('end', () => { 
        console.log(rows); 
        console.log('query done'); 
        res.send(rows); res.status(200).end(); 
    }); 

    sendquery.on('error', err => { 
        console.error(err.stack) ;
    });
});

module.exports = router;