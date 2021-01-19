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
        console.log(phrases)
        // [ { id: 'glMeZvPpTN1Ah31sKcnj', phrase: 'Can I touch your hair' } ]
        setPhrases(phrases)
      })
  })

  const phrasesArray = []
  phrasesArray.push(
    "You are so exotic!",
    "You're transgender? \n Wow, you don't \n look like it at all.",
    "Where are you from?",
    "You are so articulate.",
    "I believe the most \nqualified person should \nget the job."
  )
  //   console.log(phrasesArray)

  return (
    <div>
      <Visualization phrases={phrasesArray} />
    </div>
    // <ListsDiv>
    //   {/*list all the items*/}
    //   {/* {phrases.map(item => {
    //     return (
    //       <ListItemDiv>
    //         <ListTitleDiv>{item.phrase}</ListTitleDiv>
    //         <ListItemDeleteButton onClick={() => handleOnDelete(item.id)} />
    //       </ListItemDiv>
    //     )
    //   })} */}
    // </ListsDiv>
  )
}

export default ShowPhrases
