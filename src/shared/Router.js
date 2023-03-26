import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ProductDetail from "../pages/Home"
import MyPage from "../pages/MyPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<ProductDetail />} />
                <Route path='/mypage' element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;