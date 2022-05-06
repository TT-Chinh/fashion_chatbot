import React from "react";

function NavbarNavite() {
    return (
        <>
            <div className="offcanvas-menu-overlay"></div>
            <div className="offcanvas-menu-wrapper">
                <div className="offcanvas__option">
                    <div className="offcanvas__links">
                        <a href="#">Đăng nhập</a>
                        <a href="#">Đăng ký</a>
                    </div>
                </div>
                <div className="offcanvas__nav__option">
                    <a href="#" className="search-switch"><img src={process.env.PUBLIC_URL+"/icon/search.png"} alt=""/></a>
                    <a href="#"><img width="25" height="30" src={process.env.PUBLIC_URL+"/icon/cart.png"} alt=""/><span>3</span></a>
                    <div className="price">34.000đ</div>
                </div>
                <div id="mobile-menu-wrap"></div>
                <div className="offcanvas__text">
                    <p>Miễn phí vận chuyển, hoàn trả trong 30 ngày hoặc đảm bảo hoàn lại tiền.</p>
                </div>
            </div>
        </>
    )
}

export default NavbarNavite