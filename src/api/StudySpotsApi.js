import { db } from '../config';

/*
 * FOR ADMIN PURPOSES 
 */
export function addStudySpot(studySpot, addComplete){

    let studySpotsRef = db.ref("studySpots");

    studySpotsRef.child(studySpot.DeviceId).set(studySpot
    ).then((snapshot) => snapshot.get()
    ).then((studySpotData) => addComplete(studySpotData.data()))
    .catch((error) => console.log(error));
}

/*
 * FOR USER AND ADMIN PURPOSES
 */
export async function getStudySpots(studySpotsRetreived){

    let itemsRef = db.ref('/studySpots');
    
    itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        let studySpotsList = Object.values(data);
        studySpotsRetreived(studySpotsList);
    }); 
} 

/*
 * DEMO PURPOSES: MID-DEMO
 */

// Use for demo to update only the status of 0001 when clicking the button of "reserve"
export function updateStudySpotStatus(){

    db.ref('/studySpots/0001').update({
            Status: 2,
    });
}

// Keycode
export function updateStudySpotKeyCode(KeyCode){

    db.ref('/studySpots/0001').update({
            KeyCode: KeyCode,
    });
}

// Status back to 1 - Release
export function updateStudySpotStatus(){

    db.ref('/studySpots/0001').update({
            Status: 1,
    });
}

/*
 * DEMO PURPOSES: FINAL - REAL VERSION 
 */

 // It should work with any device, not only 0001 anymore
 // Reserve spot - Change Status To 2
export function reserveStudySpot(){

    let studySpotsRef = db.ref("studySpots");

    studySpotsRef.child(studySpot.DeviceId).update({
            Status: 2,
    }).then((snapshot) => snapshot.get()
    ).then((studySpotData) => addComplete(studySpotData.data()))
    .catch((error) => console.log(error));
}

 // It should work with any device, not only 0001 anymore
 // Release spot - Change Status To 1
 export function releaseStudySpot(){

    let studySpotsRef = db.ref("studySpots");

    studySpotsRef.child(studySpot.DeviceId).update({
            Status: 1,
    }).then((snapshot) => snapshot.get()
    ).then((studySpotData) => addComplete(studySpotData.data()))
    .catch((error) => console.log(error));
}

 // It should work with any device, not only 0001 anymore
 // Change KeyCode
 export function changeKeyCode(KeyCode){

    let studySpotsRef = db.ref("studySpots");

    studySpotsRef.child(studySpot.DeviceId).update({
            KeyCode: KeyCode,
    }).then((snapshot) => snapshot.get()
    ).then((studySpotData) => addComplete(studySpotData.data()))
    .catch((error) => console.log(error));
}

// To update a study spot's information from admin side 
export function updateStudySpot(studySpot, updateComplete){

    let studySpotsRef = db.ref("studySpots");

    studySpotsRef.child(studySpot.DeviceId)
    .set(studySpot)
    .then(() => updateComplete(studySpot))
    .catch((error) => console.log(error));
}

