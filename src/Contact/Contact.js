import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'




const Contact = () => {
    return (
        <div id="contact-page">

            <div id="bryant">
                <h4>BRYANT CABRERA</h4>
                <div><a href="https://github.com/BryantCabrera"><img class="github-logo" src="../../github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/bryantcabrera/"><img class="linkedin-logo" src="../../linkedin-logo.png"></img></a></div><br></br>
                <div>email</div>
            </div>
            <div id="kevin">
                <h4>KEVIN CUISON</h4>
                <div><a href="https://github.com/kv-n"><img class="github-logo" src="../../github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/kevincuison/"><img class="linkedin-logo" src="../../linkedin-logo.png"></img></a></div><br></br>
                <div>email</div>
            </div>
            <div id="ummer">
                <h4>UMMER KHAN</h4>
                <div><a href="https://github.com/khanummer"><img class="github-logo" src="../../github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/khanummer/"><img class="linkedin-logo" src="../../linkedin-logo.png"></img></a></div><br></br>
                <div>UMMERNKHAN@GMAIL.COM</div>
            </div>
            <div id="peter">
                <h4>PETER FEINMAN</h4>
                <div><a href="https://github.com/pfeinman"><img class="github-logo" src="../../github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/pfeinman/"><img class="linkedin-logo" src="../../linkedin-logo.png"></img></a></div><br></br>
                <div>email</div>
            </div>   

        </div>
    )
}

export default Contact