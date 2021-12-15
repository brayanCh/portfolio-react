

const Project = props => {

    return (
        <div className="project">
            <h2>{props.titulo}</h2>
            {props.children}

        </div>
    )
}




export default Project;
