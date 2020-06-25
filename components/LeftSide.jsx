import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
import Link from 'next/link';
class LeftSide extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <Sider>
        <div style={{color:'white'}}>Side Header</div>
        <Menu theme="dark" selectedKeys={[this.props.path]} mode="inline" onClick={()=>{}}>
        <Menu.Item key='/'>
        <Link href='/'>
          <a>Index</a>
        </Link>
        </Menu.Item>
        <Menu.Item key='/about'>
        <Link href='/about'>
          <a>About</a>
          </Link>
        </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default LeftSide