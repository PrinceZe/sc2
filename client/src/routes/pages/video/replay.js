import React from 'react'
import { Comment, Avatar, Form, Button,  Input, message } from 'antd';
import axios from 'axios'
import setAuthCurrent from '../../../utils/setAuthCurrent'
const { TextArea } = Input;

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
       Replay
      </Button>
    </Form.Item>
  </div>
);

class App extends React.Component {
  state = {
    submitting: false,
    value: '',
    current : {}
  };
  componentDidMount(){
     if(window.localStorage.getItem('Token')){
        setAuthCurrent(window.localStorage.getItem('Token'))
        axios.get('http://localhost:5000/keep/users/current').then((result)=>{
            this.setState({
                current : result.data
            })
           })
     }
  }



  handleSubmit = () => {
    // 发起网络请求
    if(!this.state.value){
        message.error('内容不能为空')
        return 
    }
    var obj = {}
    obj.text = this.state.value
    obj.avatar = this.state.current.img
    obj.name = this.state.current.name
    axios.post(`http://localhost:5000/keep/posts/comment/${this.props._id}`,obj).then((result)=>{
      window.location.reload()
    })
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { submitting, value,current } = this.state;
    return (
      <div style={{marginTop : "30px"}}>
        <Comment
          avatar={
            <Avatar
              src={current.img}
              alt={current.name}
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
    );
  }
}

export default App