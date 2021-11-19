import { Component } from "react";
import formatPrice from "../helpers/formatPrice";


class Product extends Component {
    // constructor(){
    //     super()
    // }
    render(){
        let { name, price, description, img } = this.props.product;
        return (
            <div className="product-container" >
                <h3 className="products-name">{name}</h3>
                <div className="price-tag">Price: {formatPrice(price)}</div>
                <div>
                    <button type="submit"
                    onClick={()=>this.props.handleProductClick(this.props.product)}
                    >
                        Add To Cart
                    </button>
                </div>
                <img src={img} alt="baseball-glove" />
                <p className="product-info">{description}</p>
            </div>
        )
    }
}

export default Product;