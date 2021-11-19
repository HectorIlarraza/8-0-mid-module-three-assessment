import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Cart extends Component {
    // constructor(){
    //     super();
    // }
    render(){
        let { productCartElArr, productPrice } = this.props;
        // console.log("cart", Number(subTotalAmount.replace(/[^0-9.-]+/g,"")));
        console.log(formatPrice(productPrice));
        let noTax = productPrice;
        let tax = (5/100) * productPrice

        return (
           <div className="cart-items-container">
            <h1>Cart</h1>
                <ul>
                    {productCartElArr}
                </ul>
            <h3>Subtotal: {formatPrice(noTax)}</h3>
            <h3>Tax: {formatPrice(tax)}</h3>
            <h3>Total: {formatPrice(noTax + tax)}</h3>
           </div>
        )
    }
}

export default Cart;