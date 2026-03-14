import logo from '../assets/GloboLogo.png';
import { logo as logoClass } from './Banner.module.css';
import { useNavigate } from 'react-router';

const subtitleStyle = {
  fontStyle: 'italic',
  fontSize: 'x-large',
  color: 'coral',
};

const Banner = ({ children }) => {
  const navigate = useNavigate();

  return (
    <header className="row">
      <div className="col-5">
        <img src={logo} alt="Globomantics Logo" 
          className={logoClass} 
          onClick={() => navigate('/')}/>
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};

export default Banner;
