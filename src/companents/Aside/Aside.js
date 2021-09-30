import React from 'react'
import 'antd/dist/antd.css';
import style from './Aside.module.css'
import { Layout, Menu } from 'antd';
const { Sider } = Layout;

export default function Aside() {
   return (
      <>
         <Sider
            width={200}
            className="site-layout-background"
            collapsible={['true']}
            trigger={['Hide']}
         >
            <Menu
               mode="inline"
               defaultSelectedKeys={['1']}
               className={style.aside}

            >
               <Menu.Item key="1">Workspace</Menu.Item>
               <Menu.Item key="2">Brands</Menu.Item>
               <Menu.Item key="3">Task manager</Menu.Item>
            </Menu>
         </Sider>
      </>
   )
}
