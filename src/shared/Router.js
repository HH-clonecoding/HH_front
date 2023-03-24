import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import ProductDetail from "../pages/Home"


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:id' element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;