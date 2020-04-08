import React from 'react'
import './components.styles.css'

function HeadingComponent(props) {
    return (
        <div>
            <h1 className="head1">{props.name}</h1>
        </div>
    )
}

export default HeadingComponent
