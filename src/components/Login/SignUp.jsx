import React from 'react'
import '../../css/styleform.css'
import profile from "../../images/a.png";
import email from "../../images/email.jpg";
import pass from "../../images/pass.png";
import ReCAPTCHA from "react-google-recaptcha";

const recaptchaRef = React.createRef();
const SignUp = () => {
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
             <input type="text" placeholder="Họ tên" className="login-input"/>
           </div>
           <div className="text-input second-input">
             <img src={pass} alt="Password" className="icon-input"/>
             <input type="text" placeholder="Số điện thoại" className="login-input"/>
           </div>
           <div className="text-input second-input">
             <img src={pass} alt="Password" className="icon-input"/>
             <input type="text" placeholder="Email" className="login-input"/>
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
          <button>Đăng ký</button>
          </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default SignUp