import React from "react";
import './aboutme.css'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Aboutme = () => {
return (
    <div>

        <div className="root">
            <div className="container1">   
            </div>
            <div className="container2">
                <div className="c2">
                    Hello
                </div>
                <h3 className="c22">Here's is who I am & what I do</h3>
                <p className="c23">
                    I’ve always had a passion for technology, which led me to my degree in computer science from Graphic Era Hill University (Dehradun).<br/> Throughout my academic career, I have developed a diverse skill set, including technical skills like C++, JavaScript, Python, Java, SQL, Git, Data Structure and Algorithms and OOPs.<br/>
                    In addition to my technical proficiency, I pride myself on my soft skills, including adaptability, motivation, collaboration, leadership and public speaking. As I continue to pursue my degree, I look forward to utilizing my skills and creativity to solve complex challenges and create impactful solutions for clients.

                </p>


            </div>
        </div>

        <div className="container11">
            <div className="pic">     
            </div>
            <div className="n">&nbsp;Anurag <br/>Agarwal</div>
            <div className="s">Computer Science Student</div>
            <div className="m"><p  style={{position: 'relative',top: '-12px',left:'-8px',display:'flex', textDecoration:'None' ,color:''}}>
                <a href="https://www.linkedin.com/in/anurag-agarwal188/"><LinkedInIcon/></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com/albatross1649/"><InstagramIcon/></a>&nbsp;&nbsp;&nbsp;
                <a href="https://github.com/Anurag188"><GitHubIcon/></a>
                </p></div>
        </div>

    </div>

   
)
}

export default Aboutme

