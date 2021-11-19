import { Component } from "react";
import formatPrice from "../helpers/formatPrice";

class Checkout extends Component{
    constructor(){
        super();
        this.state = {
            firstName: "",
            lastName: "",
            emailInfo: "",
            creditCard: "",
            zipCode: "",
        }
    }

    handleUserInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event, firstName, lastName, emailInfo, creditCard, zipCode) => {
        event.preventDefault();
        let newArr = [firstName, lastName, emailInfo, creditCard, zipCode]
        const { productPrice } = this.props
        if(newArr.includes("")){
            alert("Input is not valid")
        }else if(creditCard.length !== 16){
            alert("Input is not valid\nCredit card number is not valid")
        }else if(zipCode.length !== 5){
            alert("Input is not valid\nZip code is not valid")
        }else{
            alert(`Purchase complete, you will be charged ${formatPrice(productPrice * 1.05)}`);
        }
        console.log(firstName, lastName, emailInfo, creditCard, zipCode)
    }

    render(){
        const { firstName, lastName, emailInfo, creditCard, zipCode } = this.state
        return (
            <div className="checkout-item-container">
                <form onSubmit={(event)=>this.handleSubmit(event, firstName, lastName, emailInfo, creditCard, zipCode)} id="checkout">
                    <h1>Checkout</h1>
                    <label htmlFor="first-name">First Name</label>
                    <div>
                    <input 
                    type="text" 
                    id="first-name" 
                    name="firstName" 
                    value={firstName}
                    onInput={this.handleUserInput} 
                    />
                    </div>
                    <label htmlFor="last-name">Last Name</label>
                    <div>
                    <input 
                    type="text" 
                    id="last-name" 
                    name="lastName"
                    value={lastName}
                    onInput={this.handleUserInput} 
                    />
                    </div>
                    <label htmlFor="email-info">Email</label>
                    <div>
                    <input 
                    type="text" 
                    id="email-info" 
                    name="emailInfo" 
                    value={emailInfo}
                    onInput={this.handleUserInput}
                    />
                    </div>
                    <label htmlFor="credit-card">Credit Card</label>
                    <div>
                    <input 
                    type="number" 
                    id="credit-card" 
                    name="creditCard" 
                    value={creditCard}
                    onInput={this.handleUserInput}
                    />
                    </div>
                    <label htmlFor="zip-code">Zip Code</label>
                    <div>
                    <input 
                    type="number" 
                    id="zip-code" 
                    name="zipCode" 
                    value={zipCode}
                    onInput={this.handleUserInput}
                    />
                    </div>
                    <div>
                    <button type="submit">Buy Now</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Checkout;