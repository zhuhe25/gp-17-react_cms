import React, { Component } from 'react';
import layoutHoc from "@layout"
import {Table,Tag, Button,Pagination,Modal,message} from "antd"
import {mapStateToProps,mapDispatchToProps} from "./connect"
import {connect} from "react-redux";
import {DetailContainer} from "./styled"
import ModalContainer from "@components/modelContainer"

@layoutHoc
@connect(mapStateToProps,mapDispatchToProps)
class BooksList extends Component {
    constructor(){
        super()
        this.state = {
          page:1,
          limit:10,
          visible:false,
          modifyData:{}
        }
        this.columns = [
            {
              title: '书籍ID',
              dataIndex: 'key',
              key: 'key',
              width:80,
              align:"center"
            },
            {
              title: '书籍名称',
              dataIndex: 'booksName',
              key: 'booksName',
              width:160,
              align:"center"
            },
            {
              title: '书籍作者',
              dataIndex: 'authName',
              key: 'authName',
              width:100,
              align:"center"
            },
            {
              title:"书籍封面",
              dataIndex:"booksImage",
              key:"booksImage",
              render:url=><img src={url}/>
            },
            {
              title:"书籍详情",
              dataIndex:"booksDes",
              key:"booksDes",
              width:280,
              align:"center",
              render:text=><DetailContainer>{text}</DetailContainer>
            },
            {
              title:"是否付费",
              dataIndex:"isPay",
              key:"isPay",
              align:"center",
              render:flag=><p>{flag?'付费':"免费"}</p>
            },
            {
                title:"标签",
                dataIndex:"tags",
                key:"tags",
                width:200,
                render: tags => (
                    <span>
                      {tags.map(tag => {
                        return (
                          <Tag key={tag}>
                            {tag.toUpperCase()}
                          </Tag>
                        );
                      })}
                    </span>
                  ),
            },
            {
              title:"操作",
              align:"center",
              render:(data)=>{
                return (
                  <div>
                    <Button type="link" onClick={this.showModal.bind(this,data)}>查看</Button>
                    <Button type="link" onClick={this.handleDel.bind(this,data)}>删除</Button>
                  </div>
                )
              }
            }
          ];
          
    }
    render() {
        let {booksList,count} = this.props;
        let {visible,modifyData} = this.state;
        return (
            <div>
                <Table dataSource={booksList} columns={this.columns} pagination={false}/>
                <Pagination total={count} onChange={this.handlePage.bind(this)}></Pagination>
                <ModalContainer visible={visible} hideModel={this.handleHideModel.bind(this)} modifyData={modifyData}/>
            </div>
        );
    }
    //控制对话框的显示
    showModal(data){
      this.setState({
        visible:true,
        modifyData:data
      })
    }
    //隐藏对话框
    handleHideModel(){
      //如果数据做来修改 在这里进行ajax数据的请求


      this.setState({
        visible:false
      })
    }
    // 分页
    handlePage(page,limit){
      this.props.handleGetBooksList(page,limit)
    }
    //删除
    handleDel(data){
      console.log(data);
      //通过书籍id进行删除

      Modal.confirm({
        title:"删除",
        okText:"删除",
        cancelText:"取消",
        content:`您确定要删除<<${data.booksName}>>这本书吗？`,
        onOk:()=>{
          //一般情况下在这里进行ajax删除  然后做轻提示
          message.success({
            content:"删除成功",
            duration:1.5
          })
        }
      })
    }
    componentDidMount(){
      this.props.handleGetBooksList(this.state.page,this.state.limit)
    }
}

export default BooksList