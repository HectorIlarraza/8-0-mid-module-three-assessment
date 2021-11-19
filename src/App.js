import { Component } from "react"
import "./App.css";
import productData from "./data/productData";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import formatPrice from "./helpers/formatPrice";

class App extends Component {
  constructor(){
    super();
    this.state = {
      productList: productData,
      cartList: [],
      productName: "",
      productPrice: 0,
      productInfo: "",
    }
    console.log("state", productData)
  }

  handleProductClick = (product) => {
    let newArr = [ ...this.state.cartList, product ]
    console.log("handle", product)
    this.setState({
      cartList: newArr,
      productName: product.name,
      productPrice: this.state.productPrice + product.price,
      productInfo: product.description
    })
  }

  render(){

    let productElArr = this.state.productList.map((product) => {
      return (
        <Product 
        key={product.id} 
        product={product} 
        handleProductClick={this.handleProductClick}
        />
      )
    })
    console.log("itemMapArr", productElArr)

    let productCartElArr = this.state.cartList.map((product) => {
      return <li key={product.id}>{product.name}: {formatPrice(product.price)}</li>
    
    })
    console.log("cartMapArr", productCartElArr)

    return (
    <body>
      <main>
        <header>
          <h1>My Garage Sale</h1>
        </header>
        <section className="products">
          {productElArr}
        </section>
        <section className="cart-container">
        <Cart 
        productCartElArr={productCartElArr} 
        productPrice={this.state.productPrice}
        />
        </section>
        <section className="product-cost">
          <Checkout productPrice={this.state.productPrice}/>
        </section>
      </main>
    </body>
    )
  }
};

export default App;
