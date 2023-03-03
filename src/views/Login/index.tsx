import { FacebookOutlined, GoogleOutlined, SelectOutlined, TwitterOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './login.module.scss';
import { LoginApi, registerApi } from '../../request'
import { message } from 'antd';
import { userInfoData } from './login.interface';


const Login = () => {

    /**
     * 変数定義
     */
    //遷移処理
    const navigation = useNavigate();

    //switch状態
    const [isSignUp, setIsSignUp] = useState(false);

    //会員登録
    const [loginInfo, setLoginInfo] = useState(userInfoData);

    //新規会員
    const [registerInfo, setRegisterInfo] = useState(userInfoData);


    /**
     * 関数定義
     */
    //ログインフォーム　登録フォームswitch処理
    function handleSign() {
        setIsSignUp(!isSignUp);
    }

    //新規処理
    async function registerAction() {

        const result = dataCheck('register')

        if (Object.keys(result).length == 0) {

            await registerApi(registerInfo).then((res: any) => {
                console.log(123, res)
                if (res.code == 0) {
                    setIsSignUp(!isSignUp);
                    setRegisterInfo(userInfoData)
                }

                console.log(res)
            }).catch(err => {
                console.log(err)
            })

        } else {
            message.open({
                type: 'warning',
                content: `${Object.values(result)}`,
            });
        }

    }
    //登録処理
    async function loginAction() {

        const result = dataCheck('login')

        if (Object.keys(result).length == 0) {
            await LoginApi(loginInfo).then((res: any) => {
                console.log(res)
                if (res.code == 0) {
                    navigation('/page01')
                    localStorage.setItem('token', res.token)
                }
            }).catch(err => {
                console.log(err)
            })
        } else {
            message.open({
                type: 'warning',
                content: `${Object.values(result)}`,
            });
        }
    }

    //アカウント入力処理
    function handleUserName(type: string, e: React.ChangeEvent<HTMLInputElement>): void {
        if (type == 'login') {
            setLoginInfo(pre => ({
                ...pre,
                userInfo: {
                    ...pre.userInfo,
                    userName: e.target.value
                }
            }))
        } else if ('register') {
            setRegisterInfo(pre => ({
                ...pre,
                userInfo: {
                    ...pre.userInfo,
                    userName: e.target.value
                }
            }))
        }
    }

    //パスワード入力処理
    function handlePassword(type: string, e: React.ChangeEvent<HTMLInputElement>): void {
        if (type == 'login') {
            setLoginInfo(pre => ({
                ...pre,
                userInfo: {
                    ...pre.userInfo,
                    password: e.target.value
                }
            }))
        } else if ('register') {
            setRegisterInfo(pre => ({
                ...pre,
                userInfo: {
                    ...pre.userInfo,
                    password: e.target.value
                }
            }))
        }
    }

    //メールアドレス入力処理
    function handleMail(type: string, e: React.ChangeEvent<HTMLInputElement>): void {
        if (type == 'login') {
            setLoginInfo(pre => ({
                ...pre,
                userInfo: {
                    ...pre.userInfo,
                    mail: e.target.value
                }
            }))
        } else if ('register') {
            setRegisterInfo(pre => ({
                ...pre,
                userInfo: {
                    ...pre.userInfo,
                    mail: e.target.value
                }
            }))
        }

    }

    function custom(): void {
        navigation('/page01')
        localStorage.setItem('token', 'custom')
    }

    //入力チェック
    function dataCheck(type: string): { [key: string]: string; } {
        const errors: { [key: string]: string } = {};

        if (type == 'login') {

            if (loginInfo.userInfo.userName == null || loginInfo.userInfo.userName == '') {
                errors.userName = 'アカウント入力してください'
            }

            if (loginInfo.userInfo.password == null || loginInfo.userInfo.password == '') {
                errors.password = 'パスワード入力してください'

            }

        } else {

            if (registerInfo.userInfo.userName == null || registerInfo.userInfo.userName == '') {
                errors.userName = 'アカウント入力してください'
            }

            if (registerInfo.userInfo.password == null || registerInfo.userInfo.password == '') {
                errors.password = 'パスワード入力してください'

            }

            const emailRegex = /\S+@\S+\.\S+/;
            if(!emailRegex.test(registerInfo.userInfo.mail)){
                errors.password = '正しいメール入力してください'
            }

        }
        return errors
    }


    /**
     * 監視定義
     */
    //token削除
    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    return (
        <div className={style.loginMain}>
            <div className={`${style.container} ${isSignUp ? style.rightPanelActive : null}`} id='container'>
                <div className={`${style.formContainer} ${style.signUpContainer}`}>
                    <div className={style.form}>
                        <h1>新規登録</h1>
                        <div className={style.socialContainer}>
                            <a href='#' className='social'><TwitterOutlined /></a>
                            <a href='#' className='social'><GoogleOutlined /></a>
                            <a href='#' className='social'><FacebookOutlined /></a>
                        </div>
                        <span>アカウントを作成する</span>
                        <input
                            maxLength={20}
                            placeholder='Email'
                            onChange={(e) => handleMail('register', e)} value={registerInfo.userInfo.mail} />
                        <input
                            maxLength={6}
                            type='text'
                            placeholder='Name'
                            onChange={(e) => { handleUserName('register', e) }} value={registerInfo.userInfo.userName} />
                        <input
                            maxLength={12}
                            type='password'
                            placeholder='Password'
                            onChange={(e) => { handlePassword('register', e) }} value={registerInfo.userInfo.password} />
                        <button onClick={registerAction}>Sign Up</button>
                    </div>
                </div>
                <div className={`${style.formContainer} ${style.signInContainer}`} >
                    <div className={style.form}>
                        <h1>ログイン</h1>
                        <div className={style.socialContainer}>
                            <a href='#' className='social'><TwitterOutlined /></a>
                            <a href='#' className='social'><GoogleOutlined /></a>
                            <a href='#' className='social'><FacebookOutlined /></a>
                        </div>
                        <span>すぐに開始</span>
                        <input
                            maxLength={6}
                            type='userName'
                            placeholder='Name'
                            onChange={(e) => { handleUserName('login', e) }} />
                        <input
                            maxLength={12}
                            type='password'
                            placeholder='Password'
                            onChange={(e) => { handlePassword('login', e) }} />
                        <a href='#'>ログインできない?</a>
                        <button onClick={loginAction}>Sign In</button>

                    </div>

                </div>

                <div className={style.overlayContainer}>
                    <div className={style.overlay}>
                        <div className={`${style.overlayPanel} ${style.overlayLeft}`}>
                            <h1>始めましょう!</h1>
                            <p>会員ある方</p>
                            <button className={style.ghost} id='signIn' onClick={handleSign}>Sign In</button>
                        </div>
                        <div className={`${style.overlayPanel} ${style.overlayRight}`}>
                            <h1>新規登録!</h1>
                            <p>まだ会員登録していない方</p>
                            <button className={style.ghost} id='signUp' onClick={handleSign}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.footer}>
                <p>
                    体験したい方、
                    <a onClick={custom}>こちら</a>
                    へ
                </p>
            </div>
        </div>
    )
}

export default Login