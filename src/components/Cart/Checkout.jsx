import React, {useState} from "react";
import { Link } from "react-router-dom";

function Checkout(props) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    const user = JSON.parse(localStorage.getItem('user'))

    const [newAccount, setNewAccount] = useState(false)
    const [name,setName] = useState(user?.fullName ?? '')
    const [address,setAddress] = useState('')
    const [street,setStreet] = useState('')
    const [phone,setPhone] = useState(user?.phone ?? '')
    const [email,setEmail] = useState(user?.email ?? '')



    const handleNewAccount = () => {
        setNewAccount(!newAccount)
    }

    const slovePrice = p => {
        var total = p.price*p.quantity;
        return total - Math.round(total * p.discount / 100);
    }

    const totalPrice = () => {
        return cart.reduce((sum, p) => {
            return (sum + slovePrice(p))
        },0)
    };

    const handleSubmit = () => {
        props.updateCart([]);
    }

    return (
        <>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Thanh Toán</h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Trang Chủ</Link>
                                    <Link to="/Shop">Cửa Hàng</Link>
                                    <span>Thanh Toán</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="checkout spad">
                <div className="container">
                    <div className="checkout__htmlForm">
                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <h4 className="checkout__title">Thông Tin Đặt Hàng</h4>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="checkout__input">
                                                <p>Họ Và Tên<span>*</span></p>
                                                <input type="text"
                                                placeholder="Vd: Nguyen Van A"
                                                value={name}
                                                onChange={e => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>Địa Chỉ<span>*</span></p>
                                            <input type="text" placeholder="Xã/Huyện/Tỉnh/TP" className="checkout__input__add"
                                            value={address}
                                            onChange={e => setAddress(e.target.value)}
                                        />
                                        <input type="text" placeholder="Đường/Số nhà.."
                                            value={street}
                                            onChange={e => setStreet(e.target.value)}
                                        />
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Số Điện Thoại<span>*</span></p>
                                                <input type="tel"
                                                placeholder="0362 942 329"
                                                    value={phone}
                                                    onChange={e => setPhone(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>Email<span>*</span></p>
                                                <input type="email"
                                                    placeholder="exams@gmail.com"
                                                    value={email}
                                                    onChange={e => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        user ?? 
                                        <div className="checkout__input__checkbox">
                                            <label htmlFor="acc">
                                                Tạo một tài khoản?
                                                <input type="checkbox" id="acc"
                                                onChange={handleNewAccount}/>
                                                <span className="checkmark"></span>
                                            </label>
                                            <p>Nếu bạn là khách hàng cũ, vui lòng đăng nhập ở đầu trang</p>
                                        </div>
                                    }
                                    {
                                        newAccount && 
                                        <div className="checkout__input">
                                            <p>Mật Khẩu<span>*</span></p>
                                            <input type="password" placeholder="*****"/>
                                        </div>
                                    }
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="checkout__order">
                                        <h4 className="order__title">Đơn Hàng Của Bạn</h4>
                                        <div className="checkout__order__products">Sản Phẩm <span>Tổng</span></div>
                                        <ul className="checkout__total__products">
                                            {
                                                cart.map((p, index) => (
                                                    <li key={index}>
                                                        {   
                                                            (index+1) + '. '
                                                            + p.name 
                                                            + '('+p.quantity+')'
                                                        }
                                                        <span>{slovePrice(p)+'.000đ'}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <ul className="checkout__total__all">
                                            <li>Tổng Tiền <span>{totalPrice()+'.000đ'}</span></li>
                                        </ul>
                                        <button className="site-btn" onClick={handleSubmit}>
                                            Hoàn Tất Đặt Hàng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout;