import Navbar from '../components/bar';
import appCaptureSrc from '../media/app-capture.png';

const FlutterMusicArticle = () => {

  return (
    <>
      <Navbar isNotInHome={true} />
      <div className="teral-article">
        <div className="teral-article-content">
          <h1>Flutter music player</h1>
          <p>
            This is a music player app I made with flutter, I used the just_audio package to play the music,
            handle the permissions with permission handler, it also uses the flutter_bloc package to
            manage the state of the app.
          </p>
          <img src={appCaptureSrc} style={{width: 300}} alt="screenshot1" className='teral-img-1' />
          <p>
            It uses material design, and it has a simple and clean interface, it can select music from albums, artists, and songs,
            it also has a search bar to search for music and it can play music in the background.
          </p>
          <a href="https://github.com/brayanCh/andromeda_music_player" target="_blank" rel="noopener noreferrer">Here is a link to the github repo</a>
        </div>
      </div>
    </>
  );
};

export default FlutterMusicArticle;
