import React from 'react';
import './App.css';
import GroupCards from './components/GroupCards';
import BetCards from './components/BetCards';
import NewsCard from './components/NewsCards';

import { FiBell, FiArrowDown, FiArrowLeft, FiShare2 } from 'react-icons/fi';

function App() {
  return (
    <div className="App">

      <div className="nav">
        <div className="left">
          <h1>LOGO aqui</h1>
          <nav>
            <ul>
              <li>
                BROWSE BETS
              </li>
              <li>
                GROUPS
              </li>
              <li>
                JUDGE-IT
              </li>
              <li>
                SHOP
              </li>
            </ul>
          </nav>
        </div>

        <div className="right">
          <button>NEW BET</button>
          <span><FiBell size={18} /></span>
          <span>foto perfil</span>
          <span>username</span>
          <span><FiArrowDown size={18} /></span>
        </div>
      </div>

      <section className="banner">
        <h1>
          TSM vs. CLG NA LCS
        </h1>
        <p>North America League of Legends Championship Series ° Jun 16 - Oct 28, 2018</p>
        <span>Jasmine Chan ° created 8w ago</span>

        <button>View Bet</button>
        <span> <FiShare2 size={18} /> </span>
        <span> <FiArrowLeft size={18} /> </span>
        <p>Backed by 800 people</p>
      </section>


      <section className="cards-content">
        <div className="groups">
          <div className="header">
            <h1>Your Groups</h1>
            <a href=""> MORE &gt; </a>
          </div>

          <div className="groups-cards">
            <GroupCards groupName="Friends" usersGroup="100" />
            <GroupCards groupName="League of Legends" usersGroup="100" />
            <GroupCards groupName="General" usersGroup="100" />
            <GroupCards groupName="OverWatch" usersGroup="100" />
            <GroupCards groupName="༼ つ ◕_◕ ༽つ" usersGroup="100" />
            <GroupCards groupName="CoD" usersGroup="100" />
          </div>
        </div>

        <div className="browse-bets">
          <div className="header">
            <h1>Browse bets</h1>
          </div>

          <div className="bets-cards">
            <BetCards name="NEW" />
            <BetCards name="HOT" />
            <BetCards name="TRENDING" />
          </div>
        </div>

        <div className="news">
          <NewsCard title="camille ta op" description="foda mano" />
          <NewsCard title="camille ta op" description="foda mano" />
          <NewsCard title="camille ta op" description="foda mano" />
          <NewsCard title="camille ta op" description="foda mano" />
          <NewsCard title="camille ta op" description="foda mano" />
        </div>
      </section>
    </div>
  );
}

export default App;
