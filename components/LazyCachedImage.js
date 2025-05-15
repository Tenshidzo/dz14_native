import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const LazyCachedImage = ({ uri, isVisible }) => {
    if (!isVisible) {
        return <View style={[styles.image, { backgroundColor: '#ccc' }]} />;
    }

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            cachePolicy="disk"
            onLoadEnd={() => console.log('Загрузилось: ' + uri)}
        />
    );
};

export default React.memo(LazyCachedImage);

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: 'center',
    },
});
