import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import Visualization from "../components/home-page/visualization"

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

  return (
    <div>
      <Visualization phrases={phrases} />
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
