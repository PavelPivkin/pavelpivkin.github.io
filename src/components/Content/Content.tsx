import { Grid } from 'semantic-ui-react';

import YandexLogo from './assets/Yandex.jpg';
import BMSTULogo from './assets/BMSTU.jpg';
import NagradionLogo from './assets/Nagradion.jpg';
import MercauxLogo from './assets/Mercaux.jpg';

export const Content = () => (
  <Grid.Row>
    <Grid.Column width={8}>
      <h2 className="ui medium header">Work experience</h2>
      <div className="ui raised segment">

        {/* Mercaux */}
        <span className="ui yellow ribbon label company">
          <img className="ui middle circular aligned mini image" src={MercauxLogo}></img>
          <span className="company-name">Mercaux</span>
        </span>
        <div className="experience-header">
          <div>Web developer</div>
          <div className="date">Nov 2022 - March 2024</div>
        </div>
        <p>
          <ul className="ui divided list">
            <li className="item">Developed from scratch UI for a chatbot constructor using Reactflow </li>
            <li className="item">Developed UI for automatic outreach messaging (overview, configuring, scheduling and summary views)</li>
            <li className="item">Wrote a chatbot validation mechanism and logic (for checking up a conversation graph nodes and edges) on frontend side</li>
            <li className="item">Solved related UI/UX problems through negotiation with the design and product manager teams which allowed to complete feature definition and set up estimations</li>
            <li className="item">Built RESTful APIs and product feature together with the Backend team</li>
            <li className="item">Increased desktop and mobile application performance by removing unnecessary modules and assets with webpack-bundle-analyzer</li>
            <li className="item">Supported infrastracture for unit tests by jest library</li>
          </ul>
        </p>

        {/* Yandex */}
        <span className="ui yellow ribbon label company">
          <img className="ui middle circular aligned mini image" src={YandexLogo}></img>
          <span className="company-name">Yandex</span>
        </span>
        <div className="experience-header">
          <div>Frontend developer</div>
          <div className="date">Nov 2018 - Apr 2022 (3 years 6 months)</div>
        </div>
        <p>
          As a middle frontend developer worked on yandex news portal and with teammates:
          <ul className="ui divided list">
            <li className="item">Rewrote service from legacy framework to react-ssr</li>
            <li className="item">Concurrently participated in the redesign of service</li>
            <li className="item">Increased video view time on service due to new video viewer</li>
            <li className="item">Made service accessable according to W3C</li>
            <li className="item">Fully supported service (fixed bugs, monitored server and client errors, ran releases)  </li>
          </ul>
        </p>

        {/* Nagradion */}
        <span className="ui blue ribbon label company">
          <img className="ui middle aligned mini image" src={NagradionLogo}></img>
          <span>Nagradion</span>
        </span>
        <div className="experience-header">
          <div>Junior frontend developer</div>
          <div className="date">Oct 2017 - Sep 2018 (1 year)</div>
        </div>
        <p>
          Took a part in the development of service of school sport tournaments statistics:
          <ul className="ui devided list">
            <li className="item">Implemented landing, tournament, and sports info pages</li>
            <li className="item">To make communication with backend clearer, set up documentation and tests for server API with Postman</li>
          </ul>
        </p>
      </div>
      <h2 className="ui medium header">Education</h2>
      <div className="ui segment">
        <div className="education-item">
          <img className="ui left floated top aligned mini image" src={BMSTULogo}></img>
          <div className="content">
            <div className="description">Bauman Moscow State technical university</div>
            <div className="meta">Bachelor's degree, Information technology</div>
            <div className="date">2013 - 2017</div>
          </div>

        </div>
      </div>
    </Grid.Column>
    <Grid.Column width={8}>
    <h2 className="ui medium header">Portfolio</h2>
      <div>
        <div>
          <a className='ui label basic selflink' href='https://pavelpivkin.github.io'>pavelpivkin.github.io</a>
          <a className='ui label basic' href='https://github.com/pavelpivkin'>github.com/PavelPivkin</a>
          <a className='ui label basic' href='https://medium.com/@iamdreamer'>Medium</a>
        </div>
      </div>
      <h2 className="ui medium header">Skills</h2>
      <div>
        <div className="ui green horizontal label">Html</div>
        <div className="ui green horizontal label">CSS</div>
        <div className="ui green horizontal label">Sass</div>
        <div className="ui green horizontal label">Styl</div>
        <div className="ui green horizontal label">Javascript (ES6)</div>
        <div className="ui green horizontal label">React</div>
        <div className="ui green horizontal label">React Router</div>
        <div className="ui green horizontal label">React Context API</div>
        <div className="ui green horizontal label">React Flow</div>
        <div className="ui green horizontal label">Redux</div>
        <div className="ui green horizontal label">Typescript</div>
        <div className="ui green horizontal label">Chrome-devconsole</div>
        <div className="ui green horizontal label">Webpack</div>
        <div className="ui green horizontal label">Babel</div>
        <div className="ui green horizontal label">Nodejs</div>
        <div className="ui green horizontal label">Web perfomance</div>
        <div className="ui green horizontal label">Jest</div>
        <div className="ui green horizontal label">Selenium</div>
        <div className="ui green horizontal label">Git</div>
        <div className="ui green horizontal label">Npm</div>
        <div className="ui green horizontal label">Lerna</div>
        <div className="ui green horizontal label">Monorepo</div>
      </div>
      <h2 className="ui medium header">Languages</h2>
      <div className="ui divided list">
        <div className="item">
          <i className="flag ru"></i>
          <span className="content"><b>Russian</b> - Native</span>
        </div>
        <div className="item">
          <i className="flag gb uk"></i>
          <span className="content"><b>English</b> - Intermediate</span>
        </div>
        <div className="item">
          <i className="flag es"></i>
          <span className="content"><b>Spanish (Castellano)</b> - Beginner</span>
        </div>
      </div>
      {/* <h2 className="ui medium header">Certifications and awards</h2>
          <h2 className="ui medium header">Personal projects</h2>
          <h2 className="ui medium header">Volunteer Experience</h2> */}
      <h2 className="ui medium header">Interests</h2>
      <div>
        <div className="ui blue horizontal label">Sport</div>
        <div className="ui blue horizontal label">Hiking</div>
        <div className="ui blue horizontal label">Camping</div>
        <div className="ui blue horizontal label">Gamedev with Unity</div>
      </div>
      {/* <h2 className="ui medium header">Additional Info</h2>
      <div>Opened for remote work and relocation</div> */}
    </Grid.Column>
  </Grid.Row>
);