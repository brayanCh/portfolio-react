import Navbar from '../components/bar';
import screenshotSrc from '../media/projects/app-screenshot.png';
import lambdaSrc from '../media/projects/lambda.png';

const TeralArticle = () => {

  return (
    <>
      <Navbar isNotInHome={true} />
      <div className="teral-article">
        <div className="teral-article-content">
          <h1>Teral</h1>
          <p>
        In this company I mainly wrote a react native app and some microservices with
        my coworkers, we worked with a agile methodology with notion and slack, we used AWS amplify
        for comunications with aws services and redux toolkit for state management.
          </p>
          <p>
        It began as a project to help doctors to manage their cases, but it evolved
        to a more complex project, more similar to a social network, where doctors
        could share their cases, chat between them, and more.
          </p>
          <img src={screenshotSrc} alt="screenshot1" className='teral-img-1' />
          <p>
        In the client I created a basic image editor, handled the deep linking with
        react navigation, created push notifications with firebase and aws sns,
        and made the layout of different screens.
          </p>
          <img src={lambdaSrc} alt="aws lambda diagram" className='teral-img-2' />
          <p>
        In the backend I created a microservice to handle the push notifications,
        the queries to the contact list, the serverside compression of the images and
        generation of thumbnails with ffmpeg, and handled the security of the apis with
        api gateway and aws cognito.
          </p>
          <a href="https://play.google.com/store/apps/details?id=com.teralmedicine&hl=es_CO&gl=US" target="_blank" rel="noopener noreferrer">Here is a link to the play store page of teral</a>
        </div>
      </div>
    </>
  );
};

export default TeralArticle;
