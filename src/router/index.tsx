import { lazy } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../views/Home"

//Reactのlazy loading（遅延読み込み）実装する
const Page01 = lazy(()=>import("../views/Page01/Page01"))
const Page02 = lazy(()=>import("../views/Page02/Page02"))
const Page03 = lazy(()=>import("../views/Page03/Page03"))
const Page04 = lazy(()=>import("../views/Page04/Page04"))
const Page05 = lazy(()=>import("../views/Page05/Page05"))
const Login = lazy(()=>import("../views/Login/index"))

const routes = [
    {
        path:"/",
        element: <Navigate to="login" />
    },
    {
        path:"login",
        element: <Login />
    },
    {
        path:"/",
        element: <Home />,
        children:[
            {//HomePage
                path:"page01",
                element: <Page01 />
            },
            {//在庫管理
                path:"page02",
                element: <Page02 />
            },
            {//ユーザー
                path:"page03",
                element: <Page03 />
            },
            {//入荷明細
                path:"page04",
                element: <Page04 />
            },
            {//販売明細
                path:"page05",
                element: <Page05 />
            }
        ]
    },
    {//例外ページ
        path:"*",
        element: <Navigate to="login" />
    }
]

export default routes

//Routerの旧書き方
 /*const baseRouter = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="/" element={<Navigate to="/home" />}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
 }

 export default baseRouter*/