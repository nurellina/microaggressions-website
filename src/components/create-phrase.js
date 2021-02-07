import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"

const CreatePhrase = () => {
  //store value in react state using useState Hooks
  const [phrase, setPhrase] = useState("")

  //post state values to firebase database
  const addPhrase = () => {
    firebase.firestore().collection("phrases").add({
      phrase,
    })
    setPhrase("")
  }
  //update state with input value
  const handleChange = e => {
    setPhrase(e.target.value)
  }
  return (
    <div className="create-phrase">
      <div className="input-group">
        <input
          autoComplete="off"
          placeholder="Type it here..."
          name="phrase"
          value={phrase}
          onChange={handleChange}
        />
      </div>
      <button className="pure-material-button-outlined" onClick={addPhrase}>
        Send
      </button>
    </div>
  )
}

export default CreatePhrase
