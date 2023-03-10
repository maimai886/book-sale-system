
export interface UserInfoData {
    auth: Array<string>,
    userInfo: {
        userName: string,
        password: string,
        mail: string,
    },
    token: string,
    error: Object
}
export const userInfoData: UserInfoData = {
    auth: [''],
    userInfo: {
        userName: '',
        password: '',
        mail: '',
    },
    token: '',
    error: {}
}
