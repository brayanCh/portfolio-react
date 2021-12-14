import Intro from "./intro"; 
import PageContainer from "../components/pageContainer";
import Content from "./content";
import AboutMe from "./about"
import Contact from "./contact";

const Home = () => {

    return (
        <PageContainer>
            <Intro />
            <Content />
            <AboutMe />
            <Contact />
        </PageContainer>
    );
}

export default Home;
