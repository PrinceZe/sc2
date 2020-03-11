import React,{Component} from 'react'
import { Comment, Tooltip, Avatar,Icon } from 'antd';
import moment from 'moment';
class index extends Component {
  constructor(){
      super()
      this.state = {
        likes: 0,
        dislikes: 0,
        action: null,
      }
  }

  like = () => {
    this.setState({
      likes: 1,
      dislikes: 0,
      action: 'liked',
    });
  };

  dislike = () => {
    this.setState({
      likes: 0,
      dislikes: 1,
      action: 'disliked',
    });
  };

  render() {

    const actions = [
        <span key="comment-basic-like">
        <Tooltip title="Like">
          {this.state.action === 'liked' ? <Icon type="dislike" style={{marginRight : "10px"}}></Icon> : <Icon type="like" style={{marginRight : "10px"}}></Icon>}
        </Tooltip>
        <span className="comment-action">{this.state.likes}</span>
      </span>,
     <span key=' key="comment-basic-dislike"'>
     <Tooltip title="Dislike">
       {this.state.action === 'liked' ? <Icon type="like" style={{marginRight : "10px"}}></Icon> : <Icon type="dislike" style={{marginRight : "10px"}}></Icon>}
     </Tooltip>
     <span className="comment-action">{this.state.dislikes}</span>
   </span>,
   <span key="comment-basic-reply-to" >Reply to</span>,
    ];

    return (
      <Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}

export default index