import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Modal } from 'antd';
import style from './page03.module.scss'
import { userInfoApi } from 'src/request';
import { useSelector } from 'react-redux';
import { UserInfoData, userInfoData } from './page04.interface'
import { CoffeeOutlined, ThunderboltOutlined } from '@ant-design/icons';

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

    //form状態
    const [form] = Form.useForm();

    //dialog
    const [isModalOpen, setIsModalOpen] = useState(false);

    //送信結果
    const [send, setSend] = useState(false)

    /**
     * 関数定義
     */
    //ユーザー資料取得処理
    async function getUserInfo(params: string) {


        const param = new FormData;
        param.append('user_name', userName)

        const { data } = await userInfoApi(userInfo);

        setUserInfo({ ...userInfo, mail: data.mail });

    }

    /* eslint-enable no-template-curly-in-string */
    const onFinish = (values: any) => {
        console.log(values);
        setIsModalOpen(true);
    };

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
                mail: userInfo.mail
            }
        })
    }, [userInfo]);



    return (
        <div className={style.main}>
            {!send && <Form
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

                <Form.Item name={['user', 'memo']} label="問い合わせ内容" rules={[{ required: true }]}>
                    <Input.TextArea />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit" >
                        Submit
                    </Button>
                    <Modal title="確認" open={isModalOpen} onOk={() => {
                        setIsModalOpen(false)
                        setSend(true)
                    }} onCancel={(() => {
                        setIsModalOpen(false);
                    })}>
                        <p>問い合わせを送信しますか？</p>
                    </Modal>
                </Form.Item>

            </Form>}
            {send &&

                <div className={style.sendMessage}>
                    <div >
                        <ThunderboltOutlined style={{ fontSize:100 ,color:'#3472ff'}} />
                    </div>
                    送信完了しました！
                </div>}
        </div>
    );
}

export default Page03