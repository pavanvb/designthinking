import React from 'react'
import './components.styles.css'
import { FaReact, FaNode, FaNpm } from 'react-icons/fa'

function IconComponent() {
    return (
        <>
            <a href="https://reactjs.org/docs/getting-started.html"><FaReact className="fareact" color="purple" size="10rem" /></a>
            <a href="https://nodejs.org/api/documentation.html"><FaNode className="fanode" color="purple" size="10rem" /></a>
            <a href="https://docs.npmjs.com/"><FaNpm className="fanpm" color="purple" size="10rem" /></a>
        </>
    )
}

export default React.memo(IconComponent)
