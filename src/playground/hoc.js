// Higher Order Component (HOC) - A component (HOC) that renders another component

import React from 'react'
import ReactDOM from "react-dom";


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
    <p>The Time is: {props.time}</p>
  </div>
)

const withAdminWarning = (WrappedComponents) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share </p>}
      {props.isAdmin && <WrappedComponents {...props}/>}
    </div>
  )
}

const LoginInfo = (props) => (
  <div>
    <h1>LoginInfo</h1>
    <p>Message: {props.info}</p>
  </div>
)

const requireAuthentication = (WrappedComponents) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponents {...props}/> : "Please log in"}
    </div>
  )
}


// requireAuthentication ( AuthInfo HOC)
const AuthInfo = requireAuthentication(LoginInfo)
const AdminInfo = withAdminWarning(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info = "there are the details" time = {120000} />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info = "this are the details" time = {120000} />, document.getElementById('app'))