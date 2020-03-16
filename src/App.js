import React, { Component } from 'react'
import { Switch, Route, Redirect } from "react-router-dom";
import {
  Home,
  BookManageMent,
  BooksList,
  OrderList,
  OrderManageMent,
  UserList,
  UserInfo,
  Login
}
  from "@pages"
export default class App extends Component {
  render() {
    return (
      <Switch>
        <Redirect from="/" to="/home" exact />
        <Route path="/home" component={Home} />
        {/* 书籍管理 */}
        <Route path="/books" render={() => {
          return (
            <Switch>
              <Route path="/books/booksList" component={BooksList} />
              <Route path="/books/booksManagement" component={BookManageMent} />
            </Switch>
          )
        }} />
        {/* 订单管理 */}
        <Route path="/order" render={() => {
          return (
            <Switch>
              <Route path="/order/orderList" component={OrderList} />
              <Route path="/order/orderManagement" component={OrderManageMent} />
            </Switch>
          )
        }} />
      {/* 用户管理 */}
        <Route path="/user" render={() => {
          return (
            <Switch>
              <Route path="/user/userList" component={UserList} />
              <Route path="/user/userManagement" component={UserInfo} />
            </Switch>
          )
        }} />
      {/* 登陆页面 */}
      <Route path="/login" component={Login} />
      </Switch>
    )

  }
}
