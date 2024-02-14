import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import './assets/media/icomoon/style.css'

import { Toolbar } from './components/_common/toolbar/Toolbar.jsx'
import { Footer } from './components/_common/footer/Footer.jsx'
import { Home } from './components/home/Home.jsx'
import { Blog } from './components/blog/Blog.jsx'
import { Delreves } from './components/delreves/Delreves.jsx'
import { Ela } from './components/laela/Ela.jsx'
import { Login } from './components/login/Login.jsx'
import { config } from './config.js'

export function App() {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    return (
        <>
            {!isLoginPage && <Toolbar config={config} />}

            <Routes>
                <Route path='/' element={<Home config={config}/>}/>
                <Route path='/laela' element={<Ela config={config}/>}/>
                <Route path='/blog' element={<Blog config={config}/>}/>
                <Route path='/delreves' element={<Delreves config={config}/>}/>
                <Route path='/login' element={<Login config={config}/>}/>
            </Routes>
            
            {!isLoginPage && <Footer config={config} />}
        </>
    );
}