import React,{useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import './IMCForm.scss';

// import { Container } from './styles';

function IMCForm() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  const handleHeight = (e)=>{
    setHeight(e.target.value);
  }

  const handleWeight = (e)=>{
    setWeight(e.target.value);
  }

  const calculateIMC = ()=>{
    if(height>0 && weight >0){
      console.log('caiu aqui')
      const imc = Math.round(parseInt(weight,10)/Math.pow(parseInt(height,10),2));
      console.log('IMC calculado: ', imc,parseInt(weight,10),Math.pow(parseInt(height,10),2) )
      console.log('Calculo: ', parseInt(weight,10)/Math.pow(parseInt(height,10),2))
      setResult(imc);
    }
  }

  useEffect(()=>{
    console.log('IMC', result);
  },[result])

  return (
  <div className="formContainer">
    <span>Digite o peso:</span>
    <input type="text" placeholder="Digite seu peso aqui" value={weight} onChange={handleWeight}/>
    <span>Digite a altura:</span>
    <input type="text" placeholder="Digite sua altura aqui" value={height} onChange={handleHeight}/>
    <Button onClick={()=>calculateIMC()}><span>Calcular</span></Button>

    {result > 0 &&(
      <input readOnly type="number" value={result}/>
    )}
  
  </div>
  )
}

export default IMCForm;