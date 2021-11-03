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
import HomeNavButton from "../components/HomeNavButton";

import {SwipeListView} from 'react-native-swipe-list-view';

import { FONTS, SIZES, COLORS, icons } from "../constants";

const Cart = ({navigation}) => {

    // const [cartList, setCartList] = React.useState(cartData)

    function renderHeader() {
        return (
            <Header
                title="Cart"
                containerStyle={{
                    height: 50,
                    marginHorizontan: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            backgroundColor: 'white',
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            boderRadius: SIZES.radius,
                            borderColor: 'green',
                            marginLeft: 15,
                        }}
                        iconStyle={{
                            width:20,
                            height:20,
                            tintColor: COLORS.black
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <HomeNavButton
                    onPress={() => {navigation.navigate('Home')}}
                    />
                }
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