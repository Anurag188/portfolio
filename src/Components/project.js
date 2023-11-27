import React from "react";
import './project.css';


const Project = () => {
return (
    <div className="rc">
        <div className="rc1">Projects</div>
        <div className="rc10" style={{fontSize:'17px',fontWeight:'500',top:'170px',left:'385px'}}>I have worked on multiple mini and major projects throughout my academics, learning and implementing new technologies.This portfolio itself is one of my project that showcases my front-end react skills. My experience and dedication have led me to develop a range of skills and expertise, which I showcase in my projects. Check out my work below to see what I've been up to!</div>
        
        <div className="rc2">
            <div  style={{lineHeight:'1.7'}} className="rc21">
                <span style={{fontSize:'20px',fontWeight:'bold'}}>Real Time Chat Application</span><br/>Using Node.js and Socket.io <br/><br/>I have experience creating chat applications. Using Node.js and Socket.io, I have built an application that allows clients to send messages images, and videos in real-time. The application includes features such as online/offline status, typing indicator, and message notifications making it user-friendly and interactive.
            </div>
            <div className="pp1">     
            </div>
        </div>
        <div style={{top:'840px' , height:'500px'}} className="rc2">
            <div  style={{lineHeight:'1.7'}} className="rc21">
                <span style={{fontSize:'20px',fontWeight:'bold'}}>Student Management Portal</span><br/>Using Servlet and JSP<br/><br/>Building robust, user-friendly software is what drives me, and the Student Management Portal is a testament to that passion. With its MVC architecture and wealth of features, it provides an ideal solution for schools and universities looking to streamline their student management processes. The admin can easily access and update students’ academic performance records, while students can view their details and progress without any hassle.
            </div>
            <div className="pp2">     
            </div>
        </div>
        <div  style={{top:'1400px' ,height:'500px'}} className="rc2">
            <div  style={{lineHeight:'1.7'}} className="rc21">
                <span style={{fontSize:'20px',fontWeight:'bold'}}>Credit Card Fraud Detection</span><br/>Using Python<br/><br/>Are you having trouble identifying fraudulent transactions? Using my skills in software development, I created a machine learning model that uses transaction features to alert you to potential fraud. I have experience in using the latest technologies to make sure that the system is trained to achieve a high level of accuracy in identifying any risks. The linear regression algorithm that I use ensures that the model is constantly learning and improving.
            </div>
            <div className="pp3">     
            </div>
        </div>


    </div>
)
}

export default Project