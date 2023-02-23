import React from 'react'
import "./side_content.css"
const SideContent = () => {
  return (
    <div className='RightSide'>
        <h1 style={{fontWeight:'normal'}}>React</h1>
        <div className='Main' style={{fontWeight:'normal'}}>
        <h3 style={{fontWeight:'normal'}}>Example</h3>
        <a href={'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react'} target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'#B83F45'}}>Source</a>

        <h3 style={{fontWeight:'normal'}}>React + Backbone.js</h3>
        <a href=''style={{display: 'inline', color:'#B83F45'}}>Demo</a>, <span></span>
        <a href={'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-backbone'}target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'#B83F45'}}>Source</a>

        <h3 style={{fontWeight:'normal'}}>Scala.js + React</h3>
        <a href=''style={{display: 'inline', color:'#B83F45'}}>Demo</a>, <span></span>
        <a href={'https://github.com/tastejs/todomvc/tree/gh-pages/examples/scalajs-react'}target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'#B83F45'}}>Source</a>

        <h3 style={{fontWeight:'normal'}}>TypeSript + React</h3>
        <a href=''style={{display: 'inline', color:'#B83F45'}}>Demo</a>, <span></span>
        <a href={'https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react'}target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'#B83F45'}}>Source</a>
        
        <h3 style={{fontWeight:'normal'}}>React + Alt</h3>
        <a href=''style={{display: 'inline', color:'#B83F45'}}>Demo</a>,  <span></span>
        <a href={'https://github.com/tastejs/todomvc/tree/gh-pages/examples/react-alt'}target="_blank" rel="noopener noreferrer"style={{display: 'inline', color:'#B83F45'}}>Source</a>
        </div>

        <hr></hr>

        <div className='Quote'>
        <blockquote class='quote speech-bubble'>React is a JavaScript library for creating user interfaces. Its core principles are declarative code, efficiency, and flexibility. Simply specify what your component looks like and React will keep it up-to-date when the underlying data changes</blockquote>
        <a href={'https://reactjs.org/'} style={{color:'#B83F45', paddingLeft:'80%'}}>React</a>
        </div>
        
        <hr></hr>


        <div className='Information'>
        <h3 style={{fontWeight:'normal'}}>Official Resources</h3>
        <ul>
            <li><a href={'https://reactjs.org/tutorial/tutorial.html'}target="_blank" rel="noopener noreferrer"style={{color:'#B83F45'}}>Tutorial</a></li>
            <li><a href={'https://www.quora.com/profile/PH-487/Posts/React-Under-the-Hood'}target="_blank" rel="noopener noreferrer"style={{color:'#B83F45'}}>Philosophy</a></li>
            <li><a href={'https://reactjs.org/community/support.html'}target="_blank" rel="noopener noreferrer"style={{color:'#B83F45'}}>Support</a></li>
            <li><a href={'https://github.com/facebook/flux/tree/main/examples/flux-todomvc'}target="_blank" rel="noopener noreferrer"style={{color:'#B83F45'}}>Flux architecture example</a></li>
        </ul>
        <h3 style={{fontWeight:'normal'}}>Commmunity</h3>
        <ul>
            <li><a href='https://stackoverflow.com/questions/tagged/reactjs'target="_blank" rel="noopener noreferrer"style={{color:'#B83F45'}}>ReactJS on Stack Overflow</a></li>
            <li><a href={'https://groups.google.com/access-error?continue=https://groups.google.com/g/reactjs?pli%3D1'}target="_blank" rel="noopener noreferrer"style={{color:'#B83F45'}}>Google Groups Mailing List</a></li>
            <li><a href={'irc://chat.freenode.net/reactjs'}target="_blank" rel="noopener noreferrer"style={{color:'#B83F45' }}>IRC</a></li>
        </ul>
        </div>
        
        <hr></hr>


        <div className='footer'>
            <p>If you have other helpful links to share, or find any of the links above no longer work, <a href="https://github.com/tastejs/todomvc/issues"target="_blank" rel="noopener noreferrer" style={{color:'#B83F45'}}>please let us know.</a></p>
        </div>
        
    </div>
  )
}

export default SideContent