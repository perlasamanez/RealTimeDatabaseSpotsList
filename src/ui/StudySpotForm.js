import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    //Button
} from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';
import {withFormik} from 'formik';
import * as yup from 'yup';
import { addStudySpot, updateStudySpot } from '../api/StudySpotsApi';

const StudySpotForm = (props) =>{
    console.log(props);
    return (
        <View style={styles.container}>
                <TextInput
                    value={props.values.Name}
                    style={styles.longFormInput}
                    onChangeText={text => {props.setFieldValue('Name', text)}}
                    placeholder='Name'
                />
                    <Text style={styles.validationText}> {props.errors.Name}</Text>
                <TextInput
                    value={props.values.DeviceId}
                    style={styles.longFormInput}
                    onChangeText={text => {props.setFieldValue('DeviceId', text)}}
                    placeholder='Device ID'
                />
                    <Text style={styles.validationText}> {props.errors.DeviceId}</Text>
                <TextInput
                    value={props.values.BuildingName}
                    style={styles.longFormInput}
                    onChangeText={text => {props.setFieldValue('BuildingName', text)}}
                    placeholder='Building Name'
                />
                    <Text style={styles.validationText}> {props.errors.BuildingName}</Text>
                <TextInput
                    value={props.values.Floor}
                    style={styles.longFormInput}
                    onChangeText={text => {props.setFieldValue('Floor', text)}}
                    placeholder='Floor Number'
                />
                    <Text style={styles.validationText}> {props.errors.Floor}</Text>
                <TextInput
                    value={props.values.SpotType}
                    style={styles.longFormInput}
                    onChangeText={text => {props.setFieldValue('SpotType', text)}}
                    placeholder='Individual or Group'
                />
                    <Text style={styles.validationText}> {props.errors.SpotType}</Text>
                <TextInput
                    value={props.values.Capacity}
                    style={styles.longFormInput}
                    onChangeText={text => {props.setFieldValue('Capacity', text)}}
                    placeholder='Capacity'
                />
                    <Text style={styles.validationText}> {props.errors.Capacity}</Text>
                <TextInput
                    value={props.values.Outlets}
                    style={styles.longFormInput}
                    onChangeText={text => {props.setFieldValue('Outlets', text)}}
                    placeholder='Number of Outlets'
                />
                    <Text style={styles.validationText}> {props.errors.Outlets}</Text>
                <TextInput
                    value={props.values.DesktopAvail}
                    style={styles.longFormInput}
                    onChangeText={text => {props.setFieldValue('DesktopAvail', text)}}
                    placeholder='Desktop Available'
                />
                    <Text style={styles.validationText}> {props.errors.DesktopAvail}</Text>
                <ThemeProvider theme={theme}>
                    <Button
                        title='Submit'
                        onPress={() => props.handleSubmit()}
                />
                </ThemeProvider>
    </View>
    );
}

const theme = {
    colors: {
        primary: '#667ABF'
    },
    Button: {
      raised: true,
      titleStyle: {
        color: 'white',
      },
      buttonStyle: {
        width: 281,
        height: 44,
        borderRadius: 30,
        alignSelf: 'center',
        position: 'absolute',
        top: 30
      },
    },
  };

const styles = StyleSheet.create({
    row:{
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32
    },
    container: {
        width: 300,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 32,
    },
    validationText:{
        color: 'red'
    },
    formInput: {
        borderColor: '#B5B4BC',
        borderWidth: 1,
        padding: 8,
        height: 50,
        width: '75%',
    },
    longFormInput: {
        width: '100%',
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        fontSize: 17,
        padding: 8,
        height: 50,
        margin: 1,
    }
});

export default withFormik({
    mapPropsToValues: ({ studySpot }) => ({ Name: studySpot.Name, DeviceId: studySpot.DeviceId, BuildingName: studySpot.BuildingName, Floor: studySpot.Floor, SpotType: studySpot.SpotType, Capacity: studySpot.Capacity, Outlets: studySpot.Outlets, DesktopAvail: studySpot.DesktopAvail, Valid: 0, Status: 1, KeyCode: 0 }),
    enableReinitialize: true,
    validationSchema: (props) => yup.object().shape({
        Name: yup.string().max(50).required(),
        DeviceId: yup.string().max(30).required(),
        BuildingName: yup.string().max(50).required(),
        Floor: yup.string().max(30).required(),
        SpotType: yup.string().max(30).required(),
        Capacity: yup.string().max(50).required(),
        Outlets: yup.string().max(15).required(),
        DesktopAvail: yup.string().max(15).required(),
    }),
    handleSubmit: (values, {props}) => {

        if(props.studySpot.DeviceId != ''){
            updateStudySpot(values, props.onStudySpotAdded);
        }else{
            addStudySpot(values, props.onStudySpotAdded);
        }
    },
})(StudySpotForm);