import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    item :{
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 15,  
        width: '100%',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    itemLeft :{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },

    square :{
        width: 25,
        height: 25,
        backgroundColor: '#06C8F3',
        borderRadius: 5,
        marginRight: 10,
    },
    
    itemText :{
        maxWidth: '80%',

    },

    circle:{
        width: 15,
        height: 15,
        borderRadius: 50,
        borderColor: '#B10505',
        borderWidth: 2,
        
    }, 

});

export default styles   