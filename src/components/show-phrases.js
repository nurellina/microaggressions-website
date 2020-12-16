import React, { useState, useEffect } from "react"
import styled from "styled-components"
import firebase from "gatsby-plugin-firebase"

const ListsDiv = styled.div`
  width: 60%;
  height: 100%;
  background: #f4f4;
  margin: 30px auto;
  padding: 20px;
`
const ListItemDiv = styled.div`
  border-radius: 5px;
  position: relative;
`
const ListTitleDiv = styled.div`
  font-size: 24px;
  color: black;
  font-weight: bold;
  margin: 3px;
`
const ListItemDeleteButton = styled.button`
  border-radius: 5px;
  background: blue;
  color: white;
  position: absolute;
  width: 15px;
  height: 15px;
  top: 5px;
  right: 10px;
  outline: none;
`
//custom Hook
function usePhrases() {
  const [phrases, setPhrases] = useState([])
  //get phrases from the databse
  useEffect(() => {
    firebase
      .firestore()
      .collection("phrases")
      .onSnapshot(snapshot => {
        const phrases = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        console.log(phrases)
        // [ { id: 'glMeZvPpTN1Ah31sKcnj', phrase: 'Can I touch your hair' } ]
        setPhrases(phrases)
      })
  }, [])

  return phrases
}

const ShowPhrases = () => {
  const phrases = usePhrases()
  //delete doc with the selected id from collection
  const handleOnDelete = id => {
    firebase.firestore().collection("phrases").doc(id).delete()
  }

  return (
    <ListsDiv>
      {/*list all the items*/}
      {phrases.map(item => {
        return (
          <ListItemDiv>
            <ListTitleDiv>{item.phrase}</ListTitleDiv>
            <ListItemDeleteButton onClick={() => handleOnDelete(item.id)} />
          </ListItemDiv>
        )
      })}
    </ListsDiv>
  )
}

export default ShowPhrases
