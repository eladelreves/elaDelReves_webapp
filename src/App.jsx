import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Toolbar } from './components/common/toolbar/Toolbar.jsx'
import { Footer } from './components/common/footer/Footer.jsx'
import { Landing } from './components/landing/Landing.jsx'

export function App() {
    return (
        <>
            <Toolbar></Toolbar>
            <Routes>
                <Route path='/' element={<Landing/>}/>
            </Routes>
            <Footer></Footer>
        </>
    )
}