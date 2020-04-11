import React from 'react'
import ReactDOM from 'react-dom'
import insta from '../insta.png'
import twt from '../twt.jpeg'
import fb from '../fb.jpeg'
import './components.styles.css'
import HeadingComponent from './HeadingComponent'

function AboutUsComponent() {
    return ReactDOM.createPortal(
        <>

            <HeadingComponent name="About Us- DT Team" />
            <div className="aboutus">
                <div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <p><big><a href="https://mail.google.com/mail/">club-email-id:webdevclub@rvce.edu.in</a></big></p>
                    <p><big><a href="https://mail.google.com/mail/">Nachiket-email:nachiketgk.cs18@rvce.edu.in</a></big></p>
                    <p><big><a href="https://mail.google.com/mail/">Vishal-email: vishalm.cs18@rvce.edu.in</a></big></p>
                    <p><big><a href="https://mail.google.com/mail/">Pavan-email: pavankumarvb.cs18@rvce.edu.in</a></big></p>
                    <p><big><a href="https://mail.google.com/mail/">Shivangi-email: daveshivangid.cs17@rvce.edu.in</a></big></p>
                </div>
                <div>
                    <p><big>Follow us on social media: </big></p>
                    <a href="https://www.facebook.com/"><img src={fb} height="32" width="32" />        </a>
                    <a href="https://www.instagram.com/"><img src={insta} height="32" width="32" />        </a>
                    <a href="https://www.twitter.com/"><img src={twt} height="32" width="32" />        </a>
                </div>
            </div>
        </>,
        document.getElementById("about-us")
    )
}

export default React.memo(AboutUsComponent)
