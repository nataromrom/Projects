function PriceCard(props) {
    return (
        <div className={`${"tarifCard"} ${"card" + (props.isSelected ? "Selected" : "")}`}>
            <div className={`${"card" + props.tarifprise} ${"cardHeader"} ${"dark"} ${"cardHeader" + (props.isSelected ? "Selected" : "")}`}>Безлимитный {props.tarifprise}</div>
            <div className={`${"card" + props.tarifprise} ${"cardPrice"}`} ><span className="topText">руб</span> <span className="largeText">{props.tarifprise}</span> /мес</div>
            <div className="cardSpeed">до {props.speed} Мбит/сек</div>
            <div className={`${"cardFooter"} ${"dark"}`}>Объем включенного трафика не ограничен</div>
        </div >
    );
}

export default PriceCard;