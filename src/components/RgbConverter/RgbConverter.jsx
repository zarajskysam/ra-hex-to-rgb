import React from 'react';
import { useState } from 'react';
import './rgb-converter.css';

export const RgbConverter = () => {

    const [result, setResult] = useState('RGB color');
    const [style, setStyle] = useState({backgroundColor: 'white'});

    const checkHex = (val) => {
        let test = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(val);
        return test;
    }

    const convertHex = (hex) => {
        let bigint = parseInt(hex.split('#')[1], 16);
        let r = (bigint >> 16) & 255;
        let g = (bigint >> 8) & 255;
        let b = bigint & 255;
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    const handleChange = (evt) => {
        const val = evt.target.value;
        if (!checkHex(val) && val.length === 7) {
            setResult('Ошибка!');
            return;
        } else if (val.length === 7) {
            setResult(convertHex(val));
            setStyle({backgroundColor: val});
        }
    }


    return (
        <div className='hex-converter' style={style}>
            <input className='hex-converter-input' type='text' name='hex' maxLength='7' autoComplete="off" placeHolder="Введите цвет" onChange={handleChange} />
            <div className='hex-converter-result'>{result}</div>
        </div>
    )
}
