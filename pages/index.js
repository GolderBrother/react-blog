import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { Button } from 'antd'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>
    <Header />
    <Button>我是antd按钮</Button>
  </>
)

export default Home
