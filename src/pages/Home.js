import { Link } from 'react-router-dom';
import HeroItem from '../components/HeroItem';
import './Home.css';

export default function HomePage(props) {
    return (
        <header>
            <div id="nav-bg">
                <div className="nav__bar">
                    <div className="logo">
                        <Link to="/">Blog <span>App</span></Link>
                    </div>
                    <a href="javascript:void(0);" className="nav__menu-icon" onclick="myFunction()">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
                <nav id="nav__toggle-menu" className="nav__toggle-menu">
                    <ul>
                        <li><Link to="/" className="active">Home</Link></li>
                        <li><Link to="/">Favourites</Link></li>
                        <li><Link to="/">Settings</Link></li>
                        <li><Link to="/">Profile</Link></li>
                    </ul>
                </nav>
            </div>
            <HeroItem />
        </header>
    );
}