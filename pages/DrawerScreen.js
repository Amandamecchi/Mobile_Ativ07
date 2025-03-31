import { StyleSheet, Text, View, Image } from "react-native";

export default function DrawerScreen() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={require('../assets/dog.jpeg')} 
                resizeMode="contain" 
            />
            <View style={styles.content}>
                <Text style={styles.text}>This is Bidu! O Patrão </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 30,
        borderRadius: 100,
    },
    content: {
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});