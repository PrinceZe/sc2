import React, { Component } from 'react'
import Random from '../../../utils/Random'
import style from './right.scss'
const arr = [
    {
        img : 'https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=569511152,3408038042&fm=85&s=5A4FB044745239D4504A1D19030080D9',
        distr : '测试数据',
        src : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
        img : 'https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=569511152,3408038042&fm=85&s=5A4FB044745239D4504A1D19030080D9',
        distr : '测试数据',
        src : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
        img : 'https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=569511152,3408038042&fm=85&s=5A4FB044745239D4504A1D19030080D9',
        distr : '测试数据',
        src : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
        img : 'https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=569511152,3408038042&fm=85&s=5A4FB044745239D4504A1D19030080D9',
        distr : '测试数据',
        src : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    },
    {
        img : 'https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=569511152,3408038042&fm=85&s=5A4FB044745239D4504A1D19030080D9',
        distr : '测试数据',
        src : "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    }
]
 class index extends Component {

     handle(i){
        this.props.history.push(`/views?src=${arr[i].src}&name=${arr[i].distr}`)
     }
    render() {
        return (
            <div className="right-list-wrap">
                <div className="right-list-top">
                    <h4>推荐列表</h4>
                </div>
                {
                  arr.map((item,i)=>{
                       return (
                           <div
                            key={i}
                            className="right-list"
                            onClick={()=>this.handle(i)}
                            >
                               <div className="img-wrap">
                                   <img src={item.img} alt=""/>
                               </div>
                               <div className="list-right">
                                   <p>
                                       {item.distr}
                                   </p>
                               </div>
                           </div>
                           
                       )
                   }) 
                }
            </div>
        )
    }
}

export default index
