import React from 'react';
import './App.css';
import GroupCards from './components/GroupCards';
import BetCards from './components/BetCards';
import NewsCard from './components/NewsCards';

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
          <span>notificação</span>
          <span>foto perfil</span>
          <span>username</span>
          <span>seta</span>
        </div>
      </div>
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
