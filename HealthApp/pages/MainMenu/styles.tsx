import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginVertical: 25,
        flexDirection: 'row'
    },
    AlreadyText: {
        marginHorizontal: 5
    },
    color: {
        color: "#a8a7f4"
    },
    location: {
        marginBottom: 20,
        height: height * 0.1,
        width: width * 0.2,
    }
});

export default styles;