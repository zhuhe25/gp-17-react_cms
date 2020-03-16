import {loginTypes} from "./userTypes"
import {loginApi} from "@api/users.js"

export const userLoginAsyncAction = (values)=>{

    const userLoginAction = (value)=>({
        type:loginTypes,
        value
    })

    return async (dispatch)=>{
        let data = await loginApi(values);
        dispatch(userLoginAction(data.data))

        if(data.data.code == 200){
            return data.data.code
        }
    }
}
