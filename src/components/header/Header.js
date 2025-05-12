
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
            <div className="kategoriya">
                <ul>
                    <li><a href="#" className="kategoriya_link">Nature</a></li>
                    <li><a href="#" className="kategoriya_link">Photography</a></li>
                    <li><a href="#" className="kategoriya_link">Relaxation</a></li>
                    <li><a href="#" className="kategoriya_link">Vacation</a></li>
                    <li><a href="#" className="kategoriya_link">Travel</a></li>
                    <li><a href="#" className="kategoriya_link">Adventure</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header