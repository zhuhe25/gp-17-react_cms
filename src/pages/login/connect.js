import {userLoginAsyncAction} from "@actions/users/userAction"
import {message} from "antd";
export const mapStateToProps = (state)=>({

})

export const mapDispatchToProps = (dispatch)=>({
    async handleLogin(values){
      let data = await dispatch(userLoginAsyncAction(values));
      if(data == 200){
        message.success("登陆成功",1.5,()=>{
            this.props.history.push("/home");
        })
      }
      
    }
})  