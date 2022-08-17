import '../Hero.css';

function Superhero(props) {
    return (
        <div className="hero">
            <h2>{props.heroName}</h2>
            <img src={props.image} alt="" />
            <div><span>Вселенная: </span> {props.universe}</div>
            <div><span>Альтер эго:</span> {props.alter_ego} </div>
            <div><span>Род деятельности: </span> {props.type_of_activity}</div>
            <div><span>Друзья: </span> {props.friends}</div>
            <div><span>Суперсилы: </span> {props.superpowers}</div>
            <div><span>Подробнее: </span> {props.about}</div>
        </div>
    );
}

export default Superhero;