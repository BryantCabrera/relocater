import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'




const Contact = () => {
    return (
        <div id="contact-page">

            <div id="bryant">
                <h4>BRYANT CABRERA</h4>
                <div><a href="https://github.com/BryantCabrera"><img className="github-logo" src="../../imgs/github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/bryantcabrera/"><img class="linkedin-logo" src="../../imgs/linkedin-logo.png"></img></a></div><br></br>
                <div className="mail-tag"><a className="mail-tag" href="mailto:cabrera.bryant@gmail.com">cabrera.bryant@gmail.com</a></div>
            </div>
            <div id="kevin">
                <h4>KEVIN CUISON</h4>
                <div><a href="https://github.com/kv-n"><img className="github-logo" src="../../imgs/github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/kevincuison/"><img class="linkedin-logo" src="../../imgs/linkedin-logo.png"></img></a></div><br></br>
                <div className="mail-tag"><a className="mail-tag" href="mailto:k.cyson@gmail.com">k.cyson@gmail.com</a></div>
            </div>
            <div id="ummer">
                <h4>UMMER KHAN</h4>
                <div><a href="https://github.com/khanummer"><img className="github-logo" src="../../imgs/github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/khanummer/"><img class="linkedin-logo" src="../../imgs/linkedin-logo.png"></img></a></div><br></br>
                <div className="mail-tag"><a className="mail-tag" href="mailto:ummernkhan@gmail.com">ummernkhan@gmail.com</a></div>
            </div>
            <div id="peter">
                <h4>PETER FEINMAN</h4>
                <div><a href="https://github.com/pfeinman"><img className="github-logo" src="../../imgs/github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/pfeinman/"><img class="linkedin-logo" src="../../imgs/linkedin-logo.png"></img></a></div><br></br>
                <div className="mail-tag"><a className="mail-tag" href="mailto:peter.feinman@gmail.com">peter.feinman@gmail.com</a></div>
            </div>   

        </div>
    )
}

export default Contact