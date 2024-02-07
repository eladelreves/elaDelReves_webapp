import './toolBar.css'
import { Link } from 'react-router-dom'

export function Toolbar(){
    return(
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">LA ELA</Link></li>
                <li><Link to="/">BLOG</Link></li>
                <li><Link to="/">FORMA PARTE</Link></li>
                <li><Link to="/">PARA TI</Link></li>
            </ul>
        </nav>
    )
}