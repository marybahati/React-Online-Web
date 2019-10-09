import React from 'react'
import './App.css'
import Home from './components/Home'
import Blog from './components/Blog'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

class App extends React.Component {
    render () {
        return (
            <div className="is-preload">
              <div id="wrapper">
              <Home/>
              <Blog/>
              <Gallery/>
              <Contact/>
              <div className="copyright">&copy; Untitled. All rights reserved. Design: <a href="https://html5up.net">React</a>.</div>
              </div>
            </div>
        )
    }
}

export default App