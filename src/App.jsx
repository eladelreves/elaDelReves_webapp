import { Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/media/icomoon/style.css'
import { Toolbar } from './components/common/toolbar/Toolbar.jsx'
import { Footer } from './components/common/footer/Footer.jsx'
import { Home } from './components/home/Home.jsx'
import { config } from './config.js'

export function App() {
    return (
        <>
            <Toolbar config={config}></Toolbar>
            <Routes>
                <Route path='/' element={<Home config={config}/>}/>
            </Routes>
            <Footer config={config}></Footer>
        </>
    )
}