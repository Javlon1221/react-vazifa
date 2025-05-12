import './section.css';
import img from '../img/Frame.svg';
import img1 from '../img/Frame (1).svg';

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
            </div>
        </section>
    )
}
export default Section;