import React, {useState} from "react";
import './assets/style/calculator_style.scss'

const  Button = ({title, onClick, color}) => {
    return(
        <div className="button" onClick={onClick} style={{background:color}}>
            <span>{title}</span>
        </div>
    )
}
const  Calculator = () => {

    const  [firstValue, setFirstValue] = useState('0');
    const [secondValue, setSecondValue] = useState('0');
    const [type, setType] = useState(null);
    const valueHandler = (value) => {
        const val = value ? value : '.';
        if (type === null){
            console.log('birinchi qiymat ozgardi')
            if (firstValue === '0'){
                return setFirstValue(value);
            }
            const newValue = firstValue.toString() + val;
            setFirstValue(newValue);
        }else {
            console.log('ikkinchi qiymat ozgardi')
            if (secondValue === '0'){
                return setSecondValue(value);
            }
            const newValue = secondValue.toString() + val;
            setSecondValue(newValue);
        }
    }

    const clear = () => {
        setFirstValue('0');
        setSecondValue('0');
        setType(null);
        // console.log({firstValue, secondValue, type})
    }

    const persen = () => {
        if (type === null){
            setFirstValue(firstValue / 100);
        }else {
            setSecondValue(secondValue / 100);
        }
    }

    const toggle = () => {
        if (type === null){
            setFirstValue(firstValue * -1);
        }else {
            setSecondValue(secondValue * -1);
        }
    }

    const compute = () => {
       if (type === null){
           return;
       }

       const first = +firstValue;
       const second = +secondValue;
        let value;

        switch (type){
            case '+':
                value = first + second;
                break;
            case '-':
                value = first - second;
                break;
            case '*':
                value = first * second;
                break;
            case '/':
                value = first / second;
                break;
        }
        setFirstValue(value);
        setSecondValue('0');
        setType(null);
    }
    return (
        <div className={'container'}>
                <div className={'calculator_container'}>
                    <div className={'input_value'}>{type === null ? firstValue : secondValue}</div>e
                    <div className="buttons_container">
                        <div className="left_buttons">
                            <div className="row topRow">
                                <Button title={'AC'} onClick={clear} color={'#a5a5a5'}/>
                                <Button title={'+/-'} onClick={toggle} color={'#a5a5a5'}/>
                                <Button title={'%'} onClick={persen} color={'#a5a5a5'}/>
                            </div>
                            <div className="row ">
                                <Button title={7} onClick={() => valueHandler(7)}/>
                                <Button title={8} onClick={() => valueHandler(8)}/>
                                <Button title={9} onClick={() => valueHandler(9)}/>
                            </div>
                            <div className="row">
                                <Button title={4} onClick={() => valueHandler(4)}/>
                                <Button title={5} onClick={() => valueHandler(5)}/>
                                <Button title={6} onClick={() => valueHandler(6)}/>
                            </div>
                            <div className="row">
                                <Button title={1} onClick={() => valueHandler(1)}/>
                                <Button title={2} onClick={() => valueHandler(2)}/>
                                <Button title={3} onClick={() => valueHandler(3)}/>
                            </div>
                            <div className="row bottomRow">
                                <Button title={0} onClick={() => valueHandler('0')}/>
                                <Button title={','} onClick={() => valueHandler(null)}/>
                            </div>
                        </div>
                        <div className="right_buttons">
                            <Button title={'/'} onClick={() => setType('/')}/>
                            <Button title={'*'} onClick={() => setType('*')}/>
                            <Button title={'-'} onClick={() => setType('-')}/>
                            <Button title={'+'} onClick={() => setType('+')}/>
                            <Button title={'='} onClick={compute}/>
                        </div>
                    </div>
                </div>
        </div>

    )
}
export  default  Calculator;