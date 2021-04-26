import '../styles/styles.scss'
import React from 'react';
import App from 'next/app';
// import MainLayout from '../components/_layouts/MainLayout'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;