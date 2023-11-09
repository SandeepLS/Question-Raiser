import React from 'react'

// import './Campus.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'


const Users = () => {

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2" style={{marginTop: "30px"}}>
                <h2 style={{fontWeight: "600", marginBottom:"2%", marginTop:"2%"}}>CMR University Campus</h2>

                <div style={{width:"100%", backgroundColor:"#DFCCFB", margin:"10px", color:"solid black", borderRadius:"30px 0px 20px", marginTop:"0px"}}>
                     <h2 style={{margin:"0", padding:"10px"}}>CMR OMBR Campus</h2>
                    <p style={{padding:"9px", margin:"0", fontWeight:"500"}}>
                        CMR University is one of the best LLB colleges in Bangalore that offers both BA LLB (Hons) and LLB programs, providing students with the flexibility to choose the degree that aligns with their aspirations.<br/>
                        No.5, Bhuvanagiri,
                        OMBR Layout,
                        Bangalore -5600043.
                        Contact number - 93799 06405,
                        080 - 25426955, 080 - 25426944
                    </p>
                </div>

                <div style={{width:"100%", backgroundColor:"#DFCCFB", margin:"10px", color:"solid black", borderRadius:"30px 0px 20px", marginTop:"0px"}}>
                     <h2 style={{margin:"0", padding:"10px"}}>CMR Baglur Campus</h2>
                    <p style={{padding:"9px", margin:"0", fontWeight:"500"}}>
                    CMR University’s new 60-acre lakefront campus is located in North Bangalore, just off the Hennur-Bagalur Road.
                    Developed as a greenfield project it is easily accessible from Bellary Road (New Airport Road) and well within BDA limits.<br/>
                    The new building is located within the sprawling 60 acre CMRU campus. The exclusive First Year Engineering Block is equipped with state-of-the-art laboratories, spacious high-tech classrooms and a well-stocked library.
                    </p>
                </div>

                <div style={{width:"100%", backgroundColor:"#DFCCFB", margin:"10px", color:"solid black", borderRadius:"30px 0px 20px", marginTop:"0px"}}>
                     <h2 style={{margin:"0", padding:"10px"}}>CMR Information Technology</h2>
                    <p style={{padding:"9px", margin:"0", fontWeight:"500"}}>
                    Established in 2000, the CMR Institute of Technology imparts quality, pragmatic education in engineering and management to help students hone their analytical abilities and develop their creative thinking skills.<br/>
                    Situated in the very heart of South India’s IT corridor, the CMRIT campus in Whitefield, Bangalore is centrally located, well connected and easily accessible.
                    </p>
                </div>

                <div style={{width:"100%", backgroundColor:"#DFCCFB", margin:"10px", color:"solid black", borderRadius:"30px 0px 20px", marginTop:"0px"}}>
                     <h2 style={{margin:"0", padding:"10px"}}>CMR HRBR Layout</h2>
                    <p style={{padding:"9px", margin:"0", fontWeight:"500"}}>
                    Situated in the very heart of South India’s IT corridor
                    Address: 2 3rd C Cross, 2nd A Cross Rd, Kalyan Nagar, Bengaluru, Karnataka 560043
                    </p>
                </div>

                {/* <div style={{width:"100%", backgroundColor:"#DFCCFB", margin:"10px", color:"solid black", borderRadius:"30px 0px 20px", marginTop:"0px"}}>
                     <h2 style={{margin:"0", padding:"10px"}}>CMR Lake Said campus</h2>
                    <p style={{padding:"9px", margin:"0", fontWeight:"500"}}>CMR University is one of the best LLB colleges in Bangalore that offers both BA LLB (Hons) and LLB programs, providing students with the flexibility to choose the degree that aligns with their aspirations.</p>
                </div> */}
               
                
                
                
                
            </div>
        </div>
    )
}

export default Users
