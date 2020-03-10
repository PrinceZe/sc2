import React, { Component } from 'react'
import style from './views.scss'
import {Card} from 'antd'
import {Player} from 'video-react'
const { Meta } = Card;
export default class views extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div className="views-wrap">
                {
                    this.props.comment.map((item,i)=>{
                       return (
                        <Card
                        hoverable
                        key={i}
                        style={{ width: 240,marginRight: 30,marginBottom:30,height : 270 }}
                        cover={<Player playsInline  src="http://localhost:5000/static/测试视频.mp4" />}
                        >
                       <Meta title="Europe Street beat" description="www.instagram.com" />
                      </Card>
                       )
                    })
                }
                 <Card
                        hoverable
                        
                        style={{ width: 240,marginRight: 30,marginBottom:30,height : 270 }}
                        cover={<video controls   src="http://localhost:5000/static/测试视频.mp4" />}
                        >
                       <Meta title="Europe Street beat" description="www.instagram.com" />
                      </Card>
            </div>
        )
    }
}
