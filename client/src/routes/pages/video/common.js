import React , {Component} from 'react'
import { Comment, Tooltip, List,Card,Avatar,Icon, message  } from 'antd';
import moment from 'moment';
import Replay from './replay'
import style from './common.scss'
import axios from 'axios'
import uuid from 'uuid'
import MyComment from './comment'
const { Meta } = Card;

class CardTitle extends Component {
    constructor(){
        super()
        this.state = {}
    }
    render(){
        const {item} = this.props
        return (
            <div className="card-wrap">
               <div className="card-title">
               <img src={item.user.avatar} alt=""/>
                <div className="card-title-write">{item.user.name}</div>
               </div>
               <div className="page">
                  <div>
                  {item.text}
                  </div>
               </div>
            </div>
        )
    }
}








class index extends Component  {
  constructor(){
      super()
      this.state ={
      status : null,
       commentList : [],
      }
  }
  willComment(i){
    if(i == this.state.status){
        this.setState({
            status : null
        })
    }
   else {
    this.setState({
        status : i
    })
   }
}
like = (id) => {
    axios.post(`http://localhost:5000/keep/posts/like/${id}`).then((result)=>{
        if(result.data.alreadyliked) {
          message.error("该用户以赞过")
        }
        else {
         window.location.reload()   
        }
          
    })
  };
componentDidMount(){
    this.setState({
        current : this.props.comment[0].user._id
    }) 
  axios.get('http://localhost:5000/keep/posts/').then((result)=>{
   this.setState({
    commentList : result.data
   })
  })
  .catch((err)=>{
      window.location.reload()
  })
}
  render(){
      const {like} = this.state
      return(
          <div className="common-wrap">
            {
                this.props.comment.map((item,i)=>{
                    return (
                        <Card
                         extra={<div style={{cursor:"pointer", position: "relative",
                         height : "101px" , display : "flex", flexDirection : "column" , justifyContent : "space-around" ,fontSize:"16px"}} >
                             <div onClick={()=>this.willComment(i)}>comment</div>
                             <div>
                             <Icon type="heart" style={{color : (item.likes.length > 0 )   ? "red" : "rgba(0, 0, 0, 0.65)" , fontSize:"16px",marginRight : "5px" }} onClick={()=>this.like(item._id)}></Icon>
                 </div>
                         </div>}
                         key = {i}
                         title = {<CardTitle item={item}></CardTitle>}
                         style = {{marginBottom : 60}}
                        >
                            {
                               this.state.commentList.filter((item1,index)=>{
                                   return item1.current_id ==  item._id
                               }).map((item2,index2)=>{
                                  return (
                                  <div key={index2}>
                                      <MyComment comment={item2}></MyComment>
                                  </div>
                                  )
                               })
                            }
                            {
                                this.state.status == i ? <Replay current_id = { item._id }></Replay> : ""
                            }
                        </Card>
                    )
                })
            }
          </div>
      )
  }
}



export default index