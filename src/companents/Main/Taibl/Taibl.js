import React, { useState } from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Link } from 'react-router-dom'
import style from './Taibl.module.css'
import { useHistory, Route, Redirect } from "react-router-dom";

const columns = [
   {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>,
      sorter: (a, b) => a.name - b.name,
      align: 'center',
   },
   {
      title: 'Last modified',
      dataIndex: 'modified',
   },
   {
      title: 'Created',
      dataIndex: 'created',
      sorter: (a, b) => a.key - b.key,
   },
];

const data = [
   {
      key: '1',
      name: 'top',

   },
   {
      key: '2',
      name: 'vera',
   },
   {
      key: '3',
      name: 'agar',
   },
   {
      key: '4',
      name: 'lipa',
   },
];


export default function Taibl() {
   const [url, getUrl] = useState('/')


   const getValue = (item) => {
      
   }
   return (
      <>
         <Table
            columns={columns}
            dataSource={data}
            onRow={(record) => ({ onClick: () => { getValue(record) } })}
         />
      </>
   )
}

//{url !== '/' ? <a rel="noopener noreferrer" href="http://url.com" target="_blank">Link Here</a> : <Redirect to='/'></Redirect>}
//window.open(`http://localhost:3000/${item.name}`)
// useHistory()
//Link