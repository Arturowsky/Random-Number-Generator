
import React, {useState} from 'react';


const Nav = (props) => {
    const [statu, nStatu] = useState(0);
    return(
        <div>
        <p>{props.text}</p>
        <p>{statu}</p>
        <button onClick={() => nStatu(statu + 1)}>+</button>
        <button onClick={() => nStatu(statu - 1)}>-</button>
    </div>
    )
}
export default Nav;