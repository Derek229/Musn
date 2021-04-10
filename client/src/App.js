import React, { Fragment, } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Login from './components/Login';
import Register from './components/Register';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "react-bootstrap";
import Footer from './components/Footer'
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute'
<<<<<<< HEAD
import Songs from './pages/Songs';
import Song from './pages/Song';
import SearchBar from './components/SearchBar';
=======
import MyDashboard from './pages/Users/MyDashboard';
import About from './pages/About';
import FindUsers from './pages/Users/FindUsers';
import UserShow from './pages/Users/UserShow';
>>>>>>> e37702a83fb824cdbe7e630470e7403062a0f415

const App = () => (
  <Fragment>
    <NavBar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/songs" component={Songs} />
          <Route exact path="/songs/:id" component={Song} />
          <Route exact path="/register" component={Register} />
          <ProtectedRoute exact path='/dashboard' component={MyDashboard} />
          <ProtectedRoute exact path='/users' component={FindUsers} />
          <ProtectedRoute exact path='/users/:id' component={UserShow} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
    <Footer />
  </Fragment>
)

export default App;
