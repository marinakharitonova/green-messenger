import React from 'react';
import {Button, Form, Input} from "antd";
import {useAppDispatch} from "../features/store";
import {login} from "../features/auth/authSlice";

function Login() {

    const dispatch = useAppDispatch()

    const onFinish = (values: any) => {
        dispatch(login(values))
    };

    return (
        <div style={{height: 'calc(100vh - 60px)', width: '100wv', display: 'flex', alignItems: "center", justifyContent: "center"}}>
            <Form
                name="login"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 500, width: '100%', background: '#ffffff', padding: '30px', borderRadius: '20px'}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="idInstance"
                    name="idInstance"
                    rules={[{required: true, message: 'Please input your idInstance!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="apiTokenInstance"
                    name="apiTokenInstance"
                    rules={[{required: true, message: 'Please input your apiTokenInstance!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}} style={{marginBottom: 0}}>
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;