
export interface UserInfoData {
    userInfo: {
        userName: string,
        mail: string,
        addr:string,
        tel:string,
        memo:string,
    },
    error: Object
}
export const userInfoData: UserInfoData = {
    userInfo: {
        userName: '',
        mail: '',
        addr:'',
        tel:'',
        memo:'',
    },
    error: {}
}
