import React, {useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import $ from 'jquery';
import PreLoader from "../PreLoader/PreLoader";

function ProductDetails() {

    const { id } = useParams();
    
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [images, setImgages] = useState([]);

    useEffect(() => {
        fetch('https://localhost:44316/api/Product/GetProductDetails?id=' + id)
        .then((res) => res.json())
        .then((data) => {
            setProduct(data);
            setImgages(data.images);
            setTimeout(() => {
                setLoading(false);
            }, 1000)
        })
        .catch((er) => console.log(er));
    },[id])

    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('#tabs-0').addClass('active');
    },[images]);

    const addActive = (size, value) => {
        var temp = '#tabs-';
        for(var i = 0; i < size; i++) {            
            if(i == value) {
                $(temp + i).addClass('active') 
            }
            else {
                $(temp + i).removeClass('active') 
            }
        }
    }

    return ( 
        <>
        {loading && <PreLoader />}
            <section className="shop-details">
                <div className="product__details__pic">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product__details__breadcrumb">
                                    <Link to="/">Trang chủ</Link>
                                    <Link to="/Shop">Cửa hàng</Link>
                                    <span>Chi tiết sản phẩm</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <ul className="nav nav-tabs" role="tablist">
                                {   images &&
                                    images.map((img,index) =>
                                    (
                                        <li key={index} className="nav-item">
                                            <a className="nav-link" data-toggle="tab" onClick={() => addActive(images.length, index)}
                                            role="tab">
                                                <div className="product__thumb__pic set-bg" data-setbg={
                                                    process.env.PUBLIC_URL 
                                                    +"/product/"+img}>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                    ) 
                                }
                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-9">
                                <div className="tab-content">
                                {   images &&
                                    images.map((img,index) => 
                                    (
                                        <div key={index}  className="tab-pane"
                                        id={"tabs-"+index} role="tabpanel">
                                            <div className="product__details__pic__item">
                                                <img src={process.env.PUBLIC_URL 
                                                    +"/product/"+img} alt={img}/>
                                            </div>
                                        </div>
                                    )
                                    )
                                }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__details__content">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <div className="product__details__text">
                                    <h4>{product.name}</h4>
                                    <h3>{(product.price - Math.floor(product.price*product.discount/100))+'.000đ'}
                                    {product.discount > 0 && <span>{product.price+".000đ"}</span>}</h3>
                                    <p>{product.discription}</p>
                                    <div className="product__details__cart__option">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <input type="number" 
                                                value={quantity} 
                                                min={0} max={50} 
                                                onChange={e => setQuantity(e.target.value)} 
                                                />
                                            </div>
                                        </div>
                                        <a href="#" className="primary-btn">add to cart</a>
                                    </div>
                                    <div className="product__details__last__option">
                                        <ul>
                                            <li><span>Lượt mua:</span>{product.payCount}</li>
                                            <li><span>Loại:</span>{product.category}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="related spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className="related-title">Related Product</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-sm-6">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetails;