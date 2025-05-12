import '../footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
         <div className="feature">
             <p className='feature_text rang'>Stay in Touch</p>
              <div className="feature_line"></div>
          </div>
        <form className='form' action="">
            <input type="text" className='unput_text' placeholder='Enter your email address' />
            <button className='btn' type='submit'>Submit</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
