import React, { Component } from 'react';
import LeftSide from '../components/LeftSide'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { useRouter } from 'next/router';
import { inject } from "mobx-react"
let Ske = (props) => {
  let {children} = props
  //console.log('render ske')
  let S = useRouter()
  console.log('s', S)
  console.log(props)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <LeftSide path={S.route} />
      <div style={{ padding: '20px' }} {...props}>
        {children}
      </div>
    </Layout>
  )
}

export default Ske