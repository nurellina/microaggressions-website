import React, { useState } from "react"
import firebase from "gatsby-plugin-firebase"
import "../styles/homePageStyles/tell-us-styles.css"

const CreatePhrase = props => {
  //store value in react state using useState Hooks
  const [phrase, setPhrase] = useState("")
  const [done, setDone] = useState(false)

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
    props.onChange(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    setDone(true)
    props.onDone(true)
  }
  return (
    <div className="create-phrase">
      {!done && (
        <div className="center-block">
          <h2>
            {" "}
            What is the most important sentence/act that comes to your mind?
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                autoComplete="off"
                placeholder='Type it here e.g. "Where are you really from?" '
                name="phrase"
                phrase={props.phrase}
                onChange={handleChange}
              />
            </div>

            <button
              className="pure-material-button-outlined"
              onClick={addPhrase}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default CreatePhrase
