
// 引入数据库
let mySql = require( 'mysql' );

// 连接数据库
let db = mySql.createConnection({
  // 主机名
  host: 'localhost',  
  // 用户名
  user: 'root',
  // 密码
  password: '',
  // 数据库名
  database: 'user'
})

db.connect();

module.exports = {
  // 添加数据
  add( data ){
    // 将用户名和密码添加到user数据库
    let addSql = "INSERT INTO user( username,userpwd ) VALUES('" + data.userName + "','" + data.userPwd + "')";
    // 执行语句
    db.query( addSql,function( err,res ){
      if( err ) throw err;
    });
  },
  // 查找数据
  find( data ){
    // 返回一个promise对象
    return new Promise( function( resolve,reject ){
      // 查询语句
      let findSql = "SELECT * FROM user WHERE username='" + data.userName + "'";
      // 执行查询语句
      db.query( findSql,function( err,result ){
        resolve( result );
      } );
    } ).catch(function( err ){
      console.log( err )
    })
  }
}
