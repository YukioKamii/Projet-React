import { useState, useEffect } from "react";
import Cookies from 'js-cookie';

const StateExample = () => {
    
    const initialCount = parseInt(Cookies.get('count') || '0', 10);
    const [count, setCount] = useState(initialCount);
    const [user, setUser] = useState({
        username: "toto",
        phone: "0612261046"
    });

    useEffect(() => {
        Cookies.set('count', count, { expires: 7 });
    }, [count]);

    return (
        <>
            <h1>State Example</h1>
            <p>Valeur : count is {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </>
    );
}

export default StateExample;
    