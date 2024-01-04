import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E8EAED',
        paddingTop: 80,
        paddingHorizontal: 20,
        
    
      },

    tasksWrapper: {
        

    },

    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center'
        
    },

    toDoItems: {
        marginTop: 20,
    },

    writeTask: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: 250,
        marginLeft: 20,
        borderColor: '#06C8F3',
        borderWidth: 1,

    },

    addBtn: {
        backgroundColor: '#09A3C5',
        borderRadius: 75,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 20,
    },

    addText: {
        fontWeight: 'bold',
        color: "#FFFFFF"
    },


});

export default styles   