import React from "react"
import "./authorForm.css"

const authorForm = (props) => {
  return (
    <div className={props.authorAction ? "block" : "none"}>
      <div className="overlay"></div>
      <div className="authorpopup">
        <span className="esc" onClick={props.escHandle}>X</span>
        <h3>Add a New Author</h3>
        <div className="authorinputholder">
          <input type="text" required className="authorname" placeholder="Author's Name" />
          <button type="submit" className="submitbutton">Submit</button>
        </div>
      </div>
    </div>
  )
}
export default authorForm