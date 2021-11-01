//Creating iconbutton on the header to use in several pages (e.g. foodDetails)
import React from 'react';
import {
    TouchableOpacity,
    Image,
    View,
    Text
} from 'react-native';

import { COLORS, icons, SIZES } from "../constants";

const CartQuantityButton = ({ containerStyle, iconStyle, onPress, quantity }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: SIZES.radius,
                backgroundColor: 'orange',
                marginRight: 12,
                ...containerStyle
            }}
            onPress = {onPress}
        >
            <Image
                source={icons.basket}
                style={{
                    width: 20,
                    height: 20,
                    tintColor: COLORS.black,
                    ...iconStyle
                }}
            />
            <View
                style={{
                    position: 'absolute',
                    top: 1,
                    right: 2,
                    height: 15,
                    width: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.primary

                }}
            >
                <Text
                    style={{
                        color: 'white',
                        lineHeight: 0,
                        fontSize: 10
                    }}
                >
                    {quantity}
                </Text>
            </View>
        </TouchableOpacity>
    )

}

export default CartQuantityButton;