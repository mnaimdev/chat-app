import React from 'react'
import Rightbar from './Rightbar';

const ChatContainer = () => {
  return (
    <>
      <div className="chat-container">
        <div className="first"></div>
        <div className="second"></div>
        <div className="third">
          <Rightbar />
        </div>
      </div>
    </>
  )
}

export default ChatContainer;