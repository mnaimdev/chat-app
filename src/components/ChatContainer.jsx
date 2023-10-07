import React from 'react'
import Rightbar from './Rightbar';
import MainContent from './MainContent';

const ChatContainer = () => {
  return (
    <>
      <div className="chat-container">
        <div className="first"></div>
        <div className="second">
          <MainContent />
        </div>
        <div className="third">
          <Rightbar />
        </div>
      </div>
    </>
  )
}

export default ChatContainer;