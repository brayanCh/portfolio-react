import exitSrc from "../media/x.png"

const Project = props => {

    return (
        <div className="project">
            <div className="header-project">
                <div> </div>
                <div className="head flexcenter">
                    <h2>{props.title}</h2>
                </div>
                <div className="wrapper-exit" onClick={props.exit} >
                    <img src={exitSrc} alt="exit" />
                </div>
            </div>
            {props.children}

        </div>
    )
}


        //<img src={} alt="" />

export default Project;
