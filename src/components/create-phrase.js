import React, { useState } from "react"
import styled from "styled-components"
import firebase from "gatsby-plugin-firebase"

//styles components
const AddPhraseDiv = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  margin: 30px auto;
  padding: 5px;
`

const InputBody = styled.input`
  padding: 0.5em;
  border: none;
  background: #f4f4;
  margin-bottom: 10px;
  border-radius: 3px;
`

const Button = styled.div`
  background: blue;
  color: white;
  font-size: 1em;
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;
`
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
    <AddPhraseDiv>
      <InputBody name="phrase" value={phrase} onChange={handleChange} />
      <Button onClick={addPhrase}>Send</Button>
    </AddPhraseDiv>
  )
}

export default CreatePhrase
