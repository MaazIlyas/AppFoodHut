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

import { FONTS, SIZES, COLORS, icons, images } from "../constants";

const Cart = ({navigation}) => {

    const cartData = [
        {
            id: 1,
            name: "Cheese Burger",
            icon: images.burger_restaurant_2,
            description: "Burger with fries",
            // New
            details: "A hamburger topped with cheese. The slice of cheese is placed on top of the meat patty. It includes toppings such as lettuce, tomato, onion, pickles, bacon, mayonnaise, ketchup, and mustard With a plate of fries.",
            rating: 4.5,
            duration: "20 minutes",
            
            price: "10.99",
            categories: [1, 2, 3],
            calories: "70",
        },
        {
            id: 2,
            name: "Chciken Burger",
            icon: images.crispy_chicken_burger,
            description: "Crispy Fried chicken burger",
            price: "10.99",
            categories: [1, 3, 4],
            calories: "50"
        },
        {
            id: 3,
            name: "Sushi",
            icon: images.sushi,
            description: "Delicate sushi",
            price: "10.99",
            categories: [1, 4],
            calories: "60"
        },
        {
            id: 4,
            name: "Vegan",
            icon: icons.vegan,
            description: "Sample FOod Description",
            price: "10.99",
            categories: [1, 2, 3],
            calories: "400",
        }
    ]

    const [cartList, setCartList] = React.useState(cartData)

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

    function renderCartList() {
        return (
            <SwipeListView
                data={cartData}
                keyExtraction={item => `${item.id}`}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding * 2
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{
                            height: 100,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer
                        }}
                    >
                        {/* Creating Food Image */}
                        <View
                            style={{
                                width: 90,
                                height: 100,
                                marginLeft: -10
                            }}
                        >
                            <Image
                                source={data.item.icon}
                                resizeMode = 'contain'
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: 'absolute',
                                    top: 10
                                }}
                            />

                        </View>
                        {/* Food Info */}
                        <View
                            style={{
                                flex: 1
                            }}
                        >
                            <Text
                                style={{...FONTS.body3}}
                            >
                                {data.item.name}
                            </Text>
                            <Text
                                style={{color: COLORS.primary, ...FONTS.h3}}
                            >
                                ${data.item.price}
                            </Text>
                        </View>

                        {/* Adding Stepper Input */}


                    </View>
                )}
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
            {renderCartList()}

            {/* Footer */}


            <Text>Cart</Text>
        </View>
    )
}

// Creating reusable styles
const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius
    }

})


export default Cart;