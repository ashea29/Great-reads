import React from "react"

const BookForm = () => {
  return (
    <div>
      <div className="overlay"></div>
      <div className="popup">
        <input type="text" required className="" />
        <input type="text" required />
        <input type="text" required />
        <textarea type="text" required />
      </div>
    </div>
  )
}
export default BookForm