import React,{useState} from 'react';
import './home.css';



function Room () {

    const [isLit, setLit] = useState(true);
    const brightness = isLit ? "lit" : "dark";

    return (

        <div className={`room ${brightness}`}>
            The room is {isLit? 'Lit' : 'dark'}

            <br />
            <button onClick={()=> setLit(!isLit)}>
                Flip
            </button>
        </div>
    );


}

export default Room;