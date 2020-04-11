import React, { Component } from 'react';
import StudySpotForm from '../ui/StudySpotForm'

export default class StudySpotFormScreen extends Component {

    static navigationOptions = ({navigation}) => {
        //console.log(navigation);
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
        
        /*studyName: null,
        studydeviceId: null,
        studybuilding: null,
        studyfloor: null,
        studytype: null,
        studycapacity: null,
        studyoutlets: null,
        studydesktop: null*/
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

    /*
    setStudyName = (text) => {
        this.setState(prevState => ({
            studyName: prevState.studyName = text
        }))
    }

    setStudyDeviceID = (text) => {
        this.setState(prevState => ({
            studydeviceId: prevState.studydeviceId = text
        }))
    }

    setStudyBuilding = (text) => {
        this.setState(prevState => ({
            studybuilding: prevState.studybuilding = text
        }))
    }

    setStudyFloor = (text) => {
        this.setState(prevState => ({
            studyfloor: prevState.studyfloor = text
        }))
    }

    setStudyType = (text) => {
        this.setState(prevState => ({
            studytype: prevState.studytype = text
        }))
    }

    setStudyCapacity = (text) => {
        this.setState(prevState => ({
            studycapacity: prevState.studycapacity = text
        }))
    }

    setStudyOutlets = (text) => {
        this.setState(prevState => ({
            studyoutlets: prevState.studyoutlets = text
        }))
    }

    setStudyDesktop = (text) => {
        this.setState(prevState => ({
            studydesktop: prevState.studydesktop = text
        }))
    }*/
    
    

    render() {
        // .log(this.state);
        return (
           <StudySpotForm 
                /*setStudyName={this.setStudyName}
                setStudyDeviceID={this.setStudyDeviceID}
                setStudyBuilding={this.setStudyBuilding}
                setStudyFloor={this.setStudyFloor}
                setStudyType={this.setStudyType}
                setStudyCapacity={this.setStudyCapacity}
                setStudyOutlets={this.setStudyOutlets}
                setStudyDesktop={this.setStudyDesktop}*/
                studySpot={this.state.studySpot}
                onStudyAdded={this.props.navigation.getParam('studySpotAddedCallback')}
                onStudySpotUpdate={this.onStudySpotUpdate}
           />
        );
    }
}
