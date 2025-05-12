import './section.css';
import img from '../img/Frame.svg';
import img1 from '../img/Frame (1).svg';
import img2 from '../img/IMAGE.svg';
import img3 from '../img/Frame (2).png';
import img4 from '../img/Frame (3).svg';
import img5 from '../img/Frame (4).svg';
import img6 from '../img/Frame (5).svg';
import profile from '../img/profile.png'
import profile2 from '../img/profile2.png'


const  Section = () => {
    return (
        <section>
            <div className="phone">
                <div className="container">
                    <div className="feature">
                            <p className='feature_text'>Featured Posts</p>
                        <div className="feature_line"></div>
                    </div>
                    <div className="imgsan">
                    <img src={img} alt="" />
                    <img src={img1} alt="" />
                    </div>
                </div>
                <div className="feature">
                    <p className='feature_text most'>Most Recent</p>
                    <div className="feature_line"></div>
                </div>
                <div className="container">
                    <div className="cards">
                        {/* card 1 */}
                        <div className="card">
                            <div className="card_img">
                                <img src={img2} alt="" />
                            </div>
                            <div className="card_text">
                                <h3>Still Standing Tall</h3>
                                <p>Life begins at the end of your comfort zone.</p>
                            </div>
                            <div className="card_info">
                                <div className="divich">
                                    <img src={profile} alt="profile" />
                                    <span>William Wong</span>
                                </div>
                                <p>9/25/2015</p>
                            </div>
                        </div>
                        {/* card 2 */}
                        <div className="card">
                            <div className="card_img">
                                <img src={img6} alt="" />
                            </div>
                            <div className="card_text">
                                <h3>Sunny Side Up</h3>
                                <p>No place is ever as bad as they tell you it’s going to be.</p>
                            </div>
                            <div className="card_info">
                                <div className="divich">
                                    <img src={profile2} alt="profile" />
                                    <span>Mat Vogels</span>
                                </div>
                                <p>9/25/2015</p>
                            </div>
                        </div>
                        {/* card 3 */}
                        <div className="card">
                            <div className="card_img">
                                <img src={img4} alt="" />
                            </div>
                            <div className="card_text">
                                <h3>Water Falls</h3>
                                <p>We travel not to escape life, but for life not to escape us.</p>
                            </div>
                            <div className="card_info">
                                <div className="divich">
                                    <img src={profile2} alt="profile" />
                                    <span>Mat Vogels</span>
                                </div>
                                <p>9/25/2015</p>
                            </div>
                        </div>
                        {/* card 4 */}
                        <div className="card">
                            <div className="card_img">
                                <img src={img5} alt="" />
                            </div>
                            <div className="card_text">
                                <h3>Through the Mist</h3>
                                <p>Travel makes you see what a tiny place you occupy in the world.</p>
                            </div>
                            <div className="card_info">
                                <div className="divich">
                                    <img src={profile} alt="profile" />
                                    <span>William Wong</span>
                                </div>
                                <p>9/25/2015</p>
                            </div>
                        </div>
                        {/* card 5 */}
                        <div className="card">
                            <div className="card_img">
                                <img src={img3} alt="" />
                            </div>
                            <div className="card_text">
                                <h3>Awaken Early</h3>
                                <p>Not all those who wander are lost.</p>
                            </div>
                            <div className="card_info">
                                <div className="divich">
                                    <img src={profile2} alt="profile" />
                                    <span>Mat Vogels</span>
                                </div>
                                <p>9/25/2015</p>
                            </div>
                        </div>
                        {/* card 6 */}
                        <div className="card">
                            <div className="card_img">
                                <img src={img6} alt="" />
                            </div>
                            <div className="card_text">
                                <h3>Try it Always</h3>
                                <p>The world is a book, and those who do not travel read only one page.</p>
                            </div>
                            <div className="card_info">
                                <div className="divich">
                                    <img src={profile2} alt="profile" />
                                    <span>Mat Vogels</span>
                                </div>
                                <p>9/25/2015</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section;