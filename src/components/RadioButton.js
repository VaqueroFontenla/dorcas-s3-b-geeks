import React, { Component } from 'react';
import ColorRadioButton from './ColorRadioButton';

class RadioButton extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() { 
        const {id, radioCual, className} = this.props;
        return (  
        <div className="palette palette--margin">
        <input id={id} className="input__storage" type="radio" name="palette" radio-cual={radioCual} value={radioCual}/>
        <label htmlFor={id} className="label-design">
        <span></span>
            <ColorRadioButton className={`${className} palette-box colorp1`} />
            <ColorRadioButton className={`${className} palette-box colorp2`}/>
            <ColorRadioButton className={`${className} palette-box colorp3`}/>
        </label>
        </div>
        )}
}
 
export default RadioButton;