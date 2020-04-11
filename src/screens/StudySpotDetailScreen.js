import React, { Component } from 'react';
import {
    StyleSheet,
    Button,
    FlatList,
    SafeAreaView,
    Text,
    View,
  } from 'react-native';

class StudySpotDetailScreen extends Component {

    static navigationOptions = ({navigation}) => {
        //console.log(navigation);
        return {
            title: 'Study Spot Details',
            headerRight: (
                <Button 
                    onPress={() => {navigation.navigate('StudySpotFormScreen', { studySpot: navigation.getParam('studySpot') })}}
                    title="Edit"
                />
            )
        }
    };

    render(){

        const studySpot = this.props.navigation.getParam('studySpot');

       // console.log(studySpot);

        return(
            <View style={styles.container}>
                <Text style={styles.titleItem}>Device Information</Text>
                <View style={styles.lineStyle} />
              <View style={styles.containerLeft}>
                  <Text style={styles.categoryTextBeginner}>Device Name: <Text style={styles.categoryText}>{studySpot.Name}</Text></Text>
                  <Text style={styles.categoryTextBold}>Device ID: <Text style={styles.categoryText}>{studySpot.DeviceId}</Text></Text>
                  <Text style={styles.categoryTextBold}>Building: <Text style={styles.categoryText}>{studySpot.BuildingName}</Text></Text>
                  <Text style={styles.categoryTextBold}>Floor: <Text style={styles.categoryText}>{studySpot.Floor}</Text></Text>
                  <Text style={styles.categoryTextBold}>Spot Type: <Text style={styles.categoryText}>{studySpot.SpotType}</Text></Text>
                  <Text style={styles.categoryTextBold}>Capacity of Spot: <Text style={styles.categoryText}>{studySpot.Capacity}</Text></Text>
                  <Text style={styles.categoryTextBold}>Number of Outlets: <Text style={styles.categoryText}>{studySpot.Outlets}</Text></Text>
                  <Text style={styles.categoryTextBold}>Desktop Available: <Text style={styles.categoryText}>{studySpot.DesktopAvail}</Text></Text>
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerText: {
      fontSize: 32,
      marginBottom: 32
    },
    image: {
      width: '100%',
      aspectRatio: 2,
      marginBottom: 16
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 16,
      marginBottom: 16,
      paddingLeft: 16,
      paddingRight: 16
    },
    categoryText: {
      fontSize: 20,
      fontWeight: 'normal'
    },
    categoryTextBold: {
      fontSize: 20,
      marginBottom: 30,
      fontWeight: 'bold'
    },
    categoryTextBeginner:{
      fontSize: 20,
      marginTop: 20,
      marginBottom: 30,
      fontWeight: 'bold'
    },
    containerLeft:{
      alignItems: "flex-start"
    },
    container: {
      alignItems: 'center'
    },
    listContainer: {
      borderWidth: 0.5,
      width: 200,
      borderColor: 'grey'
    },
    lineStyle:{
      backgroundColor: '#667ABF',
      height: 2,
      width: 350,
      margin: 10
    },
    titleItem:{
      color: '#000000',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 18,
      marginBottom: 10,
      fontWeight: '500'
  },
  });

  export default StudySpotDetailScreen