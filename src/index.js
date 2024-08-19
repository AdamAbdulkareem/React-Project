import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

const header = (
  <header className="header">
    <h1>Front End Technologies</h1>
    <div className="header-content">
    <li><img src="/exercise-01/css-3.svg" alt="" /></li>
    <li><img src="/exercise-01/html-1.svg" alt="" /></li>
    <li><img src="/exercise-01/javascript-1.svg" alt="" /></li>
    <li><img src="/exercise-01/react-2.svg" alt="" /></li>
    </div>
  </header>
)

const rootElement = document.getElementById("root")
ReactDOM.render(header, rootElement)
