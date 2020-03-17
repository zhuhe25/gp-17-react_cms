import axios from "axios";
import api from "./index"

export const booksListApi = (data)=>{
    return axios({
        method:"get",
        url:api.books.booksList,
        data
    })
}