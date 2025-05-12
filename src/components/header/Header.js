
import './../Header/Header.css'

const Header = () => {
    return (
        <header>
            <div className="san">
                <div className="container">
                    <nav className="navbar">    
                        <p className="logo">Escape.</p>
                        <ul className="nabvar_ul">
                            <li><a href="#" className="navbar_link">Home</a></li>
                            <li><a href="#" className="navbar_link">Categories</a></li>
                            <li><a href="#" className="navbar_link">About</a></li>
                            <li><a href="#" className="navbar_link">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="hero">
                        <h1 className="hero_text">Let's do it together.</h1>
                        <p className='hero_chan'>We travel the world in search of stories. Come along for the ride.</p>
                        <button className='hero_btn'>View Latest Posts</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header