import Intro from "./intro"; 
import PageContainer from "../components/pageContainer";
import Content from "./content";
import Contact from "./contact";
import PreviousWork from "./previous";

const Home = props => {

    return (
        <PageContainer um={props.um}>
            <Intro />
            <Content />
            <PreviousWork />
            <Contact />
        </PageContainer>
    );
}

export default Home;
