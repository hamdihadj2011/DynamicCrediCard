import React ,{Component}from "react";
import ReactDOM from "react-dom";
import Puce from './puce.png';
import Visa from './visa.jpg';
import "./Card.css";

class Card extends Component {
   
    
  render(){
    let a = this.props.serial_card
    a=a.slice(0,4)+' '+a.slice(4,8)+' '+a.slice(8,12)+' '+a.slice(12)

  return (
    <div className="container">
      <h1>Credit Card</h1>
      <div className="div1">
        <img alt=''
          className="img"
          src={Puce}
        />

        <div className="flex">
          <div className="flex1">
            <p className="parg">{a}</p>
            <div className="flex2">
              <div>
                <p>
                  {" "}
                  <strong>5422</strong>{" "}
                </p>
                <p>
                  {" "}
                  <strong>{this.props.user_card.toUpperCase()}</strong>{" "}
                </p>
              </div>
              <div className="flex2-child">
                <p>MONTH/YEAR</p>
                <span>
                  <bold>{this.props.date.slice(0,2) +"/" + this.props.date.slice(2,4)}</bold>
                </span>
                
              </div>
            </div>
          </div>

          <div>
            <img src={Visa} alt='Visa' />
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default Card;