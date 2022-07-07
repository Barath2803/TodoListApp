import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
        // borderColor: '#F66C55',
        // borderWidth: 2,
    },
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    square: {
        height: 24,
        width: 24,
        backgroundColor: '#F6BC55',
        marginRight: 15,
        borderRadius: 6,
        opacity: 0.4
    },
    itemText: {
        maxWidth: '80%',
        fontSize: 16,
    },
    circular: {
        height: 12,
        width: 12,
        borderColor: '#F68C55',
        borderRadius: 10,
        borderWidth: 2
    },

});

export default Task;