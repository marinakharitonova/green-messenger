import React, {memo, useEffect, useState} from 'react';
import {Button, Form, Input} from "antd";
import {PlusOutlined} from "@ant-design/icons";

type ChatAdderProps = {
    handleAddChat: (phone: string) => void
}

function ChatAdder({handleAddChat}: ChatAdderProps) {
    const [phone, setPhone] = useState('')

    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    useEffect(() => {
        forceUpdate({});
    }, []);


    const onFinish = (values: any) => {
        const slicedPhone = values.phone.slice(1)

        handleAddChat(slicedPhone)
        form.resetFields()
    }

    const isBtnDisabled = () => {
        return !form.getFieldsValue(true).phone
    }
    const handlePhoneChange = (e: any) => {
        setPhone(e.target.value)
    }

    return (
        <Form
            name="addChat"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            style={{marginTop: 'auto', display: 'flex', alignItems: 'center'}}
        >
            <Form.Item
                name="phone"
                style={{flexGrow: '1', margin: '0 8px 0 0'}}
            >
                <Input type="tel" placeholder="+79001234567" value={phone} onChange={handlePhoneChange}/>
            </Form.Item>

            <Form.Item shouldUpdate style={{marginBottom: 0}}>
                {() => (
                    <Button type="primary" icon={<PlusOutlined/>} htmlType="submit"
                            disabled={isBtnDisabled()}/>
                )}
            </Form.Item>

        </Form>
    );
}

export default memo(ChatAdder);