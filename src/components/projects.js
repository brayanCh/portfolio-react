

const Project = props => {

    return (
        <div className="project">
            <h2>{props.title}</h2>
            {props.children}

        </div>
    )
}

const listOfProjects = [
    <Project title="Kosmic"> 

        <p>This was a project that I make in a hackaton, it is
            a webApp that helps in the management of cattle-raisign
            focused in tracking the vital signs of cattle in order to
            prevent illness and facilitate the work of a veterinarian
            doctor.</p>
        
    </Project>
]

        //<img src={} alt="" />

export default listOfProjects;
