import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import $ from 'jquery';
import Banner from "./Banner";
import PreLoader from "../PreLoader/PreLoader";
import Product from "../Product/Product";

function Home(props) {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        try{
            fetch(
                `https://localhost:44316/api/Product/GetProductsPayCountMost`
            ).then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
        }
        catch(er) {
            console.log(er.message);
        }
        finally {    
            setTimeout(() => {
                setLoading(false);
            }, 1000)        
            
        }
    },[])

    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    },[products]);

    return (
        <>
            {loading && <PreLoader />}
            <Banner />
            <section className="banner spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-4">
                            <div className="banner__item">
                                <div className="banner__item__pic">
                                    <img src={process.env.PUBLIC_URL+"/banner/banner-1.jpg"} alt="" />
                                </div>
                                <div className="banner__item__text">
                                    <h2>Bộ sưu tập quần áo 2022</h2>
                                    <Link to="/Shop">Đi tới cửa hàng</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="banner__item banner__item--middle">
                                <div className="banner__item__pic">
                                    <img src={process.env.PUBLIC_URL+"/banner/banner-3.jpg"} alt="" />
                                </div>
                                <div className="banner__item__text">
                                    <h2>Đồ tây nam lịch lãm</h2>
                                    <Link to="/Shop">Đi tới cửa hàng</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="banner__item banner__item--last">
                                <div className="banner__item__pic">
                                    <img src={process.env.PUBLIC_URL+"/banner/banner-2.jpg"} alt="" />
                                </div>
                                <div className="banner__item__text">
                                    <h2>Đầm váy Thu Hè</h2>
                                    <Link to="/Shop">Đi tới cửa hàng</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="filter__controls">
                                <li className="active" data-filter="*">Bán Chạy Nhất</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row product__filter">
                        {
                            products.map(p => (
                                <div key={p.id} className="col-lg-3 col-md-4 col-sm-4">
                                    <Product
                                        product = {p}
                                        addCart = {props.addCart}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home