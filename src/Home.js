import './sass/main.scss';
import DropMenu from './components/Menu';
import BoxContent from './components/BoxContent';

function Home() {
  return (
    <div className="main">
      <div id="landing-page">
        <div className="block">
          <div className="container">

            <div className="wrapper">
              <h1>Welcome to my Website</h1>
              <h2>developer <strong>○</strong> creative</h2>
            </div>
          </div>
        </div>
      </div>
      <div id="content-page">
        <div className="block">
          <div className="container">

            <div className="wrapper">
              <BoxContent
                title="dev-app-avis"
                arial_image="image exam project front"
                image="firstproject.png"
                content="Project created in 1 day. Goal was to set up an app compatible with tablet and most mobile phones where you can register calling cards for a company"
                typeIcon="BiLogoRedux"
              />
              <BoxContent
                title="dev-app-strappi"
                arial_image="image exam project front"
                image="firstproject.png"
                content="Project builded with local api using strappi"
                typeIcon="BiLogoRedux"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
