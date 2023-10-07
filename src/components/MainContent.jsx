import React from 'react'
import './MainContent.css';



import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FiMoreHorizontal } from "react-icons/fi";


const MainContent = () => {
  return (
    <>
        <div>
        <div className="header">
            <div className="input">
                <AiOutlineSearch />
                <input type="text" placeholder='Search here...' />
            </div>

        
            <div>
                < FiMoreHorizontal className='icon'/>
            </div>

            <div>
                <IoMdNotifications  className='icon'/>
            </div>
            
        </div>

        <div className="message">
            <h4>Faisal</h4>

            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px'}}>
                <div></div>
                <div style={{backgroundColor: '#eef8f9', padding: '5px 10px'}}>
                    <p><b>Hello brother</b></p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                
                <div style={{border: '1px solid #eef8f9', padding: '5px'}}>
                    <p><b>how are you?</b></p>
                </div>

                <div></div>
            </div>


            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px'}}>
                <div></div>
                <div style={{backgroundColor: '#eef8f9', padding: '5px 10px'}}>
                    <p><b>I am fine, and you</b></p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                
                <div style={{border: '1px solid #eef8f9', padding: '5px'}}>
                    <p><b>Not so good, let us travel</b></p>
                </div>

                <div></div>
            </div>


            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 20px'}}>
                <div></div>
                <div style={{backgroundColor: '#eef8f9', padding: '5px 10px'}}>
                    <p><b>Good decision!</b></p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between', margin: '5px 20px'}}>
                <div></div>
                <div style={{backgroundColor: '#eef8f9', padding: '5px 10px'}}>
                    <p><b>But I do not have sufficient money</b></p>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                
                <div style={{border: '1px solid #eef8f9', padding: '5px'}}>
                    <p><b>Oh you are so poor, take this</b></p>
                </div>

                <div></div>
            </div>

        </div>

            <hr />
        </div>

        <div className='main-content-footer'>
            <div className="footer">
                <input type="text" placeholder='Write your message...'/>
                <button>Send</button>
            </div>
        </div>
    </>
  )
}

export default MainContent;