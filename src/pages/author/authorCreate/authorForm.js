import React from "react"
import "./authorForm.css"

const authorForm = (props) => {
  const authorFormHeader = props.authorAction === "create" ? "Create a New Author" : "Create a New Author"
  return (
    <div className={props.authorAction ? "block" : "none"}>
      <div className="overlay"></div>
      <div className="authorpopup">
        <span className="esc">X</span>
        <h3>{authorFormHeader}</h3>
        <div className="authorinputholder">
          <input type="text" required className="authorname" placeholder="Author's Name" />
        </div>
      </div>
    </div>
  )
}
export default authorForm