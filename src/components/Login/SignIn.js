import React from 'react'
import '../../css/styleform.css'
import profile from "../../images/a.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
const SignIn = () => {
  return (
    <div className="login-form">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
         <div>          
           <div className='text-input'>
             <img src={email} alt="Account" className="icon-input"/>
             <input type="text" placeholder="Số điện thoại/ Email" className="login-input"/>
           </div>
           <div className="text-input second-input">
             <img src={pass} alt="Password" className="icon-input"/>
             <input type="password" placeholder="Mật khẩu" className="login-input"/>
           </div>
           <div className="text-input second-input">
           <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LcHGswfAAAAAC8qBj1xQppdrVHLcIsplubo7j5_"              
            />
           </div>
          <div className="login-button">
          <button>Đăng nhập</button>
          </div>
           
            <p className="link">
              <a href="#">Quên mật khẩu ?</a> <span className='text-primary'>hoặc</span> <a href="#">Đăng ký</a>
            </p>          
 
         </div>
       </div>
     </div>
    </div>
  )
}

export default SignIn