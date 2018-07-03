import Axios from "axios";


let actions = {
  getData( num ){
    return ( dispatch )=>{
      Axios.get( '/cor/listmore.json?pageNo=' + num + '&pageSize=15' ).then(( res )=>{
        dispatch({
          type: 'DATA',
          list: res.data.content.data.page.result
        })
      })
    }
  },
  getMore( n ){
    return ( dispatch )=>{
      Axios.get( '/cor/listmore.json?pageNo=' + n + '&pageSize=15' ).then(( res )=>{
        dispatch({
          type: 'MORE',
          list: res.data.content.data.page.result
        })
      })
    }
  },
  changeName( t ){
    return{
      type: 'NAME',
      t
    }
  },
  changePwd( p ){
    return{
      type: 'PWD',
      p
    }
  },
  changeLogin(){
    return{
      type: 'CHANGE'
    }
  },
  getCity(){
    let temp = new Date().getTime();
    let url = '/city/v4/api/city?__t=' + temp;
    return ( dispatch )=>{
      Axios.get( url ).then(( res )=>{
        console.log( res.data.data.cities );
        dispatch({
          type: 'GETCITY',
          data: res.data.data.cities,
        })
      })
    }
  },
  souSuo( cityName,searchVal ){
    let url = "/cor/search.json?city=" + cityName + "&positionName=" + searchVal + "&pageNo=1&pageSize=15";
    return ( dispatch )=>{
      Axios.get( url ).then(( res )=>{
        dispatch({
          type: 'SOUSUO',
          data: res.data.content.data.page.result,
        })
      })
    }
  },
  moreSS( cityName,searchVal,souNum ){
    let url = "/cor/search.json?city=" + cityName + "&positionName=" + searchVal + "&pageNo=" + souNum + "&pageSize=15";
    return ( dispatch )=>{
      Axios.get( url ).then(( res )=>{
        dispatch({
          type: 'MORE_SOUSUO',
          data: res.data.content.data.page.result,
        })
      })
    }
  }
}

export default actions;