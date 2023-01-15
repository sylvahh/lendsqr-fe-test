import React from 'react';
import '../../sass/layout/_loginPage.scss';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/Union.png';
import logoText from '../../assets/lendsqr.svg';
import welcomeImg from '../../assets/pablo-sign-in 1.png';

const Login = () => {
  const Navigate = useNavigate();

  const loginUser = () => {
    Navigate('/user-dashboard');
  };
  return (
    <div id='login_page' className=''>
      <div className='logo_Wraper'>
        <img className='logo' src={logo} alt='logo' />
        <img className='logo_text' src={logoText} alt='logoText' />
      </div>

      <div className='login_form_wraper'>
        <div className='welcome_img_wraper'>
          <img className='welcome_Img' src={welcomeImg} alt='welcomeImg' />
        </div>

        <div className='form_wraper'>
          <h1>Welcome!</h1>
          <span>Enter details to login.</span>
          <form action=''>
            <div>
              <input type='text' placeholder='Email' />
            </div>
            <div className='form_password'>
              <input type='password' placeholder='Password' />
              <button className='showPassbtn'>SHOW</button>
            </div>
            <button className='reset_password'>forgot password ?</button>

            <button onClick={loginUser} className='loginBtn'>
              {' '}
              log in{' '}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
