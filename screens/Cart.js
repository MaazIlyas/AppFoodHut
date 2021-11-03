import React from "react";
import {
    View, Text, Image, StyleSheet
} from "react-native";

import {
    Header,
    IconButton,
    CartQuantityButton,
    StepperInput
} from "../components";

import { FONTS, SIZES, COLORS, icons } from "../constants";

const Cart = ({navigation}) => {

    function renderHeader() {
        return (
            <Header
                title="Cart"
                containerStyle={{
                    height: 50,
                    marginHorizontan: SIZES.padding,
                    marginTop: 40
                }}
            />
        )
    }
    return (
        <View
            style={{
                flex:1,
                backgroundColor: COLORS.white
            }}
        >
            {/* Header */}
            {renderHeader()}


            {/* Cart List */}


            {/* Footer */}


            <Text>Cart</Text>
        </View>
    )
}

export default Cart;