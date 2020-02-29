/*import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';
import '@react-native-firebase/firestore';// needed*/

import { db } from '../config';

// studySpot is an object
// call back gets called when the transaction is complete
export function addStudySpot(studySpot, addComplete){

    db.ref('/StudySpots').push({
        name: studySpot.name,
        color: studySpot.color,
    }).then((studySpotData) => addComplete(studySpotData.data())) // To know when your data is actual completed in the app, for the pop up saying it was added for example
    .catch((error) => console.log(error));
}
// async being used here!
export async function getStudySpots(studySpotsRetreived){
    
    //var studySpotsList = [];

    let itemsRef = db.ref('/StudySpots');
    
    itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        let studySpotsList = Object.values(data);
        //this.setState({studySpotsList});
        studySpotsRetreived(studySpotsList);
    });
} 