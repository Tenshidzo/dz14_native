import {TouchableOpacity, StyleSheet, Text} from "react-native";
import React from "react";

const OptimizedButton = React.memo(({title, onPress}) => {
    console.log(`Rendering button: ${title}`)
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
});

export default OptimizedButton;

const styles = StyleSheet.create({
    button: {backgroundColor: 'red', padding: 10, margin: 5, borderRadius: 5},
    text: {color: 'white', textAlign: 'center'}
})