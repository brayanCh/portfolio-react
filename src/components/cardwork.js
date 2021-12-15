
const Card = props => {

    return (
        <div className="pagecard flexcenter  " onClick={props.method}>
            <h3>{props.children}</h3>
            <img src={props.src} alt={"image of" + props.children} />
        </div>
    )
}

export default Card;
