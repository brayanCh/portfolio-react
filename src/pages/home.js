import Intro from "./intro"; 
import PageContainer from "../components/pageContainer";
import Content from "./content";
import AboutMe from "./about"

const Home = () => {

    return (
        <PageContainer>
            <Intro />
            <Content />
            <AboutMe />
        </PageContainer>
    );
}

export default Home;
