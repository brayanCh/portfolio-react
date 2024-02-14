import Navbar from '../components/bar';
import mongodbSrc from '../media/mongodb.png';
import rustSrc from '../media/rust-mascot.png';

const GraphQlArticle = () => {

  return (
    <>
      <Navbar isNotInHome={true} />
      <div className="teral-article">
        <div className="teral-article-content">
          <h1>Graph Ql api</h1>
          <img src={rustSrc} style={{width: 300}} alt="screenshot1" className='teral-img' />
          <p>
            I had an interest in learning rust, I wanted to learn about its memory system and borrow checker,
            so I decided to create a simple graphql api with rust, using the juniper crate,
            with actix-web as the server.
          </p>
          <img src={mongodbSrc} style={{width: 300}} alt="screenshot1" className='teral-img' />
          <p>
            It supports queries and mutations, and it uses mongodb as the database, with the
            mongodb driver for rust, it handles the schemas as structs, that with the help of
            2 macros, it can be converted to a graphql schema and a json object, this last one
            is returned to the client.
          </p>
          <a href="https://github.com/brayanCh/rustGraphql" target="_blank" rel="noopener noreferrer">Here is a link to the github repo</a>
        </div>
      </div>
    </>
  );
};

export default GraphQlArticle;
