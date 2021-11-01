import React from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';

import {COLORS, FONTS, SIZES, icons} from "../constants";

const Header = ({
    containerStyle,
    title,
    titleStyle,
    leftComponent,
    rightComponent
}) => {
    return (
        <View
            style={{
                height: 60,
                flexDirection: 'row',
                ...containerStyle
            }}
            >
                {
                    leftComponent
                }

                <View
                    style={{
                        flex:1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    >
                    <Text style={{...FONTS.h3, ...titleStyle}}> {title}</Text>
                </View>

                {
                    rightComponent
                }
        </View>
    )
}

export default Header;