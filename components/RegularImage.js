import {View, StyleSheet, Image} from "react-native";

const RegularImage = ({uri}) => {
    console.log(uri)
    return (
        <View style={styles.container}>
            <Image source={{uri}} style={styles.image}/>
        </View>
    )
}

export default RegularImage;

const styles = StyleSheet.create({
    container: {alignItems: 'center', margin: 10},
    image: {width: 200, height: 200, borderRadius: 10}
})