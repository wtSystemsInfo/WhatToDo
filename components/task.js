import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Task = (props) => {
    return (    
        <View style = {styles.item}>
            <View style = {styles.itemLeft}>
                <TouchableOpacity style = {styles.square}></TouchableOpacity>
                <Text style = {styles.itemText}>{props.text}</Text>
            </View>
            <View style = {styles.circle}></View>            
        </View>
    )
}

export default Task;