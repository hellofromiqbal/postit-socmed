import './footer.css';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleGetOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <footer className="footer-container">
      <small>Copyright &copy; 2023 | Muhammad Iqbal</small>
      <button className="button" onClick={handleGetOut}>Get Out</button>
    </footer>
  );
}
 
export default Footer;