import React, { useState } from "react"
import styled from "styled-components"
import firebase from "gatsby-plugin-firebase"
import "./layout.css"

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
    <div class="input-group">
      <input
        name="phrase"
        placeholder="Type it here..."
        value={phrase}
        onChange={handleChange}
      />
    </div>
  )
}

export default CreatePhrase
