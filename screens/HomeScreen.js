import {useState} from 'react';
import {View, Text, FlatList} from "react-native";
import RegularButton from "../components/RegularButton";
import RegularImage from "../components/RegularImage";

const HomeScreen = () => {
    const [count, setCount] = useState(0);
    const data = Array.from({length: 50}, (_, i) => ({
        id: `item-${i}`,
        uri: `https://picsum.photos/200?random=${i}`
    }))
    console.log(data)

    return (
        <View>
            <Text style={{fontSize: 30}}>Count: {count}</Text>
            <RegularButton title="Increase" onPress={() => setCount(count + 1)}/>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <RegularImage uri={item.uri}/>}
            />
        </View>
    )
}

export default HomeScreen;