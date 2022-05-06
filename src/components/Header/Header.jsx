import React from "react";

const Header = () => {

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
                            <div className="header__top__links">
                                <a href="#">Đăng nhập</a>
                                <a href="#">Đăng ký</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header