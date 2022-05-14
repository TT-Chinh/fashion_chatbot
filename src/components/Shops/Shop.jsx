import React, { useState, useEffect } from "react";
import axios from "axios";
import $ from 'jquery';
import PreLoader from "../PreLoader/PreLoader";
import { Link } from "react-router-dom";
import Product from "../Product/Product";

function Shop(props) {

    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryID, setCategoryID] = useState(null);
    const [brands, setBrands] = useState([]);
    const [brand, setBrand] = useState(null);
    const [seeMore, setSeeMore] = useState(true);
    const [driect, setDriect] = useState(null);

    function getProducts(start, end) {
        try {
            axios.post(
            `https://localhost:44316/api/Product/GetAllProduct`,
            {
                categoryID: categoryID,
                brand: brand,
                search: search,
                start: start,
                end: end,
                driect: driect
            })
            .then(response  => {
                if(start == 0){
                    setSeeMore(response.data.length >= end);
                    setProducts(response.data)
                }else{
                    setSeeMore(products.length + response.data.length >= end);
                    setProducts([...products, ...response.data]);
                }
            })
        } catch (error) {
            console.log(error.message);
        }
        finally {
            setTimeout(() => {
                setLoading(false);
            }, 1000) 
        }
    }

    useEffect(() => {
        try{
            fetch(
                `https://localhost:44316/api/Category/GetAllCategories`
            ).then((res) => res.json())
            .then((data) => {
                setCategories(data);
            });

            fetch(
                `https://localhost:44316/api/Product/GetAllBrands`
            ).then((res) => res.json())
            .then((data) => {
                setBrands(data);
            });
        }
        catch(er) {
            console.log(er.message);
        }
    }, []);

    useEffect(() => {
        getProducts(0,11);
    }, [search,brand,driect,categoryID]);

    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    },[products]);

    const handleCategory = (id) => {
        setCategoryID(id);
    }

    const handleDriect = (value) => {
        switch(value){
            case '0':
                setDriect(false);
                break;
            case '1': 
                setDriect(true);
                break;
            default:
                setDriect(null);
                break;
        }
    }

    const handleBrand = (value) => {
        setBrand(value);
    }

    const handleSeeMore = () => {
        const len = products.length;
        getProducts(len, len+5);
    }

    return (
        <>
            {loading && <PreLoader />}
            {/* <!-- Breadcrumb Section Begin-- > */}
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Cửa hàng</h4>
                                <div className="breadcrumb__links">
                                    <Link to="/">Trang Chủ</Link>
                                    <span>Cửa hàng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End-- > */}

            {/* < !--Shop Section Begin-- > */}
            <section className="shop spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="shop__sidebar">
                                <div className="shop__sidebar__search">
                                    <form>
                                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm kiếm..." />
                                        <button type="button"><span className="icon_search"></span></button>
                                    </form>
                                </div>
                                <div className="shop__sidebar__accordion">
                                    <div className="accordion" id="accordionExample">
                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseOne">DANH MỤC</a>
                                            </div>
                                            <div id="collapseOne" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__categories">
                                                        <ul className="nice-scroll">
                                                            <li onClick={() => handleCategory(null)}>
                                                                <a>Tất cả</a>
                                                            </li>
                                                            {
                                                                categories.map(c => (
                                                                    <li key={c.id} onClick = {() => handleCategory(c.id)} >
                                                                        <a>
                                                                            {c.name}
                                                                        </a>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-heading">
                                                <a data-toggle="collapse" data-target="#collapseTwo">THƯƠNG HIỆU</a>
                                            </div>
                                            <div id="collapseTwo" className="collapse show" data-parent="#accordionExample">
                                                <div className="card-body">
                                                    <div className="shop__sidebar__brand">
                                                        <ul>
                                                            <li onClick={() => handleBrand(null)}>
                                                                <a>Tất cả</a>
                                                            </li>
                                                            {
                                                                brands.map(b => (
                                                                    <li key={b}
                                                                    onClick={() => handleBrand(b)}>
                                                                        <a>
                                                                            {b}
                                                                        </a>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="shop__product__option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__left">
                                            <p>{'Hiển thị ' + products.length + ' sản phẩm'}</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__right">
                                            <p>Sắp xếp theo giá:</p>
                                            <select 
                                            onChange={e => handleDriect(e.target.value)}>
                                                <option value="">Ngẫu nhiên</option>
                                                <option value="0">Thấp lên cao</option>
                                                <option value="1">Cao xuống thấp</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    (products.length > 0) ? (
                                        products.map(p => (
                                            <div key={p.id} className="col-lg-4 col-md-6 col-sm-6">
                                                <Product
                                                    addCart={props.addCart}
                                                    product={p}
                                                />
                                            </div>
                                        ))
                                    )
                                    : (
                                        <div className="col-12">
                                            <div className="w-100 text-warning text-center">Không tìm thấy sản phẩm nào!</div>
                                        </div>
                                    )
                                }
                            </div>
                            {
                                seeMore > 0 &&
                                <div div className="row mt-4">
                                    <div className="col-lg-12 px-5">
                                        <button className="btn btn-outline-dark font-weight-bold w-100 f-2"
                                        onClick={() => {handleSeeMore()}}>XEM THÊM</button>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Shop;