import {loginTypes} from "@actions/users/userTypes"
import Cookies from "js-cookie";
let defaultState = {
    authToken:""
}

export default (state=defaultState,actions)=>{
    switch(actions.type){
        case loginTypes:
            let tokenState = Object.assign({},state);
            tokenState.authToken = actions.value.data.authtoken;
            Cookies.set("token",actions.value.data.authtoken)
            return tokenState;
    }
    return state;
}