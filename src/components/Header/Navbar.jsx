import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import Header from "./Header";

function Navbar(props) {

    const cart = props.cart ?? [];
    const quantity = cart.length ?? 0;

    const total = cart.reduce(getSum,0)
    function getSum(sum, p) {
        return sum + (p.price - Math.round(p.price * p.discount / 100 ));
    }

    useEffect(() => {
        $('.navbar__menu__item').each(function() {
            $(this).on('click', function() {
                $('.navbar__menu__item').removeClass('active');
                $(this).addClass('active');
            })
        })
    },[])

    return (
        <header className="header">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="header__logo">
                            <Link to="/"><img src={process.env.PUBLIC_URL+"/logo.png"} /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <nav className="header__menu mobile-menu">
                            <ul>
                                <li className="navbar__menu__item active"><Link to="/">Trang chủ</Link></li>
                                <li className="navbar__menu__item"><Link to="/Shop">Cửa hàng</Link></li>
                                <li className="navbar__menu__item">
                                    <a href="#">Xem thêm</a>
                                    <ul className="dropdown">
                                        <li><Link to="/Shop/Cart">Giỏ hàng</Link></li>
                                        <li><Link to="/Pay">Thanh toán</Link></li>
                                        <li><Link to="About">Thông tin cửa hàng</Link></li>
                                        <li><Link to="Contact">Liên hệ</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <div className="header__nav__option">
                            <Link to="/Shop/Cart" title="Giỏ hàng"><img width="25" height="30" src={process.env.PUBLIC_URL+"/icon/cart.png"}/><span>{quantity}</span></Link>
                            <div className="price">{total+'.000đ'}</div>
                        </div>
                    </div>
                </div >
                <div className="canvas__open"><i className="fa fa-bars"></i></div>
            </div >
        </header >
    )
}

export default Navbar