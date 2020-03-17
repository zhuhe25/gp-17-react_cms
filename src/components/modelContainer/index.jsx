import React, { Component } from 'react';
import { Modal, Form, Input, Button, Upload, message,Switch,Checkbox} from "antd"
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

//将上传的图片转化成base64的方式   ===> 参考 node socket.io聊天室
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

//上传图片之前的一个处理
function beforeUpload(file) {
    //判断图片的类型
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    //判断图片的大小
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}





class ModalContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageUrl: "",
            loading:false,
            plainOptions:["玄幻","修仙","动作","爱情","都市","校园","黑道","穿越"],
            
        }
    }
    render() {
        let { visible } = this.props

        //当没有上传的时候默认显示这个组件
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        let {modifyData} = this.props;
        this.state.imageUrl = this.props.modifyData.booksImage;
        const { imageUrl,plainOptions} = this.state;
        return (
            <Modal
                title="修改书籍信息"
                visible={visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                footer={null}
                destroyOnClose={true}
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 20 }}
                    onFinish={this.handleSubmit.bind(this)}
                >
                    <Form.Item
                        label="书籍名称"
                        // name是不做双数据绑定的 name配合defaultValue  value配合onchange
                        name="booksName"
                    >   
                        {/* defaultValue单纯的赋值不做修改(没有做双数据绑定)  value是做修改的(双数据绑定的) */}
                        <Input type="text" defaultValue={modifyData.booksName}/>
                        {/* <Input type="text" value={modifyData.booksName} onChange={this.handleBooksChange.bind(this)}/> */}
                    </Form.Item>
                    <Form.Item
                        label="书籍作者"
                        name="authName"
                    >
                        <Input type="text" defaultValue={modifyData.authName}/>
                    </Form.Item>
                    <Form.Item
                        label="书籍详情"
                        name="booksDes"
                    >
                        <Input type="text" defaultValue={modifyData.booksDes}/>
                    </Form.Item>
                    <Form.Item
                        label="是否付费"
                        name="isPay"
                    >
                        <Switch checkedChildren="付费" unCheckedChildren="免费" checked={modifyData.isPay}/>
                    </Form.Item>
                    <Form.Item
                        label="类型"
                        name="tags"
                    >
                        <Checkbox.Group options={plainOptions} defaultValue={modifyData.tags}/>
                    </Form.Item>
                    <Form.Item label="书籍封面">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">修改</Button>
                    </Form.Item>
                </Form>

            </Modal>
        );
    }
    //更新提交
    handleSubmit(values){
        console.log(values);
        //轻提示  提示是否确认修改
        Modal.confirm({
            content:"您确认要修改信息吗？",
            cancelText:"取消",
            okText:"修改",
            onOk:()=>{
                //做ajax
                
                 //然后在销毁对话框
                 this.props.hideModel();
            }
        })
       
    }
    handleOk() {
        this.props.hideModel();
    }
    handleCancel() {
        this.props.hideModel();
    }
    //点击上传图片的时候触发的方法
    handleChange = info => {
        //判断图片是否在加载过程中
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        //图片加载成功
        if (info.file.status === 'done') {
            //加载成功后将图片转化为base64的方式
            getBase64(info.file.originFileObj, imageUrl =>
                this.setState({
                    imageUrl,
                    loading: false,
                }),
            );
        }
    };
}

export default ModalContainer;