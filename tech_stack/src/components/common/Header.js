// Import libary to make registerComponent
//

import React from "react";
import {
    Text,
    View
} from "react-native";

// make componenet
const Header = (props) => {
    const {
        textStyle,
        viewStyle
    } = styles;

    return ( 
        <View style = {viewStyle} >
        <Text style = {textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#777777',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: .2
    },
    textStyle: {
        fontSize: 20
    }
}

// make component available
export {Header};