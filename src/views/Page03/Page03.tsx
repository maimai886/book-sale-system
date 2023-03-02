import React from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import style from './page03.module.scss'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
    console.log(values);
};
const Page03: React.FC = () => {
    return (
        <div className={style.main}>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                size='large'
                style={{ maxWidth: 800, width:'100%' }}
            >
                
                <Form.Item name={['user', 'name']} label="UserName" rules={[{ required: true }]}>
                    <Input readOnly/>
                </Form.Item>

                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>

                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    );
}

export default Page03