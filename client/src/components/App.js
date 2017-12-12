import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import About from './home/About';
import Contact from './Contact';

class App extends Component {
  render() {
    return (
      <div className="site">
        <BrowserRouter>
          <div className="container">
            <Header />
            <main className="site-content">
              <Route exact path="/" component={About} />
              <Route exact path="/contact" component={Contact} />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
