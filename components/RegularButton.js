import {TouchableOpacity, StyleSheet, Text} from "react-native";

const RegularButton = ({title, onPress}) => {
    console.log(`Rendering button: ${title}`)
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default RegularButton;

const styles = StyleSheet.create({
    button: {backgroundColor: 'red', padding: 10, margin: 5, borderRadius: 5},
    text: {color: 'white', textAlign: 'center'}
})