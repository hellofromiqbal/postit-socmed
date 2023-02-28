import './main.css';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Main = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const handleGetIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/home");
  };

  return (
    <section className="main-container">
      <div className="main-content">
        <div className="main-content_logo">
          <IoChatbubblesOutline className="icon"/>
          <h1>POST</h1>
        </div>
        <div className="main-content_textual">
          {user?
            <p>Already Signed In.</p>
            :
            <p>Sign In with Google account.</p>
          }
        </div>
        <div className="main-content_action">
          {user?
            <button className="button" onClick={() => navigate("/home")}>Home</button>
            :
            <button className="button" onClick={handleGetIn}>Get In</button>
          }
        </div>
      </div>
    </section>
  );
}
 
export default Main;