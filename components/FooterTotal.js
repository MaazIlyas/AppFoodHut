import React from 'react';
import {
    View,
    Text,
    Platform
} from 'react-native';
import { TextButton, LineDivider } from "../components"

import LinearGradient from "react-native-linear-gradient";

import { COLORS, FONTS, icons, SIZES } from "../constants";

const FooterTotal = ({subTotal, shippingFree, total, onPress}) => {
    return (
        <View>
            {/* Shadow */}
            <LinearGradient
                start={{x:0, y:0}}
                end={{x:0, y:1}}
                colors={[COLORS.transparent, COLORS.lightGray]}
                style={{
                    position: 'absolute',
                    top: -15,
                    left: 0,
                    right: 0,
                    //for android height is 50 and for ios 200
                    height: Platform.OS === 'ios' ? 200 : 50,
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15
                }}
            />

            <View
                style={{
                    padding: SIZES.padding,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: COLORS.white,
                }}
            >
                {/* subtotal */}
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    <Text style={{flex: 1, ...FONTS.body3}}>
                    Subtotal
                    </Text>
                    <Text
                        style={{...FONTS.h3}}
                    >
                        ${subTotal.toFixed(2)}
                    </Text>
                </View>
                {/* Extras fee */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.base,
                        marginBottom: SIZES.padding
                    }}
                >
                    <Text
                        style={{flex: 1, ...FONTS.body3}}
                    >
                        Extras Fee
                    </Text>
                    <Text
                        style={{...FONTS.h3}}
                    >
                        ${shippingFree.toFixed(2)}
                    </Text>
                </View>

                {/* Line */}
                    <LineDivider/>

                {/* Total */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                flex: 1,
                                ...FONTS.h3,
                                fontWeight: '700'
                            }}
                        >
                            Total
                        </Text>
                        <Text
                            style={{...FONTS.h3,
                                fontWeight: '700'
                            }}
                        >
                            ${total.toFixed(2)}
                        </Text>
                    </View>

                {/* Order */}
                <View>
                <TextButton
                    buttonContainerStyle={{
                        height: 50,
                        marginTop: 20,
                        marginLeft: 9,
                        borderRadius: 15,
                        backgroundColor: COLORS.primary,
                        width: '95%'
                    }}
                    label="Place your Order"
                    onPress={onPress}
                />
                </View>
                


            </View>
        </View>
    )
}

export default FooterTotal;