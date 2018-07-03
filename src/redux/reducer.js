import _state from "./state";

let reducer = ( state = _state, action )=>{
  let newState = Object.assign( {},state );
  if ( action.type === 'DATA' ) {
    newState.arr = action.list ;
  }
  if ( action.type === 'MORE' ) {
    newState.num++;
    newState.arr = newState.arr.concat( action.list );
  }
  if ( action.type === 'SOUSUO' ) {
    newState.comList = action.data;
  }
  if ( action.type === 'MORE_SOUSUO' ) {
    newState.comNum++;    
    newState.comList = newState.comList.concat(action.data) ;
  }
  if ( action.type === 'NAME' ) {
    newState.login.userName = action.t;
  }
  if ( action.type === 'PWD' ) {
    newState.login.userPwd = action.p;
  }  
  if ( action.type === 'GETCITY' ) {
    newState.city = action.data;
  }
  if ( action.type === 'CHANGE' ) {
    newState.isLogin = !newState.isLogin;
  }
  return newState;
}

export default reducer;