import React, {Component} from 'react';
import{
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    SafeAreaView,
    Text,
    Dimensions,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import { addStudySpot, getStudySpots, updateStudySpotStatus } from '../api/StudySpotsApi';
import { ListItem, Divider } from 'react-native-elements';

const numColumns = 2
const WIDTH = Dimensions.get('window').width

export default class StudySpotsList extends Component {

    static navigationOptions = ({navigation}) => {
        //console.log(navigation);
        return {
            title: 'List of Study Spots',
        }
    };

    state = {
        studySpotList: [],
        currentSpotItem: null,
    }

    onStudySpotAdded = (studySpot) => {
        //console.log("Study Spot Device Added!");
        //console.log(studySpot);
        this.setState(prevState => ({
            studySpotList: [...prevState.studySpotList, studySpot]
        }));
    }
 
    // callback to let us know when we receive the study spot list 
    onStudySpotsReceived = (studySpotList) => {
        //console.log(studySpotList);
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
        //height: WIDTH/numColumns,
        borderRadius: 20
    },
    
    itemText:{
        color: '#000000',
        fontSize: 23,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10
    },

    /**
     * color: '#000000',
      fontSize: 25,
      textAlign: 'center',
      marginTop: 18,
      marginBottom: 10,
      fontWeight: '500'
     */

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
