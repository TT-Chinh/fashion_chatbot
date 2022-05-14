import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import PreLoader from "../PreLoader/PreLoader";

function Cart(props) {

    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState(props.cart ?? []);

    const updateCart = newCart => {
        props.updateCart(newCart);
    }

    const updateItem = (id, quantity) => {
        setCart(cart.map(product => {
            if (product.id === id) {
                product.quantity = quantity;
            }
            return product;
        }));
    }

    const handleRemoveItem = id => {
        setCart(cart.filter(product => {
            return product.id !== id;
        }))
    }

    useEffect(() => {
        updateCart(cart)
        setTimeout(() => {
            setLoading(false);
        }, 500)   
    },[cart])

    const subtotal = () => {
        return cart.reduce((sum, p) => {
            return sum + p.price * p.quantity;
        },0)
    }

    const discount = () => {
        return cart.reduce((sum, p) => {
            return sum + Math.round(p.price * p.discount / 100) * p.quantity;
        },0)
    }

    return (
        <>
            {loading && <PreLoader />}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Giỏ Hàng</h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Trang Chủ</Link>
                                    <Link to="/Shop">Cửa Hàng</Link>
                                    <span>Giỏ Hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="shopping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="shopping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sản Phẩm</th>
                                            <th>Số Lượng</th>
                                            <th>Tổng Tiền</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map(p => (
                                                <CartItem 
                                                key={p.id}
                                                product={p} 
                                                updateItem={updateItem}
                                                handleRemoveItem={handleRemoveItem}
                                                 />
                                            ))
                                        }
                                        {
                                            cart.length === 0 && <tr><td colSpan={3}><div className="text-center text-secondary">Giỏ hàng trống!</div></td></tr>
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="continue__btn">
                                        <Link to="/Shop">Tiếp tục mua sắm</Link>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    {
                                        cart.length > 0 &&
                                        <div className="continue__btn update__btn">
                                            <a href="#" onClick={()=>{setCart([])}}><i className="fa fa-close"></i>
                                                Xóa sạch giỏ hàng</a>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart__total">
                                <h6>Thông tin đơn hàng</h6>
                                <ul>
                                    <li>Tạm tính:<span>{subtotal() + '.000đ'}</span></li>
                                    <li>Giảm giá:<span>{'-' + discount() + '.000đ'}</span></li>
                                    <li>Tổng:<span>{(subtotal() - discount()) + '.000đ'}</span></li>
                                </ul>
                                {
                                    cart.length > 0 && 
                                    <Link to="/Shop/Checkout" className="primary-btn">Đặt hàng</Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart;