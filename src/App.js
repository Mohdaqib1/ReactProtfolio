import logo from './Components/aqib.png';

import './App.css';
import PersonalDetails from './Components/PersonalDetails';
import Hobbies from './Components/Hobbies';
import Profile from './Components/Profile';
import SkillsSummary from './Components/SkillsSummary';
import TechnologySummary from './Components/TechnologySummary';
import Class from './Components/Class';
import Current from './Components/Current';
import Graduation from './Components/Graduation';
import Classtwo from './Components/Classtwo';
import logof from './Components/facebook.png';
import logoi from './Components/instagram.jfif';
import logog from './Components/github.png';
import logoh from './Components/heroku.png';
import logot from './Components/twiter.png';
import logogm from './Components/gmail.png';
import resume from './Components/Resume.pdf';



import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div>

      <Router>
        <div>
          <header>
            <div className="header-name">
              <h1>Protfolio</h1>
            </div>
            <div className='header-info'>
              <ul className='header-information'>
                <li ><img className='img' src={logo} ></img></li>
                <li ><h2 >Name  -  Mohd Aqib</h2></li>
                <li className='Resume'><h2 ><a className='res' href={resume}>Resume &raquo;</a></h2></li>
                
              </ul>
            </div>

          </header>

          <nav className='nav'>
            <label className='logo active'>Mohd Aqib</label>
            {/* Mobile */}
            <ul className='nav-mobile ul'>
              <li className='li dropdown'><div className='a dropbtn '>Menu</div>

                <div className="dropdown-content">
                <div className='aa'> <div className='a immg'><img className='img' src={logo} ></img></div></div>
                <div className='aa'> <div className='a'>Mohd Aqib</div></div>
                <div className='aa'> <div className='a'><a className='res' href={resume}>Resume &raquo;</a></div></div>
                  <div className='aa'><Link to="/Current"> <div className='a'>Current.</div> </Link></div>
                  <div className='aa'><Link to="/Class"> <div className='a'>10Th Class.</div> </Link></div>
                  <div className='aa'><Link to="/Classtwo"> <div className='a'>12Th Class.</div> </Link></div>
                  <div className='aa'><Link to="/Graduation"> <div className='a'>Graduation.</div> </Link></div>
                  <div className='aa'><Link to="/" ><div className='a'>Personal Details</div></Link> </div>
                  <div className='aa'><Link to="/Hobbies" > <div className='a'>Hobbies</div>  </Link></div>
                  <div className='aa'><Link to="/Profile" ><div className='a'>Profile</div> </Link></div>
                  <div className='aa'><Link to="/SkillsSummary" ><div className='a'>ProjectSummary</div> </Link>  </div>
                  <div className='aa'><Link to="/TechnologySummary" ><div className='a'>TechnologySummary</div></Link></div>
                </div>
              </li></ul>

            {/* Desktop */}
            <ul className="ul">
              <li className='li' ><Link to="/" ><div className='a'>Personal Details</div></Link>     </li>
              <li className='li dropdown'><div className='a dropbtn '>Education</div>

                <div className="dropdown-content">

                  <div className='aa'><Link to="/Current"> <div className='a'>Current.</div> </Link></div>
                  <div className='aa'><Link to="/Class"> <div className='a'>10Th Class.</div> </Link></div>
                  <div className='aa'><Link to="/Classtwo"> <div className='a'>12Th Class.</div> </Link></div>
                  <div className='aa'><Link to="/Graduation"> <div className='a'>Graduation.</div> </Link></div>
                </div>


              </li>
              <li className='li'><Link to="/Hobbies" > <div className='a'>Hobbies</div>  </Link>      </li>
              <li className='li'><Link to="/Profile" ><div className='a'>Profile</div> </Link>     </li>
              <li className='li'><Link to="/SkillsSummary" ><div className='a'>ProjectSummary</div> </Link>     </li>
              <li className='li'><Link to="/TechnologySummary" ><div className='a'>TechnologySummary</div></Link>     </li>
            </ul >

          </nav>




          <Switch>
            <Route path="/Hobbies">
              <Hobbies />
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            <Route path="/SkillsSummary">
              <SkillsSummary />
            </Route>
            <Route path="/TechnologySummary">
              <TechnologySummary />
            </Route>
            <Route path="/Class">
              <Class />
            </Route>
            <Route path="/Classtwo">
              <Classtwo />
            </Route>
            <Route path="/Graduation">
              <Graduation />
            </Route>
            <Route path="/Current">
              <Current />
            </Route>
            <Route path="/">
              <PersonalDetails />
            </Route>




          </Switch>
        </div>

      </Router>

      <div className='Container'>
        <div className='con'>
          <div className='cal'><h3 className='heading'>Profile</h3>
            <Profile /></div>
          <div className='cal'> <h3 className='heading'>SkillsSummary</h3>
            <SkillsSummary /></div>
          <div className='cal'>
            <h3 className='heading'>Personal Details</h3>
            <PersonalDetails /></div>


        </div>
        <div className='con'>
          <div className='cal'><h3 className='heading'>Class X</h3>
            <Class /></div>
          <div className='cal'><h3 className='heading'>Class XII</h3>
            <Classtwo /></div>
          <div className='cal'><h3 className='heading'>Graduation</h3>
            <Graduation /></div>

        </div>
        <div className='con'>
          <div className='cal'><h3 className='heading'>Projects</h3>
            <Current /></div>
          <div className='cal'><h3 className='heading'>Technology Summary</h3>
            <TechnologySummary /></div>
          <div className='cal'> <h3 className='heading'>Hobbies</h3>
            <Hobbies /></div>


        </div>
      </div>








      


      <footer>
        <div className='foo'>
          <h1>Thank you for Watching my Protfolio...</h1>
          <h2>Find me on social media..</h2>
          <div className='foo-im'>
           <a href='https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQzODg2NzM5LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D'> <img className='foo-img' src={logof} ></img></a>
          <a href='https://www.instagram.com/accounts/login/'><img className='foo-img' src={logoi} ></img></a>
          <a href='https://github.com/Mohdaqib1/api-todo-app'><img className='foo-img' src={logog} ></img></a>
          <a href='https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin'><img className='foo-img' src={logogm} ></img></a>
          <a href='https://dashboard.heroku.com/apps'><img className='foo-img' src={logoh} ></img></a>
          <a href='https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D'><img className='foo-img' src={logot} ></img></a>
          

            
          </div>

        </div>


      </footer>

    </div>
  );
}




export default App;
