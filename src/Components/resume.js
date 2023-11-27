import React from "react";
import './resume.css'

//import { Computer } from "@material-ui/icons";

const Resume = () => {
return (
    <div className="root2">

        <div className="b1">Education</div>

        <div className="cv"><a href="./resume.pdf" download="Resume.pdf">&nbsp;Download CV</a></div>
        
        <div className="b2">
            <div style={{lineHeight: '1.8'}} className="b21">
                <span style={{fontWeight: "bold"}}>2020-Present</span><br/> <span  style={{fontWeight: "bold",fontSize: "17px"}}>Graphic Era Hill University<br/> </span><span  style={{fontSize: "15px"}}>Bachelor of Technology<br/> Dehradun, Uttarakhand</span>
            </div>
            <div style={{lineHeight: '1.8'}} className="b22">
            My name is Anurag Agarwal, and I am currently pursuing my Bachelor's degree from Graphic Era Hill University in Computer Science. The program has provided me with a wide range of knowledge and practical skills in the field of IT, as well as a deep understanding of the industry as a whole. At Graphic Era Hill University, I have been able to expand my horizons and evolve both creatively and intellectually.
            </div>
        </div>

        <div style={{top:'640px'}} className="b1">
            Professional Skillset
        </div>
        <div  style={{top:'710px'}} className="b2">
            <div className="b21" style={{fontSize:'17px',lineHeight:'70px',wordSpacing:'5px' , paddingTop:'60px', width:'700px'}}>Software Development &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Innovative Thinking<br/> Web Development  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Teamwork & Collaboration<br/> Machine Learning &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Compelling Presentation<br/>Database Management&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data structures & Algorithms</div>
        </div>


    </div>
)
}

export default Resume
