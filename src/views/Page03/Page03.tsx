import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber } from 'antd';
import style from './page03.module.scss'
import { userInfoApi } from 'src/request';
import { useSelector } from 'react-redux';
import { UserInfoData, userInfoData } from './page04.interface'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} は　必要',
    types: {
        email: '${label} is not a valid email!',
        password: '${label} is not a valid password!',
    }
};
/* eslint-enable no-template-curly-in-string */
const onFinish = (values: any) => {
    console.log(values);
};


const Page03: React.FC = () => {
    /**
     * 状態定義
     */

    //redux
    const { userName } = useSelector((state: RootState) => ({

        userName: state.userDataReducer.userName

    }))

    //ユーザー資料
    const [userInfo, setUserInfo] = useState<any>(userInfoData)

    const [form] = Form.useForm();
    /**
     * 関数定義
     */
    async function getUserInfo(params: string) {


        const param = new FormData;
        param.append('user_name', userName)

        const { data } = await userInfoApi(userInfo);

        setUserInfo({ ...userInfo, mail: data.mail});

    }

    /**
     * 監視定義
     */
    useEffect(() => {
        getUserInfo('');
    }, []);

    useEffect(() => {
        console.log(userInfo);
        form.setFieldsValue({
            user: {
              name: userName,
              mail: userInfo.mail}
            })
    }, [userInfo]);

    

    return (
        <div className={style.main}>
            <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinish}
                validateMessages={validateMessages}
                size='large'
                style={{ maxWidth: 800, width: '100%' }}
                form={form}
            >

                <Form.Item name={['user', 'name']} label="名前" rules={[{ required: true }]}>
                    <Input readOnly disabled />
                </Form.Item>

                <Form.Item name={['user', 'mail']} label="メール" rules={[{ type: 'email', required: true }]}>
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'address']} label="住所">
                    <Input />
                </Form.Item>

                <Form.Item name={['user', 'phone']} label="電話番号">
                    <Input type='number' />
                </Form.Item>

                <Form.Item name={['user', 'memo']} label="問い合わせ内容">
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