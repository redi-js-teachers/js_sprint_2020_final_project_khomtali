import React from 'react';
import { useUserContext } from '../../contexts/UserContext';
import Banner from '../banner';
import Sidebar from '../sidebar';
import Calculator from '../calculator';
import { Route, Switch } from 'react-router-dom';
import TrainingPlan from '../training';
import UserProfile from '../user-profile';
import './styles.css';

function Main() {
  const { user } = useUserContext();

  return (
    <main>
      <Banner />
      <div className="content-container">
        <Sidebar />
        <div className="content">
          {!user ?
            <Calculator />
            :
            <Switch>
              <Route path="/training" component={TrainingPlan} />
              <Route path="/zones" component={Calculator} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/home" component={Calculator} />
            </Switch>
          }
        </div>
      </div>
    </main>
  );
}

export default Main;
