import React from 'react'
import { Particles } from 'react-particles-js'
import './components.styles.css';

function ParticlesComponent(props) {
    console.log("ParticlesComponent");
    return (
        <div>
            <Particles className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 300
                        },
                        "size": {
                            "value": 4
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"

                            }
                        }
                    }
                }
                }
                width= "1800px"
            height="220vh"
            />
        </div>
    )
}

export default React.memo(ParticlesComponent)
