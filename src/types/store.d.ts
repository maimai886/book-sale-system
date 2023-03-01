//typescript 返り値を取得
type RootState = ReturnType<typeof import('../store').getState>
interface Window{
    __REDUX_DEVTOOLS_EXTENSION__: Function
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function
}