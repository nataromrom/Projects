import React, { useState } from "react";

export default function PriceCard(props) {
    const [pressed, setPressed] = useState(props.isPressed || false);
    const handleChange = () => {
        setPressed(!pressed)
    }
    return (
        <div onClick={handleChange} className={`tarifCard ${"card" + (pressed ? "Selected" : "")}`}>
            <div className={`${"card" + props.tarifprise} cardHeader dark ${"cardHeader" + (pressed ? "Selected" : "")}`}>Безлимитный {props.tarifprise}</div>
            <div className={`${"card" + props.tarifprise} cardPrice`}>
                <span className="topText">руб</span>
                <span className="largeText">{props.tarifprise}</span> /мес
            </div>
            <div className="cardSpeed" >до {props.speed} Мбит/сек</div>
            <div className="cardFooter dark" >Объем включенного трафика не ограничен</div>
        </div >
    );
}

