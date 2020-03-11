import React, { Component } from 'react'
import style from './video.scss'
import {Player} from 'video-react'
import { Comment, Avatar, Form, Button, List, Input,Icon,Tooltip, message } from 'antd';
import moment from 'moment';
import axios from 'axios'
import { Divider,Row,Col } from 'antd';
import Replay from './replay'
import { Tag } from 'antd';
import  RightList from './rightList'
import Again from './again'
const { TextArea } = Input;
  
  const Editor = ({ onChange, onSubmit, submitting, value }) => (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </div>
  );
export default class video extends Component {
    constructor(){
        super()
        this.state = {
            src : "",
            user : "",
            submitting: false,
            value: '',
            likes: [],
            dislikes: 0,
            action: null,
            current : "",
            avatar : "",
            name : "",
            commentArr : [],
            data :[],
            index : null,
            _id : [],
            comment : []
        }
    }
    replay(i){
         this.setState({
             index : i
         })  
    }
    componentDidMount(){
    if(window.localStorage.getItem('Token')){
            axios.get('http://localhost:5000/keep/users/current').then((result)=>{
            
                if(result.data){
                  this.setState({
                    avatar : result.data.img,
                    name : result.data.name
                  })
                }
          }).catch((err)=>{})
    }
    
    axios.get('http://localhost:5000/keep/posts/').then((result)=>{
        if(result.data){
            var data = []
            var _id = []
            var comment  = []
            var likes = []
            for(let j = 0;j<result.data.length;j++){
              likes.push(result.data[j].likes.length)
            }
              this.setState({
                likes : likes
              })
         for(let i = 0; i<result.data.length;i++){
            _id.push(result.data[i]._id)
            comment.push(result.data[i].comments)
            data.push({
                 actions : [
                        <span key="comment-basic-like">
                          <Tooltip title="Like">
                            { <Icon type="like" onClick = {()=>this.like(i)} style={{marginRight : "10px"}}></Icon>}
                          </Tooltip>
                          <span className="comment-action">{this.state.likes[i]}</span>
                        </span>,
                        <span key=' key="comment-basic-dislike"'>
                          <Tooltip title="Dislike">
                            {<Icon type="dislike"  onClick = {()=>this.dislike(i)} style={{marginRight : "10px"}}></Icon>}
                          </Tooltip>
                          <span className="comment-action">{this.state.dislikes}</span>
                        </span>,
                        <span key="comment-basic-reply-to" onClick={()=>{this.replay(i)}}  >Reply to</span>,
                      ],
                      author: result.data[i].name,
                      avatar: result.data[i].avatar,
                      content: (
                        <p>
                          {
                              result.data[i].text
                          }
                        </p>
                      ),
                      datetime: (
                        <Tooltip
                          title={moment()
                            .subtract(1, 'days')
                            .format('YYYY-MM-DD HH:mm:ss')}
                        >
                          <span>
                            {moment()
                              .subtract(1, 'days')
                              .fromNow()}
                          </span>
                        </Tooltip>
                      ),
                    })     
                 }
        this.setState({
            data : data,
            _id : _id,
            comment : comment,
        }) 
        }
        
    })
    }
    componentWillMount(){
        var arr = this.props.location.search.split('?')[1].split('=');
        this.setState({
            src : arr[1].split('&')[0],
            user : arr[2]
        })
    }

    handleSubmit = () => {
        if (!this.state.value) {
          return;
        }
        this.setState({
          submitting: true,
        });
       let obj = {}
        obj.name = this.state.name
        obj.avatar = this.state.avatar
        obj.text = this.state.value
        axios.post('http://localhost:5000/keep/posts/',obj).then((result)=>{
             if(result.data._id){
                setTimeout(()=>{
            this.setState({
            submitting: false,
            });
             window.location.reload()
            },1000)
           
             }
        })
      };

      handleChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
      like = (i) => {
        axios.post(`http://localhost:5000/keep/posts/like/${this.state._id[i]}`).then((result,err)=>{
          this.state.likes[i] = this.state.likes[i]+1
          if(result.data.alreadyliked){
            message.error('该用户已赞过')
          }
          else {
           window.location.reload()
          }
          
        })
      };
      dislike = (i) => {
        axios.post(`http://localhost:5000/keep/posts/unlike/${this.state._id[i]}`).then((result,err)=>{
          
          if(result.data.notliked){
            message.error('该用户没有赞过')
          }
          else{
            window.location.reload()
          }
        })
      }
    // 随机生成函数 生成颜色 
    randomCol(){
      let colorArr = ['magenta','red','volcano','orange','gold','lime','green','cyan','blue','geekblue','purple']
      let rom = Math.floor(Math.random()*colorArr.length)
      return colorArr[rom]
    }
    // 解析 url 
    decode_Url(src){
     let arr1 = decodeURI(src).split('/')
     let res = arr1[arr1.length-1]
     let arr2 = res.split('.')
     let result = arr2[0]
     return result
    }
    render() {
        const { submitting, value } = this.state;
        return (
            <div className="video-wrap">
              <Row>
                <Col span="14">
                <div className="views-left">
         <div className="video-box">
                  <div className="video-title" style={{display : 'flex' , marginBottom:30}}>
                     <Tag color={this.randomCol()} style={{marginRight:20}}>作品</Tag>
                      <h4>{this.decode_Url(this.state.src)}</h4>
                  </div>
                   <video controls src={this.state.src} style={{display : "block",width: "100%",minHeight : "100%"}}></video>
                </div>
                <div>
        <Comment
          avatar={
            <Avatar
              src={this.state.avatar}
              alt={this.state.name}
            />
          }
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
     <Divider />
     <List
    className="comment-list"
    itemLayout="horizontal"
    dataSource={this.state.data}
    renderItem={(item,i) =>{
      console.log(item);
      
      return (
        <li>
          <Comment
            actions={item.actions}
            author={item.author}
            avatar={item.avatar}
            content={item.content}
            datetime={item.datetime}
          />
          {
             this.state.comment[i].map((item,index)=>{
               return (
               <div key={index} style={{marginLeft : 50}}>
                  <Comment
        actions={[]}
    author={<a>{item.name}</a>}
        avatar={
          <Avatar
            src={item.avatar}
            alt={item.name}
          />
        }
        content={
          <p>
           {
             item.text
           }
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
               </div>
               )
             })
          }
          {
              this.state.index == i ? <Replay _id = {this.state._id[i]} ></Replay> : ""
          }
        </li>
        
      )
    }}
     />
         </div>
                </Col>
                <Col span="8" style={{marginLeft : 60}} >
                <div className="recommend-right">
                      <RightList {...this.props}></RightList>
                </div>
                </Col>
              </Row>
     
    </div>
        )
    }
}
