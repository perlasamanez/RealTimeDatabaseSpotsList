import React, { Component } from 'react';
import StudySpotForm from '../ui/StudySpotForm'

export default class StudySpotFormScreen extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam('studySpot') ? 'Modify Device' : 'Register a New Device'
        }
    };

    state = {
        studySpot : {
            Name: '',
            DeviceId: '',
            BuildingName: '',
            Floor: '',
            SpotType: '',
            Capacity: '',
            Outlets: '',
            DesktopAvail: ''
        },
    }

    componentDidMount (){
        const currentStudySpot = this.props.navigation.getParam('studySpot');
        console.log(currentStudySpot);

        if(currentStudySpot){
            this.setState(prevState => ({studySpot: prevState.studySpot = currentStudySpot}))
        }
    }

    onStudySpotUpdate = (studySpot) => {
        //console.log(studySpot);
        this.props.navigation.popToTop();
    }
    
    render() {
        return (
           <StudySpotForm 
                studySpot={this.state.studySpot}
                onStudyAdded={this.props.navigation.getParam('studySpotAddedCallback')}
                onStudySpotUpdate={this.onStudySpotUpdate}
           />
        );
    }
}
