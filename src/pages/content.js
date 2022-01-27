import img1 from "../media/photosContent/4237.jpg";
import img2 from "../media/photosContent/external-content.duckduckgo.com.jpg";
import img3 from "../media/photosContent/three-women-and-one-man-working-in-office.jpg";

const Content = () => {

    return (
        <div className="content-container shadow">

            <div className="paragraph column-container"> 
                <p> 
                    Yo puedo ayudarte de diferentes maneras ¿Alguna vez has pensado
                    en tener un sitio web personal?¿Tal vez eres un fotografo o arquitecto
                    profesional que necesita mostrar su portafolio  al mercado laboral? 
                </p>
                
                <img src={img1} alt="" />
            </div>

            <div className="paragraph column-container">


                <p>
                    ¿O tal vez necesitas algo mas complejo? como un ecommerce 
                    para cosas relacionas con el fitness como comida saludable
                    o vender cursos en un tema dado como rutinas de ejercicios,
                    diseño grafico o Marketing digital.
                </p>

                <img src={img2} alt="" />
            </div>
            <div className="paragraph column-container">
                <p>
                    Otra opcion podria ser que eres parte de una compañia y tu 
                    necesitas algo mas grande, como un rediseño de una pagina
                    web para hacerla más dinamica y accesible para el publico
                    general, o alguna webApp de social media o que ofrezca un modelo
                    de suscripcion de servicios.
                </p>
                
                <img src={img3} alt="" />
            </div>
        </div>
    )
}

export default Content;
