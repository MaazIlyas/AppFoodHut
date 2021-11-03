//Creating iconbutton on the header to use in several pages (e.g. foodDetails)
import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native';

import { COLORS, icons, SIZES } from "../constants";

const HomeNavButton = ({ containerStyle, iconStyle, onPress, quantity }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                backgroundColor: 'orange',
                borderColor: 'black',
                marginRight: 12,
                ...containerStyle
            }}
            onPress = {onPress}
        >
            <Image
                source={icons.cutlery}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black,
                    ...iconStyle
                }}
            />
            
        </TouchableOpacity>
    )

}

export default HomeNavButton;