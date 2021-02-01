import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import Visualization from "./home-page/visualization"

function ShowPhrases() {
  const [phrases, setPhrases] = useState([])
  //get phrases from the databse
  useEffect(() => {
    firebase
      .firestore()
      .collection("phrases")
      .onSnapshot(snapshot => {
        const phrases = snapshot.docs.map(doc => doc.data().phrase)
        setPhrases(phrases)
      })
  })

  return (
    <div>
      <Visualization phrases={phrases} />
    </div>
  )
}

export default ShowPhrases
