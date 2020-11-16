import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
// import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Gallery from '../components/Gallery';
// import CSS3 from '../assets//images/portfolio/logos/CSS3.png'
// import Express from '../assets//images/portfolio/logos/Express.png'

const img_set = [
  {
    src: require('../assets/images/portfolio/fullsize/skull.jpg'),
    thumbnail: require('../assets/images/portfolio/thumbnails/skull.jpg'),
    title: 'Know It All',
    desc: 'A trivia website that tests your knowledge about Art and Culture.',
    info: 'Know It All - Click above to visit.',
    info2: `The trivia games are made using The Metropolitan Museum of Art Collection's API. Users who register for an account can earn points for correct answers, change profile pictures, and track game statistics.`,
    info3: 'Built using: React.js, Express, PostrgreSQL, D3, SASS, HTML and JavaScript.',
    ref: 'https://knowitallgame.com/#/homepage'
  },
  {
    src: require('../assets/images/portfolio/fullsize/pic3.jpg'),
    thumbnail: require('../assets/images/portfolio/thumbnails/pic3.jpg'),
    title: 'BeachSide',
    desc: 'Get live weather, tide, and swell info from beaches around the world.',
    info: 'Beachside is a real-time beach weather website. Click above to visit.',
    info2: 'Built remotely with a team of four, our goal with Beachside was to put all the weather and water info you would need for a beach visit in one place. Users can use Google Maps to search for beaches and save them to a favorites page.',
    info3: 'Built using React.js, StormGlass API, Weather API, JavaScript, HTML, CSS, PostrgeSQL and Express.',
    ref: 'https://www.shoreside.dev/#/'
  },
  // {
  //   src: require('../assets/images/portfolio/fullsize/3.jpg'),
  //   thumbnail: require('../assets/images/portfolio/thumbnails/3.jpg'),
  //   title: 'Category',
  //   desc: 'Project Name',
  // },
  // {
  //   src: require('../assets/images/portfolio/fullsize/4.jpg'),
  //   thumbnail: require('../assets/images/portfolio/thumbnails/4.jpg'),
  //   title: 'Category',
  //   desc: 'Project Name',
  // },
  // {
  //   src: require('../assets/images/portfolio/fullsize/5.jpg'),
  //   thumbnail: require('../assets/images/portfolio/thumbnails/5.jpg'),
  //   title: 'Category',
  //   desc: 'Project Name',
  // },
  // {
  //   src: require('../assets/images/portfolio/fullsize/6.jpg'),
  //   thumbnail: require('../assets/images/portfolio/thumbnails/6.jpg'),
  //   title: 'Category',
  //   desc: 'Project Name',
  // },
];

const logo_set = [
  {
    src: require('../assets//images/portfolio/logos/JavaScript.png'),
    name: 'JavaScript'
  },
  {
    src: require('../assets//images/portfolio/logos/CSS3.png'),
    name: 'CSS3'
  },
  {
    src: require('../assets//images/portfolio/logos/HTML5.png'),
    name: 'HTML5'
  },
  {
    src: require('../assets//images/portfolio/logos/React.png'),
    name: 'React.js'
  },
  {
    src: require('../assets//images/portfolio/logos/Express.png'),
    name: 'Express.js'
  },
  {
    src: require('../assets//images/portfolio/logos/Git.png'),
    name: 'git'
  },
  // {
  //   src: require('../assets//images/portfolio/logos/Next.png'),
  //   name: 'Next.js'
  // },
  {
    src: require('../assets//images/portfolio/logos/node.png'),
    name: 'Node.js'
  },
  {
    src: require('../assets//images/portfolio/logos/Redux.png'),
    name: 'Redux'
  },
  {
    src: require('../assets//images/portfolio/logos/PostgreSQL.png'),
    name: 'PostreSQL'
  },
  {
    src: require('../assets//images/portfolio/logos/Sass.png'),
    name: 'Sass'
  },
]

const logos = logo_set.map((e) => {
  return (
    <div key={e.src} className='logo-container'>
      <img
        className='logo-img'
        src={e.src}
        alt={e.name}
      />
      <p className='logo-name'>{e.name}</p>
    </div>
  )
})

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-uppercase text-white font-weight-bold">
              {config.heading}
            </h1>
            <hr className="divider my-4" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 font-weight-light mb-5">
              {config.subHeading}
            </p>
            <Scroll type="id" element="about">
              <a
                className="btn btn-primary btn-xl js-scroll-trigger"
                href="#about"
              >
                Find Out More
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </header>

    <section className="page-section bg-primary" id="about">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">About Me</h2>
            <hr className="divider light my-4" />
            <p className="text-white-50 mb-4">
              After working in Sports Administration for several years, I knew I wanted to use my strengths to take on a new challenge. Devmountain's coding bootcamp allowed me to pivot my future and career for the better. I have loved every minute of problem solving, finding solutions, learning new technologies, and improving app efficiencies. As a developer, I want to use technology to make the world a better place for current and future generations.<br /><br /> When I'm not coding, I'm spending time with my dog in the great outdoors, playing board games, and cheering on my favorite sport teams. If you have any questions, please don't hesitate to reach out!


            </p>
            <Scroll type="id" element="portfolio">
              <a
                className="btn btn-light btn-xl js-scroll-trigger"
                href="#portfolio"
              >
                See my projects below!
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section className="page-section" id="services">
      <div className="container">
        <h2 className="text-center mt-0">Philosophy</h2>
        <hr className="divider my-4" />
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-gem text-primary mb-4"></i>
              <h3 className="h4 mb-2">Hard Worker</h3>
              <p className="text-muted mb-0">
                Problem solving is my motivater.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-laptop-code text-primary mb-4"></i>
              <h3 className="h4 mb-2">Qualified</h3>
              <p className="text-muted mb-0">
                Check out my skills below, I know my stuff!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-globe text-primary mb-4"></i>
              <h3 className="h4 mb-2">Learner</h3>
              <p className="text-muted mb-0">
                I love researching, code-referencing, and learning. Google is my BFF and I'm not afraid to use it.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <i className="fas fa-4x fa-heart text-primary mb-4"></i>
              <h3 className="h4 mb-2">Relatable</h3>
              <p className="text-muted mb-0">
                I got loads of colleagues and friends. Just check out my MySpace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="portfolio">
      <Gallery images={img_set} />
    </section>

    <section className="page-section bg-dark text-white">
      <div className="container text-center">
        <h2 className="mb-4">Skills</h2>
        <div className='skills-logo-container'>
          {logos}
        </div>
      </div>
    </section>

    <ContactUs />

    {/* <Footer /> */}
  </Layout>
);

export default IndexPage;
