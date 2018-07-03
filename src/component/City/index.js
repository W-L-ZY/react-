import React from 'react';
import './city.css';
import Axios from 'axios';
import Pubsub from 'pubsub-js';
import { withRouter } from 'react-router-dom';

class City extends React.Component{
  constructor( props ){
    super( props );
    this.goSearch = this.goSearch.bind( this );    
    this.send = this.send.bind( this );
    this.state = {
      list:[
        {
          id: 0,          
          title: '热门城市',
          city: []
        },
        {
          id: 1,                      
          title: 'ABCDEF',
          city: []
        },
        {
          id: 2,                      
          title: 'GHIJ',
          city: []
        },
        {
          id: 3,                      
          title: 'KLMN',
          city: []
        },
        {
          id: 4,                      
          title: 'OPQR',
          city: []
        },
        {
          title: 'STUV',
          city: [],
          id: 5,                      
        },
        {
          title: 'WXYZ',
          city: [],
          id: 6,                      
        }
      ]
    }
  }
  componentWillMount(){
    Axios.get( 'http://localhost:3000/data' ).then(( res )=>{
      let a = res.data.cities.filter( item=>{
        return item.pinyin.charCodeAt(0) <= 70
      } )
      let b = res.data.cities.filter( item=>{
        return item.pinyin.charCodeAt(0) <= 74 && item.pinyin.charCodeAt(0) >=71
      } )
      let c = res.data.cities.filter( item=>{
        return item.pinyin.charCodeAt(0) <= 78 && item.pinyin.charCodeAt(0) >=75
      } )
      let d = res.data.cities.filter( item=>{
        return item.pinyin.charCodeAt(0) <= 82 && item.pinyin.charCodeAt(0) >=79
      } )
      let e = res.data.cities.filter( item=>{
        return item.pinyin.charCodeAt(0) <= 86 && item.pinyin.charCodeAt(0) >=83
      } )
      let f = res.data.cities.filter( item=>{
        return item.pinyin.charCodeAt(0) <= 90 && item.pinyin.charCodeAt(0) >=87
      } )
      this.setState({
        list:[
          {
            title: '热门城市',
            city: [{id: 12,name:'北京'},{id: 11,name:'上海'},{id: 13,name:'广州'},{id: 10,name:'深圳'},{id: 14,name:'成都'},{id: 16,name:'杭州'}]
          },
          {
            title: 'ABCDEF',
            city: a
          },
          {
            title: 'GHIJ',
            city: b
          },
          {
            title: 'KLMN',
            city: c
          },
          {
            title: 'OPQR',
            city: d
          },
          {
            title: 'STUV',
            city: e
          },
          {
            title: 'WXYZ',
            city: f
          }
        ]
      })
      
    })
  }
  goSearch(){
    this.props.history.push( '/home/search' );
  }
  send( e ){
    Pubsub.publish( 'city_name', e.target.innerHTML );
    this.props.history.push( '/home/search' );    
  }
  render(){
    return (
      <div className="city" ref={(city)=>this.city=city}>
        <header className="city_headBox">
          <div className="city_headBox_left" onClick={this.goSearch}>
            <span></span>
          </div>
          拉勾网
        </header>
        <div className="city_list">
          {
            this.state.list.map( item=>{
              return (
                <div key={item.id}>
                  <div className="city_list_title">{item.title}</div>
                  <ul className="city_list_hot">
                    {
                      item.city.map( items=>{
                        return <li key={items.id} onClick={this.send} >{items.name}</li>
                      } )
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
};

export default withRouter(City);