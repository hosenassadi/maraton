
import './Image.css';

import { useState, useRef } from "react";


function Image(props) {

    const [color, setcolor] = useState('red');
    const [image_only_disp, setimage_only_disp] = useState('');

        // if() {
            
        // }

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.click();
    };

    function color_change(e) {
        setcolor(e.target.value)
    }

    return (
        <div>
            <div className='image_disp_cont'>
                {props.image_only == false ? 
                    <>
                    <div className='image_disp_cont_text'> אל תשכח להוריד את הקבצים. הם ימחקו אוטומטית כשתצא מהדף </div>

                     <div className="color_btn" onClick={focusInput}> צבע רקע 
                        <span className="color_choose" style={{backgroundColor : color }}> </span>
                     </div>  
                     <input type="color" ref={inputElement} className="input_color" onChange={color_change}/> 
                    </>
                     : '' }

                     <div className={`image_pace ${image_only_disp}`} >

                    
                    </div>  
            </div>
        </div>
    );
}

export default Image;
