import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import {Feather} from '@expo/vector-icons';
import yelp from '../api/yelp';

const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
            style={styles.inputStyle}
            placeholder='Search'
            value={term}
            onChangeText={onTermChange}
            autoCapitalize='none'
            autoCorrect={false}
            onEndEditing={onTermSubmit}
            />
        </View>
    );


};

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: 'lightgrey',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,        
        flexDirection: 'row'
    },
    inputStyle:{
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,

    }

});
export default SearchBar;