import React from 'react'
import './components.styles.css'

function HeadingComponent(props) {
    console.log("HeadingComponent");
    return (
        <div>
            <h1 className="head1">{props.name}</h1>
        </div>
    )
}

export default React.memo(HeadingComponent)
