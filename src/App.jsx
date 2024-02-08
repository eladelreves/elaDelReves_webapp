import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Toolbar } from './components/common/toolbar/Toolbar.jsx'
import { Footer } from './components/common/footer/Footer.jsx'
import { Landing } from './components/landing/Landing.jsx'
import { config } from './config.js'

export function App() {
    return (
        <>
            <Toolbar config={config}></Toolbar>
            <Routes>
                <Route path='/' element={<Landing config={config}/>}/>
            </Routes>
            <Footer config={config}></Footer>
        </>
    )
}