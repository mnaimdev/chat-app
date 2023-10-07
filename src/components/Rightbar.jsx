import React from 'react'
import './Rightbar.css';
import { FaAnglesRight, FaComment, FaPhone } from "react-icons/fa6";
import {BiSolidVideo } from "react-icons/bi";
import {FiMoreHorizontal } from "react-icons/fi";
import {AiFillFolder } from "react-icons/ai";


const Rightbar = () => {
  return (
    <>
    <FaAnglesRight className='right-icon'/>
        <div className="rightbar-bio">
            <img src='./naim.jpg' alt="" />
            <h6 className='rightbar-name'>Mohammad Naim</h6>
            <span className="rightbar-username">@mnaimdev</span>
        </div>
        
        <div className="rightbar-broadcast">
          <div>
            <FaComment className='boradcast-icon'/>
            <p className='broadcast-text'>Message</p>
          </div>

          <div>
            <FaPhone className='boradcast-icon'/>
            <p className='broadcast-text'>Phone</p>
          </div>


          <div>
            <BiSolidVideo className='boradcast-icon'/>
            <p className='broadcast-text'>Video</p>
          </div>


          <div>
            <FiMoreHorizontal className='boradcast-icon'/>
            <p className='broadcast-text'>Video</p>
          </div>
        </div>

        <hr className='hr'/>

        <div className="rightbar-personal-info">
          <div className='rightbar-personal-item'>
            <p><b>Phone</b></p>
            <p>01794556889</p>
          </div>

          <div className='rightbar-personal-item'>
            <p><b>Date Of Birth</b></p>
            <p>5 July, 1999</p>
          </div>

          <div className='rightbar-personal-item'>
            <p><b>Gender</b></p>
            <p>Male</p>
          </div>
        </div>

        <hr className='hr'/>

      <div className='shared-file'>
        <h6>Shared Files</h6>
        <button className='view-all'>View All</button>
      </div>
      
      <div className="rightbar-shared-info">
        
        <div className="rightbar-shared-item">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              
              <div style={{display: 'flex'}}>
                <AiFillFolder style={{marginRight: "5px", fontSize: '25px'}}/>
                  <div>
                    <p style={{margin: '0px', padding: '0px'}}>smg group chat</p>
                    <p style={{margin: '0px', padding: '0px', fontSize: '10px'}}>12 minutes ago</p>
                  </div>
              </div>
              <p style={{marginRight: '20px'}}>1mb</p>
            </div>
            
        </div>


        <div className="rightbar-shared-item">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              
              <div style={{display: 'flex'}}>
                <AiFillFolder style={{marginRight: "5px", fontSize: '25px'}}/>
                  <div>
                    <p style={{margin: '0px', padding: '0px'}}>boichitro document file</p>
                    <p style={{margin: '0px', padding: '0px', fontSize: '10px'}}>20 minutes ago</p>
                  </div>
              </div>
              <p style={{marginRight: '20px'}}>2mb</p>
            </div>
            
        </div>


        <div className="rightbar-shared-item">
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              
              <div style={{display: 'flex'}}>
                <AiFillFolder style={{marginRight: "5px", fontSize: '25px'}}/>
                  <div>
                    <p style={{margin: '0px', padding: '0px'}}>pos sql file</p>
                    <p style={{margin: '0px', padding: '0px', fontSize: '10px'}}>1 hours ago</p>
                  </div>
              </div>
              <p style={{marginRight: '20px'}}>3mb</p>
            </div>
            
        </div>



        
      </div>

    </>
  )
}

export default Rightbar;