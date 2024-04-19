import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const login = JSON.parse(localStorage.getItem('login'));
  if(login){
    return children;
  }else{
    return <Navigate to={'/'}/>;
  }
}

export default ProtectedRoute
