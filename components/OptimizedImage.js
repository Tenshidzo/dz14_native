import React from 'react';
import {View, StyleSheet} from "react-native";
import {Image} from 'expo-image';

const OptimizedImage = React.memo(({uri}) => {
    console.log(`Rendering image: ${uri}`)
    return (
        <View style={styles.container}>
            <Image source={{uri}} style={styles.image} cachePolicy="disk"/>
        </View>
    )
})

export default OptimizedImage;

const styles = StyleSheet.create({
    container: {alignItems: 'center', margin: 10},
    image: {width: 200, height: 200, borderRadius: 10}
})