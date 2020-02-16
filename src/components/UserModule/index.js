import React from 'react';
import { Table } from 'antd';
import AddUserForm from './AddUserForm';
import 'antd/dist/antd.css';
import './index.css';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age'
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address'
    }
]

const UserModule = (props) => {
    console.log("index render");
    return (
        <div
            style={{
                position: "absolute",
                top: 10,
                width: '100%',
                padding: '20px 50px 20px 50px'
            }}
        >
            <div 
                style={{
                    display: 'flex',
                    marginBottom: '20px'
                }}
            >
                <AddUserForm />
            </div>
            <Table dataSource={props.userData} columns={columns} pagination={false} />
        </div>
    );
};

export default UserModule;
