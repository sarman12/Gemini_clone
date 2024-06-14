import React, { useContext, useState } from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets/assets'; // Ensure this path is correct
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);

  const {onsent,previousprompt,setRecentPrompt}=useContext(Context);
  

  return (
    <div className={`sidebar ${extended ? 'extended' : ''}`}>
      <div className="top">
        <img 
          className='menu' 
          src={assets.menu_icon} 
          alt="Menu" 
          onClick={() => setExtended(!extended)} 
        />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="New Chat" />
          {extended ? <p>New Chat</p> : null}
        </div>
        {extended?(
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousprompt.map((item,index)=>{
              return (
                <div className="recent-entry">
                  <img src={assets.message_icon} alt="Message" />
                  <p>{item}...</p>
                </div>

              )
            })}
            
          </div>
        ):null}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="Help" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="Activity" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="Setting" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
