import React, { Component } from 'react'
import style from './index.scss'
import { Carousel, Divider } from 'antd';
export default class index extends Component {
    constructor(){
        super()
        this.state = {
            hidden : false
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
       console.log(1)
    }
    back(){
      console.log(2)
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
                <section className="main-content">
                    <div className="main-content-list">
                        1
                    </div>
                    <div className="main-content-list">
                        2
                    </div>
                    <div className="main-content-list">
                        3
                    </div>
                    <div className="main-content-list">
                        4
                    </div>
                    <div className="main-content-list">
                        5
                    </div>
                </section>
                <section className="blogBottom" style={{marginTop : "15px"}}>
                <img className="line" style={{marginRight : "15px"}}  src="https://egret.com/img/homepage/dist/newIndex/line.png" />
                <img class="arrowBtn left" style={{width:"31.5px",height:"31.5px",marginRight : "15px" }} src="https://egret.com/img/homepage/dist/newIndex/blogLeft.png" onClick={()=>this.forward()}></img>
                <span class="blogTime" style={{marginRight : "15px"}}>2020-2-5</span>
                <img class="arrowBtn right" style={{width:"31.5px",height:"31.5px",marginRight : "15px"}} src="https://egret.com/img/homepage/dist/newIndex/blogRight.png" onClick={()=>this.back()}></img>
                <img class="line"   src="https://egret.com/img/homepage/dist/newIndex/line.png"></img>

                </section>
               </section>
                <section className="community-contain-right">

                </section>
            </div>

            </div>
            
        )
    }
}
