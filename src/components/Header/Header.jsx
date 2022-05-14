import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className="header__top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <div className="header__top__left">
                            <p>Miễn phí vận chuyển, hoàn trả trong 30 ngày hoặc đảm bảo hoàn lại tiền.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="header__top__right">
                            {
                                user ?? 
                                <div className="header__top__links">
                                    <Link to="/SignIn">Đăng nhập</Link>
                                    <Link to="/SignUp">Đăng ký</Link>
                                </div>
                            }
                            {
                                user &&
                                <div className="header__top__user">{user.fullName}</div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header