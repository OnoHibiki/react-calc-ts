import { useState } from 'react';

function App() {
  const[num1,setNum1] = userState<number>(0);
  const[num2,setNum2] = userState<number>(0);
  const[operator,setOperator] = userState<string>('+');
  const[result,setResult] = userState<number | null>(null);

  const calculate = () => {
    let res : number;
    switch (operator){
      case'+':
        res = num1 + num2;
        break;
      case'-':
        res = num1 - num2;
        break;
      case'*':
        res = num1 * num2;
        break;
      case'/':
        res = num2 !== 0 ? num1 / num2 : NaN;
        break;
      default:
        res = NaN;
    }
    setResult(isNaN(res) ? null : res);
  };

  return (
    <div style={{padding:'2rem', fontFamily:'sans-serif'}}>
      <h1>React電卓</h1>
      <input
        type='number'
        value={num1}
        onChange={(e) => setNum1(parseFloat(e.target.value))}
      />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input 
        type="number"
        value={num2}
        onChange={(e)=> setNum2(parseFloat(e.target.value))} 
      />
      <button onClick={calculate}>計算</button>

      <p>結果:{result !== null ? result : '---'}</p>
    </div>
    
  );

}

export default App;
