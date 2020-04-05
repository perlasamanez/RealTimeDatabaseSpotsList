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

/*
<View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add Study Spot"
                        value={this.state.currentSpotItem}
                        onChangeText={(text) => this.setState(prevState => ({
                            currentSpotItem: prevState.currentSpotItem = text
                        }))
                        } />
                <Button
                    title='Submit'
                    style={styles.button}
                    onPress={() => 
                        addStudySpot(
                            {
                                name: this.state.currentSpotItem,
                                //color: this.colors[Math.floor(Math.random() * this.colors.length)]
                            },
                            this.onStudySpotAdded
                        )
                    }
                />
                </View>


// <ListItem 
                                //     //title={item.name}
                                //     //subtitle={item.color}
                                //     title={item.KeyCode} 
                                //     subtitle={item.Status}
                                //     onPress={() => { updateStudySpotStatus()}}
                                // />
*/

export default class StudySpotsList extends Component {

    colors = [ 'red', 'black', 'blue', 'green', 'orange', 'yellow', 'purple', 'white', 'brown']

    state = {
        studySpotList: [],
        currentSpotItem: null,
    }

    /*

    // This is done so if the number of squares are not even, then it will have an empty field. 
    // Continue on video: https://www.youtube.com/watch?v=kukrkdk30g4 
    // Not recommendable since it would mess up with our database if we push an empty field all the time.

    formatData = (data, numColumns) => {
        const totalRows = Math.floor(data.length / numColumns)
        let totalLastRow = data.length - (totalRows * numColumns)

        while (totalLastRow !== 0 && totalLastRow !== numColumns){
                // To-Do
        }
    }*/

    onStudySpotAdded = (studySpot) => {
        console.log("Study Spot Device Added!");
        console.log(studySpot);
        this.setState(prevState => ({
            studySpotList: [...prevState.studySpotList, studySpot]
        }));
    }
 
    // callback to let us know when we receive the study spot list 
    onStudySpotsReceived = (studySpotList) => {
        console.log(studySpotList);
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

            <Text style={styles.titleItem}>Reserve a Study Spot</Text>
                    <FlatList
                        data={this.state.studySpotList}
                        /*ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }}/>}*/
                        keyExtractor={(item, index) => index.toString()}
                        numColumns = {numColumns}
                        renderItem={({ item }) => {
                            console.log(item);
                            return (
                                <View style={styles.itemStyle}  onStartShouldSetResponder={() => { updateStudySpotStatus()}}>
                                    <Text style={styles.itemText}>{item.Name}</Text>
                                    <Text style={styles.itemBuilding}>{item.BuildingName}</Text>
                                    <Text style={styles.itemFloor}>{item.Floor}</Text>
                                </View>
                            );
                        }
                    }
                    />
                  
            {/* <ActionButton
                buttonColor='blue'
                onPress={() => this.props.navigation.navigate('StudySpotFormScreen')}
            /> */}
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
        fontSize: 20,
    },

    titleItem:{
        color: '#000000',
        fontSize: 25,
        textAlign: 'center',
        margin: 18
    },

    itemBuilding:{
        color: '#000000',
        fontSize: 18,
    },

    itemFloor:{
        color: '#000000',
        fontSize: 13,
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
    input: {
      color: 'red',
    },
  });
