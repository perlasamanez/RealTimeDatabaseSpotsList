import React, {Component} from 'react';
import{
    StyleSheet,
    View,
    FlatList,
    SafeAreaView,
    Text,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import { addStudySpot, getStudySpots, updateStudySpotStatus } from '../api/StudySpotsApi';

const numColumns = 2

export default class StudySpotsList extends Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'List of Study Spots',
        }
    };

    state = {
        studySpotList: [],
        currentSpotItem: null,
    }

    onStudySpotAdded = (studySpot) => {
        console.log("Study Spot Device Added!");
        console.log(studySpot);
        this.setState(prevState => ({
            studySpotList: [...prevState.studySpotList, studySpot]
        }));
    }
 
    // Callback to let us know when we receive the study spot list 
    onStudySpotsReceived = (studySpotList) => {
        this.setState(prevState => ({
            studySpotList: prevState.studySpotList = studySpotList
        }));
    }

    componentDidMount(){
        getStudySpots(this.onStudySpotsReceived);
    }


    render(){
        let {container, itemText} = styles
        return (
            <SafeAreaView style={container}>

            <Text style={styles.titleItem}>Current Devices</Text>
                    <FlatList
                        data={this.state.studySpotList}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns = {numColumns}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.itemStyle}  onStartShouldSetResponder={() => {this.props.navigation.navigate('StudySpotDetailScreen', {studySpot: item})}}>
                                    <Text style={styles.itemText}>{item.Name}</Text>
                                    <Text style={styles.itemBuilding}>{item.BuildingName}</Text>
                                    <Text style={styles.itemFloor}>{item.Floor}</Text>
                                </View>
                            );
                        }
                    }
            />

            <ActionButton
                buttonColor='#667ABF'
                onPress={() => this.props.navigation.navigate('StudySpotFormScreen', { studySpotAddedCallback: this.onStudySpotAdded })}
            />
            
            </SafeAreaView> 
        );
    }
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        paddingTop: 40
    },
    itemStyle:{
        backgroundColor: 'rgba(196, 196, 196, 0.32)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 170,
        width: 170,
        flex: 1,
        margin:10,
        borderRadius: 20
    },
    itemText:{
        color: '#000000',
        fontSize: 23,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10
    },
    titleItem:{
        color: '#000000',
        fontSize: 25,
        textAlign: 'center',
        margin: 18
    },
    itemBuilding:{
        color: '#000000',
        fontSize: 22,
        fontWeight: '300',
        marginBottom: 10
    },
    itemFloor:{
        color: '#000000',
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 10
    },
    row: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    button: {
      fontSize: 19,
      fontWeight: 'bold',
    },
    itemInvesible:{
        backgroundColor: 'transparent'
    },
    input: {
      color: 'red',
    },
  });
