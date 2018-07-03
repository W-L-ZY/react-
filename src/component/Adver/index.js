import React from 'react';
import './adver.css';

class Adver extends React.Component{
  changeShow(){
    this.node.style.display = 'none';
  };
  render(){
    return(
      <div className="avire_class" ref={(node)=>this.node=node}>
        <div className="adver_left">
          <img src="https://www.lgstatic.com/m/images/asset/custom/list/img/download_mascot.png" alt="下载APP"/>
        </div>
        <div className="adver_right" onClick={this.changeShow.bind(this)}>
          <img src="https://www.lgstatic.com/m/images/asset/custom/list/img/download_btn_close.png" alt="下载APP"/>
        </div>
        <div className="adver_content">
          <div className="adver_content_left">
            <img src="https://www.lgstatic.com/m/images/asset/custom/list/img/download_logo_new.png" alt=""/>
          </div>
          <div className="adver_content_center">
            <img src="https://www.lgstatic.com/m/images/asset/custom/list/img/download_txt_new.png" alt=""/>
          </div>
          <div className="adver_content_right">
            <img src="https://www.lgstatic.com/m/images/asset/custom/list/img/download_btn_new.png" alt=""/>
          </div>
        </div>
      </div>
    )
  }
};

export default Adver;