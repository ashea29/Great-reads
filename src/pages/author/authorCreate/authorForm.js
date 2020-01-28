import React from "react"
import "./authorForm.css"

const authorForm = (props) => {
  return (
    <div className={props.authorAction ? "block" : "none"}>
      <div className="overlay" />
      <div className="authorformpopup">
        <span className="esc" onClick={props.escHandle}>X</span>
        <h3>Add a New Author</h3>

        <input type="text" required className="authorinput" 
        placeholder="Author's Name" 
        onChange ={e=> props.authorInputHandle(e)}
        />
        <button type="submit" className="authorsubmitbutton"
        onClick={props.authorSubmitHandle}
        >Submit</button>

      </div>
    </div>
  )
}
export default authorForm