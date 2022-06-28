import { lazy, Suspense } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Recommend from "../pages/Recommend"
const Singers = lazy(() => import('@/pages/Singers'))
const Rank = lazy(() => import('@/pages/Rank'))

const RouterConfig = () => {
    return (
        // null 可以被替换成 < div > 加载中... </div >
        <Suspense fallback={null}>
            <Routes>
                {/* <Route path="/" element={<Recommend />} /> */}
                <Route path="/" element={<Navigate to="/recomment" replace={true} />} />
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/singers" element={<Singers />} />
                <Route path="/rank" element={<Rank />} />
            </Routes>
        </Suspense>
    )
}

export default RouterConfig