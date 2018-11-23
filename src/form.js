import React,{Component} from 'react';
import './form.css';

class Form extends Component {

   
    render() { 
        return ( 
            <form>
                <input  type="number" placeholder="type your card Number..." onChange={this.props.numero}/>
                <input  type="text" placeholder="type your Name..." maxLength='20' onChange={this.props.nom}/>
                <input  type="number" placeholder="type your date..." maxLength='16' onChange={this.props.card_date}/>
                <p>{this.props.msg}</p>
            </form>
         );
    }
}
 
export default Form ;

