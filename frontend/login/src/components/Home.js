import React,{useEffect,useContext} from 'react';
import {useHistory} from "react-router-dom";
import UserContext from "../components/context/UserContext"
import "../style.css"

function Home() {
    
    const {userData}=useContext(UserContext);

   let history=useHistory();
    useEffect(()=>{
        if(!userData.user){
            history.push("/login")
        } 
    })
    document.title="homepage"   
    return (
        <div>
        <div className="wrapper">
        <nav className="main-nav">
            <ul>
               <li>Home</li>
               <li>Contacts</li>
               <li>About </li>
               <li>Services</li>
            </ul>
        </nav>

       
        <section class="top-container">
            <header class="showcase">
                <h1>Cherry entertainment series</h1>
                <p>Watch your favourite series with 
                    minimum Membership for 1 year
               </p>
               <h5 className="btn">Read More</h5>
            </header>

            <div class="top-box top-box-a">
                <h4>Membership</h4>
                <p class="price">&#8377;199/month</p>
                <div  className="btn">Buy Now</div>
            </div>

            <div class="top-box top-box-b">
                <h4>Pro Membership</h4>
                <p class="price">&#8377;299/month</p>
                <div  className="btn">Buy Now</div>
            </div>
        </section>

        
        <section class="boxes">
            <div class="box">
                <i class="fas fa-chart-pie fa-4x "></i>
                <h3>Analytics</h3>
                <p>Digital analytics is a set of business and technical activities that define,
                 create, collect, verify or transform digital data into reporting, research, analyses,
                 recommendations, optimizations, predictions, and automations.</p>
            </div>

            <div class="box">
                <i class="fas fa-globe fa-4x "></i>
                <h3>Marketing</h3>
                <p>Marketing research specifies the information required to address these issues,
                 designs the method for collecting information, manages and implements the data 
                 collection process, analyzes the results, 
                and communicates the findings and their implications.</p>
            </div>

            <div class="box">
                <i class="fas fa-cog fa-4x "></i>
                <h3>Development</h3>
                <p>New features have been developed in the latest version where you can view 
                    your series with slow data consumption and with high quality video.Another 
                    feature is that you can download it and it can be watched later</p>
            </div>

            <div class="box">
                <i class="fas fa-users fa-4x "></i>
                <h3>Support</h3>
                <p>To get back to watching, check if there is an error code or error message on-screen 
                and enter it into the search bar below. If your issue does not have an error code or 
                message, search for the problem you’re experiencing, such as 
                seeing a black screen, or being unable to sign in.</p>
            </div>
        </section>

       
        <section class="info">
            <img src="../../images/pic1.jpg" alt="pop"/>
            <div>
                <h2>Our entertainment Buisness on the Web</h2>
                <p>Films are the most important form of entertainment in India. 
                Film industry in India is among the largest in the world in terms of films produced 
                (approximately 1000) in different languages which include films in Hindi, 
                Kannada, Bengali, Tamil, Marathi, Telugu, Punjabi and Malayalam. 
                Approximately twenty-three million Indians go to see a film every day.</p>
                <div class="btn">Learn More</div>
            </div>
        </section>

       
        <section class="portfolio">
            <img src="https://source.unsplash.com/random/200x200" alt=""/>
            <img src="https://source.unsplash.com/random/201x200" alt=""/>
            <img src="https://source.unsplash.com/random/202x200" alt=""/>
            <img src="https://source.unsplash.com/random/203x200" alt=""/>
            <img src="https://source.unsplash.com/random/204x200" alt=""/>
            <img src="https://source.unsplash.com/random/205x200" alt=""/>
            <img src="https://source.unsplash.com/random/206x200" alt=""/>
            <img src="https://source.unsplash.com/random/207x200" alt="" />
            <img src="https://source.unsplash.com/random/208x200" alt="" />

            
        </section>

        <footer>
            <p>Cherry &copy;2020</p>
        </footer>

    </div>
        </div>
    )
}

export default Home
