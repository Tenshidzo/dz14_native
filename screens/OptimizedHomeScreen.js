import {useState, useCallback, useMemo, useEffect, useRef} from 'react';
import {View, Text, FlatList, Dimensions} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import OptimizedButton from "../components/OptimizedButton";
import OptimizedImage from "../components/OptimizedImage";
import LazyCachedImage from '../components/LazyCachedImage'; 


const {height} = Dimensions.get('window');
const ITEM_HEIGHT = 220;


const OptimizedHomeScreen = () => {
    const [count, setCount] = useState(0);
    const [scrollIndex, setScrollIndex] = useState(0);
    const [visibleUris, setVisibleUris] = useState(new Set());
    const flatListRef = useRef(null); 
    const itemHeight = 220;

     const onViewableItemsChanged = useRef(({ viewableItems }) => {
        const visible = new Set(viewableItems.map(item => item.item.uri));
        setVisibleUris(visible);
    }).current;

    const saveScrollIndex = async (offset) => {
        try {
            console.log('Offset: ', offset.toString())
            await AsyncStorage.setItem('scrollOffset', offset.toString());
        } catch (e) {
            console.error('Failed to save scroll offset', e);
        }
    };

    const loadScrollOffset = async () => {
        try {
            const offset = await AsyncStorage.getItem('scrollOffset');
            if (offset !== null) {
                const index = Math.floor(parseInt(offset, 10) / itemHeight);
                setScrollIndex(index);
            }
        } catch (e) {
            console.error('Failed to load scroll offset', e);
        }
    };

    useEffect(() => {
        loadScrollOffset();
    }, []);

    const handleClick = useCallback(() => setCount(count => count + 1), []);

    const data = useMemo(() =>
        Array.from({length: 50}, (_, i) => ({
            id: `item-${i}`,
            uri: `https://picsum.photos/200?random=${i}`
        })), []);

    useEffect(() => {
        if (flatListRef.current && scrollIndex !== null) {
            flatListRef.current.scrollToIndex({index: scrollIndex, animated: false});
        }
    }, [scrollIndex]);

    return (
        <View>
            <Text style={{fontSize: 30}}>Count: {count}</Text>
            <OptimizedButton title="Increase" onPress={handleClick}/>

            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <LazyCachedImage uri={item.uri} isVisible={visibleUris.has(item.uri)} />
                )}
                getItemLayout={(_, index) => ({
                    length: ITEM_HEIGHT,
                    offset: ITEM_HEIGHT * index,
                    index,
                })}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                initialScrollIndex={scrollIndex} 
                onScrollToIndexFailed={(info) => {
                    setTimeout(() => {
                        flatListRef.current?.scrollToIndex({index: info.index, animated: true});
                    }, 500);
                }}
                ref={flatListRef}
                onMomentumScrollEnd={(event) => {
                    const offset = event.nativeEvent.contentOffset.y;
                    saveScrollIndex(offset);
                }}
            />
        </View>
    );
};

export default OptimizedHomeScreen;