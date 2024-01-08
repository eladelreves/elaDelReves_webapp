import { Routes, Route } from 'react-router-dom'
import { Toolbar } from './components/common/toolbar/Toolbar.jsx'
import { Landing } from './components/landing/Landing.jsx'

export function App() {
    return (
        <>
            <Toolbar></Toolbar>
            <Routes>
                <Route path='/' element={<Landing/>}/>
            </Routes>
        </>
    )
}