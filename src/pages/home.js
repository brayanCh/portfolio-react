import Intro from "./intro"; 
import PageContainer from "../components/pageContainer";
import Content from "./content";


const Home = () => {

    return (
        <PageContainer>
            <Intro />
            <Content />
        </PageContainer>
    );
}

export default Home;
