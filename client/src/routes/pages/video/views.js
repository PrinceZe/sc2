import React, { Component } from 'react'
import style from './views.scss'
import {Card} from 'antd'
import {Player} from 'video-react'
const { Meta } = Card;
export default class views extends Component {
   
    constructor(){
        super()
        this.state = {
        }
    }
    handle(item){
        this.props.history.push(`/views?src=${item.img[0]}&name=${item.user.name}`)
    }
    render() {
        return (
            <div className="views-wrap">
                {
                    this.props.comment.map((item,i)=>{
                       return (
                        <Card
                        hoverable
                        key={i}
                        style={{ width: 240,marginRight: 30,marginBottom:30,height : 270 }}
                        className="card-wrap"
                        >
                        <Player playsInline  src={item.img[0]} width="100%" ref="play" className="play_id" />
                       <Meta  description={item.text} style={{marginTop:40}}  onClick={()=>this.handle(item)} />
                      </Card>
                       )
                    })
                }
            </div>
        )
    }
}
