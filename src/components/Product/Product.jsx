import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
    const product = props.product;

    const handleAddCart = () => {
        props.addCart({...product, quantity: 1})
    }
    return (
        <div className="product__item">
            <div className="product__item__pic set-bg" data-setbg={process.env.PUBLIC_URL 
                + "/product/"+product.image}>
                <ul className="product__hover">
                    <li><Link to={"/Shop/Product/"+product.id}><img src={process.env.PUBLIC_URL + "/icon/product_details.png"} /><span>Chi tiết</span></Link></li>
                    <li><a onClick={handleAddCart}><img src={process.env.PUBLIC_URL + "/icon/add_cart.png"} /><span>Thêm giỏ</span></a></li>
                </ul>
            </div>
            <div className="product__item__text">
                <h6>{product.name}</h6>
                <a href="#" className="add-cart">{"-"+product.discount+"%"}</a>
                <h5>{product.price+'.000đ'}</h5>
            </div>
        </div>
    );
}

export default Product;