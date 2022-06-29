import { Link } from 'react-router-dom'

// styles
import './Navbar.css'

// components
import SearchBar from './SearchBar'

export default function Navbar() {
    return (
        <div className='navbar'>
            <nav>
                <Link className='brand' to="/">
                    <h1>
                        Cooking Ninja
                    </h1>
                </Link>
                <SearchBar />
                <Link to="/create">Create Recipe</Link>
            </nav>
        </div>
    )
}