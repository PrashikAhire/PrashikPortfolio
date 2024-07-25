import React from 'react'
import "../index.css"
const GetInTouch = () => {
  return (
    <div className="container1">
        <form>
            <h3>GET IN TOUCH</h3>
            <input type="text" id="name" placeholder='Your Name' required/>
            <input type="email" id="email" placeholder='Email id' required/>
            <input type="text" id="phone" placeholder='Phone no.' required/>
            <textarea name="message" id="message" rows="4">How can we help you?</textarea>
            <button type="submit">Send</button>


        </form>
      
    </div>
  )
}

export default GetInTouch

