/*import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/firestore';// needed*/

import { db } from '../config';
//import { forModalPresentationIOS } from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators';

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

    // Created at can be done here
    // studySpot.createdAt = firebase.firestore.FieldValue.serverTimestamp();

    /*
    db.ref('/studySpots/' + studySpot.DeviceId).set(studySpot
        /*Name: studySpot.name,
        //color: studySpot.color,
        DeviceId: studySpot.deviceId,
        BuildingName: studySpot.building,
        Floor: studySpot.floor,
        SpotType: studySpot.type,
        Capacity: studySpot.capacity,
        Outlets: studySpot.outlets,
        DesktopAvail: studySpot.desktop//
    ).then((snapshot) => snapshot.get()
    ).then((studySpotData) => addComplete(studySpotData.data())) // To know when your data is actual completed in the app, for the pop up saying it was added for example
    .catch((error) => console.log(error));*/

    let studySpotsRef = db.ref("studySpots");

    studySpotsRef.child(studySpot.DeviceId).set(studySpot
    ).then((snapshot) => snapshot.get()
    ).then((studySpotData) => addComplete(studySpotData.data())) // To know when your data is actual completed in the app, for the pop up saying it was added for example
    .catch((error) => console.log(error));
}
// async being used here!
export async function getStudySpots(studySpotsRetreived){

    let itemsRef = db.ref('/studySpots');
    
    itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        let studySpotsList = Object.values(data);
        studySpotsRetreived(studySpotsList);
    }); 
} 
// Use for demo to update only the status when clicking the button of the study spot!
export function updateStudySpotStatus(){

    db.ref('/studySpots/0001').update({
            Status: 2,
    });
}

export function updateStudySpotKeyCode(KeyCode){

    db.ref('/studySpots/0001').update({
            KeyCode: KeyCode,
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

export function updateStudySpot(studySpot, updateComplete){
    // To update a study spot's information from admin side

    let studySpotsRef = db.ref("studySpots");

    studySpotsRef.child(studySpot.DeviceId)
    .set(studySpot)
    .then(() => updateComplete(studySpot))
    .catch((error) => console.log(error));
}

export function deleteStudySpot(studySpot, deleteComplete){

}

