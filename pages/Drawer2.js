import { StyleSheet, Text, View, Image } from "react-native";

export default function Drawer2() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/Estagiario.jpeg')} />
            <View style={styles.content}>
                <Text style={styles.text}>This is Funcionário! O Estágiario da casa</Text>
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
        width: 300,
        height: 300,
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