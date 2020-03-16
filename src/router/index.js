import {
    Home,
    BookManageMent,
    BooksList,
    OrderList,
    OrderManageMent,
    UserList,
    UserInfo
}
 from "@pages"


 import {
    HomeOutlined,
    SettingFilled,
    OrderedListOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';


//主要是给sliderTab用
 export const routesConifg = [
     {
         path:"/home",
         key:"/home",
         text:"首页",
         component:Home,
         icon:HomeOutlined,
     },
     {
        path:"/books",
        key:"/books",
        text:"书籍管理",
        icon:OrderedListOutlined,
        children:[
            {
                path:"/books/booksList",
                component:BooksList,
                text:"书籍列表",
                key:"/books/booksList",
                icon:""
            },
            {
                path:"/books/booksManagement",
                component:BookManageMent,
                text:"书籍分类",
                key:"/books/booksManagement",
                icon:""
            }
        ]
    },
    {
        path:"/order",
        key:"/order",
        icon:MenuUnfoldOutlined,
        text:"订单管理",
        children:[
            {
                path:"/order/orderList",
                component:OrderList,
                text:"订单列表",
                key:"/order/orderList",
                icon:""
            },
            {
                path:"/order/orderManagement",
                component:OrderManageMent,
                text:"订单分类",
                key:"/order/orderManagement",
                icon:""
            }
        ]
    },
    {
        path:"/user",
        key:"/user",
        icon:SettingFilled,
        text:"用户管理",
        children:[
            {
                path:"/user/userList",
                component:UserList,
                text:"用户列表",
                key:"/user/userList",
                icon:""
            },
            {
                path:"/user/userManagement",
                component:UserInfo,
                text:"个人信息",
                key:"/user/userManagement",
                icon:""
            }
        ]
    }
 ]