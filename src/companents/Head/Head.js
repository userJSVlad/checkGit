import React from 'react'
import 'antd/dist/antd.css';
import style from './Head.module.css'
import { Layout, Menu } from 'antd';
const { Header } = Layout;


export default function Head() {
   return (
      <Header>
         <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" className={style.value}>Home</Menu.Item>
         </Menu>
      </Header>
   )
}
