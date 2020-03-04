import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button
} from 'react-native';

export default class StudySpotFormScreen extends Component {

    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return {
            title: 'Add a New Study Spot'
        }
    };

    state = {

    }

    render() {
        console.log(this.state);
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Name'
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Device ID'
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Building Name'
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Floor Number'
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Individual or Group'
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Capacity'
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Outlets: 0 or 1'
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Number of Outlets'
                />
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => { }}
                    placeholder='Desktop Computer: 0 or 1'
                />
                <Button
                    style={styles.button}
                    title='Add Study Spot'
                    onPress={() => { }}/>
        </View>
        );
    }
}

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
    formInput: {
        borderColor: '#B5B4BC',
        borderWidth: 1,
        padding: 8,
        height: 50,
        width: '75%',
    },
});