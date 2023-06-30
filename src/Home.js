import './sass/main.scss';
import 'aos/dist/aos.css';
import AOS from 'aos';
import BoxContent from './components/BoxContent';
import Focus from './components/Focus';

function Home() {
  AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
  return (
    <div className="main">
      <div id="landing-page">
        <div className="block">
          <div className="container">

            <div className="wrapper">
              <h1>Welcome to my Website</h1>
              <h2>developer <strong>○</strong> creative</h2>
              <p className='btn btn-redirect'>Answer me anything</p>
            </div>
          </div>
        </div>
      </div>

      <div id="focus-page">
        <div className="block">
          <div className="container">
            <div className="wrappers">
              <Focus >

              </Focus>
            </div>
          </div>
        </div>
      </div>
      <div id="content-page">
        <div className="block">
          <div className="container">
            <div className="wrapper">
              <BoxContent
                title="Calling Card project"
                arial_image="image exam project front"
                image="leaf.png"
                content="Project created in 1 day. Goal was to set up an app compatible with tablet and most mobile phones where you can register calling cards for a company"
                typeIcon="BiLogoRedux"
                isShow="true"
                typeIconSecond="BiLogoReact"
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
