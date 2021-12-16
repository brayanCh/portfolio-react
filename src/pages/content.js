import img1 from "../media/photosContent/4237.jpg";
import img2 from "../media/photosContent/external-content.duckduckgo.com.jpg";
import img3 from "../media/photosContent/three-women-and-one-man-working-in-office.jpg";

const Content = () => {

    return (
        <div className="content-container shadow">

            <div className="paragraph column-container">
                <p> I can help you in many diferent ways, have you ever thought of having
                    a personal website, maybe you're a photographer or arquitect that
                    needs a way to expose yourself in social media or in the job market.</p>
                
                <img src={img1} alt="" />
            </div>

            <div className="paragraph column-container">


                <p> Or maybe you need something more complicated, like an ecommerce for
                things related to fitness like healthy foods, or you are selling a course
                in a given topic, like workout routines, film analysis or drawing.</p>

                <img src={img2} alt="" />
            </div>
            <div className="paragraph column-container">
                <p> Other option could be that you're part of a company and you
                need something big, like a redesing of a page to make it more dinamic,
                more accesible to the general public, or some webApp related to social
                media or offering some kind of suscription service. </p>
                
                <img src={img3} alt="" />
            </div>
        </div>
    )
}

export default Content;
