import React, { Component } from 'react';
import Body from './component/body/body';
import Add from './component/add/add.js';
import Welcome from './component/welcome/welcome'
import Weather from './component/weather/weather'
import { Route, Link, Switch } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div>
        <nav>
          <div className='nav'>
          <Link to="/" className='link'><button>Home</button></Link>{/*'--'*/}
          <Link to="/art"><button>Gallery</button></Link>{/*'--'*/}
          <Link to="/addArt"><button>Create an Art Post</button></Link>{/*'--'*/}
          <Link to="/weather"><button>Weather by Zipcode</button></Link>
          </div>
        </nav>
        <Switch>

          <Route exact path='/' component={Welcome} />

          <Route exact path ='/art' component={Body} />

          <Route exact path='/addArt' component={Add} /> 

          <Route exact path='/weather' component={Weather} />

        </Switch> 
      </div>
    );
  }
}

export default App;
