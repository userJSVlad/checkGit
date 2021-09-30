import React from 'react'
import 'antd/dist/antd.css';
import style from './Main.module.css'
import { Layout } from 'antd';
import Taibl from './Taibl/Taibl';
const { Content } = Layout;

export default function Main() {
   return (
      <Content
         className={style.content}
      >
         <Taibl />
      </Content>
   )
}
