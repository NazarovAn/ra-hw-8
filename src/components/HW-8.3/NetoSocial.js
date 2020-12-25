import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import AuthProvider from './Context/AuthProvider'

export default function NetoSocial() {
  return (
    <AuthProvider>
      <Header />
      <Main />
    </AuthProvider>
  )
}
