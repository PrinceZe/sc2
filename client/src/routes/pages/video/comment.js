import React ,{Component} from 'react'
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
    render(){
        const {likes,dislikes,action} = this.state
        const actions = [
          ];
          return (
            <div>
                <Comment
              actions={actions}
          author={<a>{this.props.comment.user.name}</a>}
              avatar={
                <Avatar
                  src={this.props.comment.user.avatar}
                  alt={this.props.comment.user.name}
                />
              }
              content={
                <p>
                 {this.props.comment.text}
                </p>
              }
              datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                  <span>{moment().fromNow()}</span>
                </Tooltip>
              }
            />
            </div>
          );
    }

}
export default index