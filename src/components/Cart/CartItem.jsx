import React, {useState} from "react";

function CartItem(props){
    const product = props.product;

    const [quantity, setQuantity] = useState(1);
    return(
        <tr>
            <td class="product__cart__item">
                <div class="product__cart__item__pic">
                    <img src="img/shopping-cart/cart-1.jpg" alt={product.name}/>
                </div>
                <div class="product__cart__item__text">
                    <h6>{product.name}</h6>
                    <h5>{product.price+'.000đ'}</h5>
                </div>
            </td>
            <td class="quantity__item">
                <div class="quantity">
                    <div class="pro-qty-2">
                        <input type="number" value={quantity}/>
                    </div>
                </div>
            </td>
            <td class="cart__price">{(product.price*quantity)+'.000đ'}</td>
            <td class="cart__close"><i class="fa fa-close"></i></td>
        </tr>
    )
}

export default CartItem;