import {Link} from "react-router-dom";
import '../nav.css'

export const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/add'>
                        Add Book</Link>
                </li>
            </ul>
        </nav>
    )
}