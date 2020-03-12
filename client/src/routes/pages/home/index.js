import React, { Component } from 'react'
import style from './index.scss'
import { List,Typography  } from 'antd';
import {Link} from 'dva/router' 
const arr = [
    {
        img : "http://localhost:5000/static/dva.jpg",
        text  : "测试",
        main : "111111222"
    },
    {
        img : "http://localhost:5000/static/git.jpg",
        text  : "测试",
        main : "1111113333" 
    },
    {
        img : "http://localhost:5000/static/node.jpg",
        text  : "测试",
        main : "1111114444"
    },
    {
        img : "http://localhost:5000/static/scss.jpg",
        text  : "测试",
        main : "1111115555"
    },
    {
        img : "http://localhost:5000/static/mongodb.jpg",
        text  : "测试",
        main : "1111116666"
    }
]
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
export default class index extends Component {
    constructor(){
        super()
        this.state = {
            hidden : false,
            index : 0
        }
    }
    
    componentDidMount(){
         var that = this
        window.onscroll = function(){
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop >=100 && scrollTop <=500){
                 that.setState({
                    hidden : true
                 })
            }
            else {
                that.setState({
                    hidden : false
                 }) 
            }
        }
    }
    forward(){
       if(this.state.index == 0) {
           this.setState({
               index : arr.length -1 
           })
       }
       else {
        this.setState({
            index : this.state.index - 1
        }) 
       }
    }
    back(){
        if(this.state.index == arr.length -1 ) {
            this.setState({
                index : 0 
            })
        }
        else {
         this.setState({
             index : this.state.index +1 
         }) 
        }
    }
    render() {
        const  {hidden} = this.state
         return (
             
            <div className="container">
                <div className="home-wrap">
                <div className="home-wrap-top-box">
                <div className="home-wrap-top-box-title">
                    <h2>
                    DISCOVER A NEW LIFE ABROAD
                    </h2>
                </div>
                <div className="home-wrap-top-box-hidden-content" style={{opacity : hidden ? 1 : 0  }} >
                    <p>why?</p>
                    <div>linshi de  neirong zanshixianzhemezhuo </div>
                </div>
                </div>
            </div>
            <div className="home-wrap-middle-box">
                  <div className="home-wrap-middle-box-title-wrap">
                       <section className="home-wrap-middle-box-title-wrap-section" >
                        <center className="home-wrap-middle-box-title-wrap-center">
                        <h2> EXPLORE YOUR OPTIONS </h2>   
                        </center>   
                       </section> 
                  </div>
                  <div className="home-wrap-middle-box-title-img-box">
                      <section className="home-wrap-middle-box-title-img-box-item">
                          <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://supcache.haobobbs.cn/data/www.m1ok.com/upload/netpic2/2017-07-04-09-31-384231372379280.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                      <section className="home-wrap-middle-box-title-img-box-item">
                      <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://supcache.haobobbs.cn/data/www.m1ok.com/upload/netpic2/2017-07-04-09-31-401891545637281.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                      <section className="home-wrap-middle-box-title-img-box-item">
                      <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://supcache.haobobbs.cn/data/www.m1ok.com/upload/netpic2/2017-07-04-09-31-422051995392094.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                      <section className="home-wrap-middle-box-title-img-box-item">
                      <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://localhost:5000/static/sc3.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                      <section className="home-wrap-middle-box-title-img-box-item">
                      <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://localhost:5000/static/sc4.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                      <section className="home-wrap-middle-box-title-img-box-item">
                      <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://localhost:5000/static/sc5.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                      <section className="home-wrap-middle-box-title-img-box-item">
                      <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://localhost:5000/static/sc6.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                      <section className="home-wrap-middle-box-title-img-box-item">
                      <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://localhost:5000/static/sc9.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                      <section className="home-wrap-middle-box-title-img-box-item">
                      <header>
                              <h4>
                              Best Country To Live In
                              </h4>
                          </header>
                          <div className="home-wrap-middle-box-title-img-box-item-container">
                              <img src="http://localhost:5000/static/sc8.jpg" alt=""/>
                          </div>
                          <div className="home-wrap-middle-box-title-img-box-item-bottom-write">
                          Explore which country is right for you and your family when you move abroad
                          </div>
                      </section>
                 </div>    
            </div>
            <div className="widget-area home-bottom1">
                <section className="widget_text widget widget_custom_html">
                    <center>
                        <h2>Join thousands of people who have used our unique service to discover the world.</h2>
                    </center>
                </section>
                <section className="widget-wrap">
                      <center><h3>As Seen On</h3></center>
                </section>
            </div>

            
            <div className="community-contain">
               <section className="community-contain-left">
               <section className="main-title">
                <img src="https://egret.com/img/homepage/dist/newIndex/pen.png"  />
                    <h2>技术热点</h2>
                </section>
                <section className="main-content" ref={(node)=>this.node = node}>
                    {
                        arr.map((item,index)=>{
                            return (
                                <div key={index} className={`main-content-list ${index === this.state.index ? "active" : ""}`}>
                                <div className="main-content-list-item-left-logo">
                                    <img src={item.img} alt=""/>
                                </div>
                                <div className={`main-content-list-item-right-write ${index === this.state.index ? "active" : ""}`}>
                                    <div className="main-content-list-item-right-write-top">
                                        <p>{item.text}</p>
                                    </div>
                                    <div className="main-content-list-item-right-write-bottom">
                                        {item.main}
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }  
                </section>
                <section className="blogBottom">
                <img className="line"  src="https://egret.com/img/homepage/dist/newIndex/line.png" />
                <img className="arrowBtn left" style={{width:"31.5px",height:"31.5px",marginRight : "15px"}}  src="https://egret.com/img/homepage/dist/newIndex/blogLeft.png" onClick={()=>this.forward()}></img>
                <span className="blogTime">2020-2-5</span>
                <img className="arrowBtn right" style={{width:"31.5px",height:"31.5px",marginRight : "15px"}} src="https://egret.com/img/homepage/dist/newIndex/blogRight.png" onClick={()=>this.back()}></img>
                <img className="line"    src="https://egret.com/img/homepage/dist/newIndex/line.png"></img>

                </section>
               </section>


                <section className="community-contain-right">
                <section className="community-contain-right-container">
                <section className="main-title">
                <img src="https://egret.com/img/homepage/dist/newIndex/pen.png"  />
                    <h2>技术热帖</h2>
                </section>
                <section className="main-content">
                <List
                 bordered
                 dataSource={data}
                 renderItem={item => (
                 <List.Item>
                 <Typography.Text mark>[ITEM]</Typography.Text>
                  <Link to="/">{item}</Link>
                 </List.Item>
      )}
    />
                </section>
               </section>
                </section>
            </div>

            </div>
            
        )
    }
}
