/*import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/firestore';// needed*/

import { db } from '../config';

// studySpot is an object
// call back gets called when the transaction is complete
export function addStudySpot(studySpot, addComplete){
// firestore gives us us firestore objects - database
    /*db
    .collection('StudySpots') // the name of the collection holding all the study spots
    .add({
        // assuming the study spots have all the fields types
        //serialNumber: studySpot.serialNumber,
        name: studySpot.name,
        // for testing
        color: studySpot.color,
        //spotType: studySpot.spotType,
        //capacity: studySpot.capacity,
        //outlets: studySpot.outlets,
        //desktopComputer: studySpot.desktopComputer,
        //status: studySpot.status,
        //validToUse: studySpot.validToUse
        //createdAt: firebase.firestore.FieldValue.serverTimestamp() // For when to know it got entered
    }).then((snapshot) => snapshot.get()
    ).then((studySpotData) => addComplete(studySpotData.data())) // To know when your data is actual completed in the app, for the pop up saying it was added for example
    .catch((error) => console.log(error));*/

    db.ref('/studySpots').push({
        name: studySpot.name,
        //color: studySpot.color,
        KeyCode: studySpot.KeyCode,
        Status: studySpot.Status,
    }).then((snapshot) => snapshot.get()
    ).then((studySpotData) => addComplete(studySpotData.data())) // To know when your data is actual completed in the app, for the pop up saying it was added for example
    .catch((error) => console.log(error));
}
// async being used here!
export async function getStudySpots(studySpotsRetreived){
    
    //var studySpotsList = [];

    let itemsRef = db.ref('/studySpots');
    
    itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        let studySpotsList = Object.values(data);
        //this.setState({studySpotsList});
        studySpotsRetreived(studySpotsList);
    });
} 
// Use for demo to update only the status when clicking the button of the study spot!
export function updateStudySpotStatus(){

    db.ref('/studySpots/0001').update({
            Status: 2,
    });
}

/*export function searchID(){
   
    db.ref('/studySpots/').orderByChild('idValue')
    .equalTo(req.body.email)
    .once('value')
    .then(function (snapshot) {
      var value = snapshot.val();
      if (value) {
        // value is an object containing one or more of the users that matched your email query
        // choose a user and do something with it
      } else {
        res.status(401)
          .json({
            error: 'No user found',
          )};
      }
    });

}*/

export function updateStudySpot(studySpot){
    // To update a study spot's information from admin side
}

export function findStudySpotID(){
    // To update a study spot's information from admin side

}

export function deleteStudySpot(studySpot, deleteComplete){

}
