import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ProductDetail from "../pages/ProductDetail"
import MyPage from "../pages/MyPage"
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import KakaoLogin from "../pages/KakaoLogin"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail' element={<ProductDetail />} />
                <Route path='/mypage' element={<MyPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />

                <Route path='/auth/kakao/callback' element={<KakaoLogin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;