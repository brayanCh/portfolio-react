import Intro from "./intro"; 
import PageContainer from "../components/pageContainer";
import Content from "./content";
import Contact from "./contact";
import PreviousWork from "./previous";

const Home = () => {

    return (
        <PageContainer>
            <Intro />
            <Content />
            <PreviousWork />
            <Contact />
        </PageContainer>
    );
}

export default Home;
