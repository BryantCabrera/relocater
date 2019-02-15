import React from 'react'
import './Contact.css'




const Contact = () => {
    return (
        <div className="contact">

            <div id="bryant">
                <h4>BRYANT CABRERA</h4>
                <div><a href="https://github.com/BryantCabrera"><img className="contact__github-logo" src="../../imgs/github-logo.png" alt="Github Logo" title="Github Logo"></img></a></div>
                <div><a href="https://www.linkedin.com/in/bryantcabrera/"><img className="contact__linkedin-logo" src="../../imgs/linkedin-logo.png" alt="Linkedin Logo" title="Linkedin Logo"></img></a></div><br></br>
                <div className="contact__mail-tag"><a className="contact__mail-tag" href="mailto:cabrera.bryant@gmail.com">cabrera.bryant@gmail.com</a></div>
            </div>
            <div id="kevin">
                <h4>KEVIN CUISON</h4>
                <div><a href="https://github.com/kv-n"><img className="contact__github-logo" src="../../imgs/github-logo.png"></img></a></div>
                <div><a href="https://www.linkedin.com/in/kevincuison/"><img className="contact__linkedin-logo" src="../../imgs/linkedin-logo.png"></img></a></div><br></br>
                <div className="contact__mail-tag"><a className="contact__mail-tag" href="mailto:k.cuison@gmail.com">k.cuison@gmail.com</a></div>
            </div>
            <div id="ummer">
                <h4>UMMER KHAN</h4>
                <div><a href="https://github.com/khanummer"><img className="contact__github-logo" src="../../imgs/github-logo.png"  alt="Github Logo" title="Github Logo"></img></a></div>
                <div><a href="https://www.linkedin.com/in/khanummer/"><img className="contact__linkedin-logo" src="../../imgs/linkedin-logo.png" alt="Linkedin Logo" title="Linkedin Logo"></img></a></div><br></br>
                <div className="contact__mail-tag"><a className="contact__mail-tag" href="mailto:ummernkhan@gmail.com">ummernkhan@gmail.com</a></div>
            </div>
            <div id="peter">
                <h4>PETER FEINMAN</h4>
                <div><a href="https://github.com/pfeinman"><img className="contact__github-logo" src="../../imgs/github-logo.png"  alt="Github Logo" title="Github Logo"></img></a></div>
                <div><a href="https://www.linkedin.com/in/pfeinman/"><img className="contact__linkedin-logo" src="../../imgs/linkedin-logo.png" alt="Linkedin Logo" title="Linkedin Logo"></img></a></div><br></br>
                <div className="contact__mail-tag"><a className="contact__mail-tag" href="mailto:peter.feinman@gmail.com">peter.feinman@gmail.com</a></div>
            </div>   

        </div>
    )
}

export default Contact