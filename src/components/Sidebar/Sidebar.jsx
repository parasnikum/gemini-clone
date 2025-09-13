import React, { useState } from 'react'
import { Plus, Menu, MessageCircle, MessageCircleQuestionMark, SquareChartGantt, Settings } from "lucide-react";
import "./Sidebar.css"
function Sidebar() {
  const [extended, setExtended] = useState(true);
  return (
    <>
      <div className='sidebar' style={{width : extended ? '20%' :"10%"}}>
        <div className='top'>
          <div className='menu' onClick={() => { setExtended(prev => !prev) }}>
            <Menu />
          </div>
          <div className='new-chat'>
            <Plus />
            {extended ? <p>New Chat</p> : null}
          </div>
          <div className='recent-chats'>
            <MessageCircle />
            {extended ? <p> Recent Chats</p> : null}

          </div>

        </div>

        <div className='bottom'>
          <div>
            <MessageCircleQuestionMark />
            {extended ? <p> Help</p> : null}
          </div>
          <div>
            <SquareChartGantt />
            {extended ? <p> Activity</p> : null}
          </div>
          <div>

            <Settings />
            {extended ? <p> Setting</p> : null}
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar