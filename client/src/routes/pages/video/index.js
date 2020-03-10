import React, { Component } from 'react'
import style from './index.scss'
import { Row, Col ,Form,Affix,Button,Input, Upload, Modal,Icon ,message,Empty } from 'antd';
import axios from 'axios'
import setAuthCurrent from '../../../utils/setAuthCurrent'
import Common from './common'
import Views from './views'
const {TextArea} = Input

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// 评论 组件 
 class index extends Component {
  constructor(){
    super()
    this.state = {
    status : true,
    previewVisible: false,
    previewImage: '',
    fileList: [],
    current : null,
    handleList : [],
    renderData : [],
    }
  }
  handleCancel = () => this.setState({ previewVisible: false });
  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };
       async handleSubmit(e){
         e.preventDefault()
    if(!window.localStorage.getItem('Token')){
       message.error('请先登录')
       setTimeout(()=>{
        this.props.history.push('/login')
       },1000)
    }
    else{
      this.props.form.validateFields((err,values)=>{ 
        if(!err){
   const {text } = values
     // 只有图片 没有文字 
    if(this.state.handleList.length > 0 && text == undefined){
         // 走 file 接口  
         var formData = new FormData()
         var imgarr = []
     for(let i =0; i<this.state.handleList.length;i++){
        formData.append('images',this.state.handleList[i])
        imgarr.push(this.state.handleList[i].name)
     }
     formData.append('current',this.state.current)
     formData.append('imgarr',JSON.stringify(imgarr))
     axios.post('http://localhost:5000/keep/public/file',formData)
     .then((res)=>{message.info('添加成功');
      window.location.reload()
      })
   .catch((err)=>{message.info("添加失败");
   })
    }
    // 只有文字 没有图片 
    else if(this.state.handleList == 0 && text !== undefined ){
       message.error('请上传有效的视频')
    }

    // 有图片 有文字 
    else if(this.state.handleList.length > 0 && text !==undefined ){
     var formData1 = new FormData()
     formData1.append('text',text)
 axios.post('http://localhost:5000/keep/public/',formData1)
 .then((res)=>{
  var formData2 = new FormData;
  var imgarr = []
  formData2.append('renderId',res.data._id)
  for(let i =0; i<this.state.handleList.length;i++){
   formData2.append('images',this.state.handleList[i])
   imgarr.push(this.state.handleList[i].name)
}
formData2.append('imgarr',JSON.stringify(imgarr))
axios.post('http://localhost:5000/keep/public/file',formData2)
.then((res)=>{message.info('添加成功');
 window.location.reload()
 })
.catch((err)=>{message.info("添加失败");
})
 }) 
    }
    // 什么都没有 
    else {
     message.error('发布的不能为空')
    }
}
})
    } 
  }
  go_express(){
    
      this.setState({
        status : !this.state.status
      })
    
  }
  async handleFile(file){
    this.state.handleList.push(file)
    this.setState({
      handleList : this.state.handleList
    })
  }
  handleChange = ({
    fileList }) => {
if(this.state.fileList.length >1 ){
  for(var i = 0;i<fileList.length;i++){
    if(i+1 === undefined){
      return 
    }
    for(let j = i+1;j<fileList.length;j++){
        if(fileList[i].name === fileList[j].name ){
          fileList.splice(i,1)
          message.error('上传失败')
        }
    }
  }
    this.setState({ fileList })
  }
   else {
   this.setState({ fileList })
   }
};


componentDidMount() {

axios.get('http://localhost:5000/keep/public/').then((result)=>{
  this.setState({
    renderData : result.data
  })
})



  setAuthCurrent(window.localStorage.getItem('Token'))
  if(window.localStorage.getItem('Token')){
    axios.get('http://localhost:5000/keep/users/current').then((result)=>{
    
        if(result.data){
          this.setState({
            current : result.data.id,
            name : result.data.name
          })
        }
  }).catch((err)=>{})
  }
}


  render() {
      const {getFieldDecorator} = this.props.form
      const { previewVisible, previewImage, fileList } = this.state;
      const uploadButton = (
        <div>
          <Icon type="plus"></Icon>
          <div className="ant-upload-text">Upload</div>
        </div>
      );
        return (
            <div className="public-wrap">
                <Row>
                   <Col span={this.state.status?24:18} className=""  >
                     <div className="public-users">
                        {
                          this.state.renderData.length > 0 ? (<Views comment = { this.state.renderData}></Views>) : (<Empty /> )
                        }
                     </div>
                   </Col>
                   <Col span={this.state.status?0:6} className="">
                <div className="public-commen">
                <Form>
                  <Form.Item>{getFieldDecorator('text',{
                    rules : [
                      {
                        required: true,
                        message: '内容不能为空!!!'
                      }
                    ]
                  })(<TextArea placeholder="请输入内容" rows={12} allowClear/>)}</Form.Item>
                    <div className="clearfix">
                      <Upload
                        action={(file)=>this.handleFile(file)}
                        listType="picture-card"
                        fileList={fileList}
                onPreview={this.handlePreview}
                onChange={this.handleChange}
                
                 >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
            <Button onClick={(e)=>this.handleSubmit(e)} className="btn" type="primary">提 交</Button>
                </Form>
                </div>
                </Col>
                </Row>
                <Affix style={{ position: 'fixed', top: '640px' , right: 50 }} onChange={affixed =>console.log() } onClick={()=>this.go_express()}>
                <Button>发布动态</Button>
                </Affix>
            </div>
        )
    }
}


export default Form.create()(index)
