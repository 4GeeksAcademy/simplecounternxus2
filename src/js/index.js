import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function SimpleCounter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(prevCounter => prevCounter + 1);
        }, 1000);

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);

    const bodyStyle = {
        backgroundColor: 'black',
        color: 'white',
        margin: 0,
        padding: 0,
        minHeight: '100vh'
    };

    return (
        <div style={bodyStyle}>
        <div className=" d-flex bg-black justify-content-center fs-5 text-white bigCounter">
            <div className="calendar fs-1 me-2">
                <i className="far fa-clock"></i>
            </div>
            <div className="four fs-1 me-2">{four % 10}</div>
            <div className="three fs-1 me-2">{three % 10}</div>
            <div className="two fs-1 me-2">{two % 10}</div>
            <div className="one fs-1 me-2">{one % 10}</div>
        </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector('#app'));
root.render(<SimpleCounter />);
