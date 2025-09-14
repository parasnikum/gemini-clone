import React, { useState } from 'react';
import { Plus, Menu, MessageCircle, MessageCircleQuestionMark, SquareChartGantt, Settings } from 'lucide-react';
import './Sidebar.css';

function Sidebar() {
  const [extended, setExtended] = useState(true);

  const SidebarItem = ({ icon: Icon, label, className = '' }) => (
    <div className={`sidebar-item ${className}`}>
      <Icon />
      {extended && <p>{label}</p>}
    </div>
  );

  return (
    <div className="sidebar" style={{ width: extended ? '200px' : '70px' }}>
      <div className="top">
        <div className="menu" onClick={() => setExtended(prev => !prev)}>
          <Menu />
        </div>
        <SidebarItem icon={Plus} label="New Chat" className="new-chat" />
        <SidebarItem icon={MessageCircle} label="Recent Chats" className="recent-chats" />
      </div>

      <div className="bottom">
        <SidebarItem icon={MessageCircleQuestionMark} label="Help" />
        <SidebarItem icon={SquareChartGantt} label="Activity" />
        <SidebarItem icon={Settings} label="Setting" />
      </div>
    </div>
  );
}

export default Sidebar;
