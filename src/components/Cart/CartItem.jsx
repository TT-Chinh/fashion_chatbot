import React from "react";

function CartItem(props){
    const product = props.product;

    const handleChangeQuantity = value => {
        props.updateItem(product.id, value)
    }
    const handlePushQuantity = value => {
        if(value !== -1 || product.quantity !== 1){
            props.updateItem(product.id, product.quantity + value)
        }
    }

    const handleRemoveItem = () => {
        props.handleRemoveItem(product.id)
    }

    return(
        <tr>
            <td className="product__cart__item">
                <div className="product__cart__item__pic">
                    <img src={process.env.PUBLIC_URL 
                    + "/product/"+product.image} 
                    alt={product.name}/>
                </div>
                <div className="product__cart__item__text">
                    <h6>{product.name}</h6>
                    <h5>{product.price+'.000đ'}</h5>
                </div>
            </td>
            <td className="quantity__item">
                <div className="quantity">
                    <div className="pro-qty-2">
                        <span className="fa fa-angle-left dec qtybtn" 
                            onClick={() => {handlePushQuantity(-1)}}></span>
                        <input type="text" 
                        value={product.quantity} 
                        onChange={e => {handleChangeQuantity(e.target.value)}} />
                        <span className="fa fa-angle-right inc qtybtn"
                            onClick={() => {handlePushQuantity(1)}}></span>
                    </div>
                </div>
            </td>
            <td className="cart__price">{(product.price*product.quantity)+'.000đ'}</td>
            <td className="cart__close"><i className="fa fa-close" title="Xóa sản phẩm" onClick={handleRemoveItem}></i></td>
        </tr>
    )
}

export default CartItem;