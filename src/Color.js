import React, {useState, useEffect} from 'react';
//import rgbToHex from './utils';

const Color = ({rgb, weight, hexColor}) => {
    const [alert, setAlert] = useState(false);
    const bg = rgb.join(',');
    //const hx = rgbToHex(...rgb);
    const hexValue =`#${hexColor}`;

    useEffect( ()=> {
        const timeout = setTimeout(()=>{
            setAlert(false);
        },3000)
        return () => clearTimeout(timeout);
    },[alert])

    return (
        <article 
        className='card' 
        onClick={()=> {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
        }}
        >
            <div className='color' style={{backgroundColor:`rgb(${bg})`}}></div>
            <h4>{hexValue}</h4>
            <p>{weight}%</p>
            {
                alert && <p className='alert'>copied to clipboard</p>
            }
        </article>
    )
}

export default Color
