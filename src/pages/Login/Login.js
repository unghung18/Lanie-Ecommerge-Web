import Google from "../../assets/image/google.png";
import Facebook from "../../assets/image/facebook.png";
import Github from "../../assets/image/github.png";
import './Login.scss';

import { auth, google, facebook, github } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const login = async (provider) => {
        const result = await signInWithPopup(auth, provider);
        console.log(result.user)
        localStorage.setItem('user', JSON.stringify(result.user));
        navigate('/');
    }

    return (
        <div className="login">
            <h1 className="loginTitle">Choose a Login Method</h1>
            <div className="wrapper">
                <div className="left">
                    <div className="loginButton google" onClick={() => login(google)}>
                        <img src={Google} alt="" className="icon" />
                        Tiếp tục với Google
                    </div>
                    <div className="loginButton facebook" onClick={() => login(facebook)}>
                        <img src={Facebook} alt="" className="icon" />
                        Tiếp tục Facebook
                    </div>
                    <div className="loginButton github" onClick={() => login(github)}>
                        <img src={Github} alt="" className="icon" />
                        Tiếp tục với Github
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;