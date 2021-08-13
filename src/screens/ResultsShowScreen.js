import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation})=>{
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const getResult = async (id) =>{
        try{
            const response = await yelp.get(`/${id}`)
            setResult(response.data);
        }catch(err){
            setError('There was an issue loading the data for this restaurant');
        }
    };

    useEffect(() =>{
        getResult(id);
    }, []);


    if (!result){
        return null;
    }
    return (
        <View>
            <Text>Results Show</Text>
            {error ? <Text>{error}</Text> : null}
            <FlatList 
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return (
                <Image
                source={{uri:item}}
                style={styles.image}
                />
                )
            }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200, 
        width: 300,
    }
});

export default ResultsShowScreen;