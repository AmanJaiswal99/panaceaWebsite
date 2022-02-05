// RULES 
// 1) Make CSS changes in precense of the Tech Head
// 2) Do not touch functions which are flagged not to touch
// 3) Contact aman2000.jaiswal@gmail.com for any bugs
// 4) Don't change the component order without Tech/Web Head
// 5) Don't delete any comments
// 6) Add comments for any changes

import React from 'react'
import './App.css';
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Members from './components/Members'
import Faq from './components/Faq'
import Blogs from './components/Blogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Join from './components/Join'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import "animate.css/animate.min.css";






function App() {
 

  return (
    <Router>
          

      <Route exact path='/'>
      <div className="app">
       {/* navbar */} 
       <Navbar/>
       
      {/* Banner */}
       <span id='home'/>
        <Banner/>
  

       {/* about */}
        <span id="about"/>
        <About/>
        
        {/* Members */}
        <span id='team'/>
        <Members/>
    
      {/* faqs */}
        <span id='faq'/>
        <Faq/>
        {/* blogs */}
        <span id='blogs'/>
        <Blogs/>
        {/* Contact form */}
        <span id='contact'/>
        <Contact/>
        {/* footer */}
        <span id='footer'/>
        <Footer/>
        {/* meet the developer */}
 
      </div>
      </Route>
      {/* Route for join page */}
      <Route exact path='/join'>
      <Join/>
      </Route>

    </Router>
    
  );
}

export default App;
