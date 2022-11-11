import { useState } from 'react'
import './App.css'
import logo from './assets/react.svg'
import PropTypes from 'react'

function App() {

  const [t1 , sett1] = useState(0);
  const [t2 , sett2] = useState(0);
  const [t3 , sett3] = useState(0);
  const [t4 , sett4] = useState(0);

  const propt1 = value => sett1(value);
  const propt2 = value => sett2(value);


  const add_num = ()=>{
    sett3(Number(t1) +Number(t2));
  }

  const set_t4= ()=>{
    sett4(t3);
  }
  return (
    <div className="App">

      <h1><img src = {logo} height = {40} width = {40} id="logo" />Test React</h1>
    
    <form action='javascript:void(0);' name = "form">

    <NumberInput name = "form" label = "T1" setValue= {value=>propt1(value)} />
    <NumberInput name = "form" label = "T2" setValue= {value=>propt2(value)} />

    <Button name = "form" style = {{margin : "20px auto"}} value = "Submit" onClick={add_num} />
    
    </form>

    <NumberInput label = "T3" getValue = {t3} readOnly />

    <Button style = {{margin : "20px auto"}}  value = "Put in T4"  onClick={set_t4} />

    <NumberInput label = "T4" getValue = {t4} readOnly />





      
    </div>
  )
}

const NumberInput = props=>{


  return (<div>
    <label htmlFor="textbox" className='labeltb' name = {props.name }  style = {props.labelStyle} >{props.label}</label>
    <input type="number" className='inp' readOnly={props.readOnly} name = {props.name }  value = {props.getValue}
      id="textbox" onInput={ e=>props.setValue(e.target.value)} style={props.inputStyle} />
    
  </div>
  );
}


const Button = props =>{
  return (
    <button onClick={props.onClick} type='submit' className='button' name = {props.name } style = {props.style} >{props.value} </button>
  );
}


NumberInput.propTypes= {
  label : PropTypes.string,
  readOnly : PropTypes.bool,
  onInput : PropTypes.func

}
NumberInput.defaultProps= {
  readOnly : false
}


export default App
