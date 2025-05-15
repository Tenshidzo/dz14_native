import {StyleSheet, Text, View, StatusBar} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import OptimizedHomeScreen from "./screens/OptimizedHomeScreen";
//
// export default function App() {
//     return (
//         <View style={styles.container}>
//             <StatusBar/>
//             <HomeScreen/>
//         </View>
//     );
// }

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <OptimizedHomeScreen/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
