import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/DetailHeader"
import Home from "../pages/Home"
import ProductDetail from "../pages/ProductDetail"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail' element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;