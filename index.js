import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Interests from './components/Interests.js'
import Profile from './components/Profile.js'

class Main extends React.Component {
  render() {
    return (
      <div className = "container">
        <Profile />
        <About />
        <Interests />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));