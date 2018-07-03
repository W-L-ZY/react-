let express = require( 'express' );
let mysql = require( '../../node/mySql' );
let router = express.Router();

// 执行MySQL中的查询方法
var start = async function( data ){
  // 查询结果
  let result = await mysql.find( data );
  let a = f( data,result );
  return a;
}
// 判断数据是否在数据库中
async function f( user,data ){
  if ( data != '' ) {
    let p = await pwd( user,data );
    return p;
  }else{
    return 2;
  }
}
// // 判断密码是否正确
async function pwd( user,data ){
  if ( user.userPwd == data[0].userpwd ) {
    return 0;
  }else{
    return 1;
  }
}

// 注册
router.get( '/login',async function( req,res ){
  let a = JSON.parse(req.query.str);
  // console.log( a );
  let flag = await start( a );
  if ( flag === 0 ) {
    let obj = {
      code: 200,
      href: 'http://localhost:5000'
    };
    res.send( obj );
  }
  if ( flag === 1 ) {
    let obj = {
      code: 402,
      msg: '用户名或密码不正确',
    }
    res.send( obj );
  }
  if ( flag === 2 ) {
    let obj = {
      code: 400,
      msg: '用户名不存在，请注册',
      href: 'http://localhost:5000/register'
    }
    res.send( obj );
  }
})
// 登录
router.get( '/register',async function( req,res ){
  // console.log( 'data',req.query )
  let a = JSON.parse(req.query.str);
  // console.log( a );
  let flag = await start( a );
  if ( flag === 0 ) {
    let obj = {
      code: 401,
      msg: '用户名已存在，请登录',
      href: '/login'
    };
    res.send( obj );
  }
  if ( flag === 1 ) {
    let obj = {
      code: 402,
      msg: '用户名已存在，请登录',
      href: '/login'
    }
    res.send( obj );
  }
  if ( flag === 2 ) {
    mysql.add( a );
    let obj = {
      code: 200,
      msg: '注册成功',
      href: 'http://localhost:5000'
    }
    res.send( obj );
  }
})

module.exports = router;