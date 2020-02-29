import React, {Component} from 'react';
import{
    StyleSheet,
    View,
    TextInput,
    Button,
    FlatList,
    SafeAreaView
} from 'react-native';
import { addStudySpot, getStudySpots } from '../api/StudySpotsApi';
import { ListItem, Divider } from 'react-native-elements';

export default class StudySpotsList extends Component {

    colors = [ 'red', 'black', 'blue', 'green', 'orange', 'yellow', 'purple', 'white', 'brown']

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
        return (
            <SafeAreaView>
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
                                color: this.colors[Math.floor(Math.random() * this.colors.length)]
                            },
                            this.onStudySpotAdded
                        )
                    }
                />
                </View>
                <FlatList
                    data={this.state.studySpotList}
                    ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }}/>}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        console.log(item);
                        return (
                            <ListItem 
                                title={item.name}
                                subtitle={item.color}
                                onPress={() => { }}
                            />
                        );
                    }
                }
            />
            </SafeAreaView> 
        );
    }
}

const styles = StyleSheet.create({
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