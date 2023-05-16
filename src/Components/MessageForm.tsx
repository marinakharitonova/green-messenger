import TextArea from "antd/es/input/TextArea";
import {Button, Form} from "antd";
import {memo, useEffect, useState} from "react";
import {useSendMessageMutation} from "../features/apiSlice";
import {SendOutlined} from '@ant-design/icons';
import {useAppSelector} from "../features/store";
import {selectApiTokenInstance, selectIdInstance} from "../features/auth/authSlice";

type NewMessageFormProps = {
    chatId: string
}

const MessageForm = ({chatId}: NewMessageFormProps) => {
    const [form] = Form.useForm();
    const [, forceUpdate] = useState({});

    const idInstance = useAppSelector(selectIdInstance)
    const apiTokenInstance = useAppSelector(selectApiTokenInstance)

    const [send] = useSendMessageMutation()

    useEffect(() => {
        forceUpdate({});
    }, []);

    const onFinish = async (values: any) => {
        try {
            await send({
                idInstance,
                apiTokenInstance,
                message: values.message,
                chatId: chatId
            }).unwrap()
        } catch (e) {
            console.log(e)
        }

        form.resetFields()
    }

    const isBtnDisabled = () => {
        return !form.getFieldsValue(true).message || !chatId
    }

    return (
        <Form
            name="newMessage"
            form={form}
            onFinish={onFinish}
            autoComplete="off"
            style={{marginTop: 'auto', display: 'flex', alignItems: 'center'}}
        >
            <Form.Item
                name="message"
                style={{flexGrow: '1', margin: '0 8px 0 0'}}
            >
                <TextArea placeholder={'Enter your message'} rows={1}/>
            </Form.Item>

            <Form.Item shouldUpdate style={{marginBottom: 0}}>
                {() => (
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={isBtnDisabled()}
                        icon={<SendOutlined/>}
                    />
                )}
            </Form.Item>

        </Form>
    )
}

export default memo(MessageForm)