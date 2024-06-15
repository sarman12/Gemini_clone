import React, { useContext, useState } from 'react'
import './Main.css'
import {assets} from '../../assets/assets/assets'
import { Context } from '../../context/Context'
const Main = () => {
  const {previousprompt,setPreviousPrompt,onsent,setRecentPrompt,recentprompt,showPrompt,loading,resultdata,input,setInput} = useContext(Context)
  const [signin,setSignin]=useState(false);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <div className="dark-mode">
          <div className="animation">
          </div>
        </div>
        {signin? <img src={assets.arman}  alt="" />:<div className="btn">
          <button>Sign Up</button>
          <button>Log In</button>
        </div>}
        
      </div>
      <div className="main-container">
      {!showPrompt?
      <>
      <div className="greet">
          <p><span>Hello, Sahanee</span></p>
          <p>How can i help you today</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest a tourist Place</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest a beautiful Place for our honeymoon</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest a better dialouge for my presentation</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Suggest a tourist Place</p>
            <img src={assets.code_icon} alt="" />
            <p>{recentprompt}</p>
          </div>
          </div>

      </>
      :
      <div className="result">
        <div className="result-title">
        {/* <p>{input}</p> */}
          <img src={assets.user_icon} alt="" />
          <p>{recentprompt}</p>
        </div>
        <div className="result-data">
          <img src={assets.gemini_icon} alt="" />
          {loading? <div className="loading">
            <hr />
            <hr />
            <hr />
          </div>:        <div className='text'><p  dangerouslySetInnerHTML={{__html:resultdata}}></p></div>  
}
        </div>
      </div>

      }
        


        

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter your queries" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={()=>onsent()} src={assets.send_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Main
