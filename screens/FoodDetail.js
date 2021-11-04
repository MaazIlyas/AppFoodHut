import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Animated
} from 'react-native';

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

import {Header, IconButton, CartQuantityButton, IconLabel, TextButton, LineDivider, StepperInput} from "../components"
import { Line } from 'react-native-svg';
import {Picker} from '@react-native-picker/picker';


// const food = ['Small', 'Medium', 'Large']

const food = [
    {
        id: 1,
        size: 'Small'
    }, 
    {
        id: 2,
        size: 'Medium'
    },
    {
        id: 3,
        size: 'Large'
    }]

const FoodDetail = ({route, navigation}) => {

    const [foodItem, setFooditem] = React.useState(null);
    const [selectedSize, setSelectedSize] = React.useState(1)
    const [qty, setQty] = React.useState(1)


    React.useEffect(() => {
        let {item} = route.params;
        setFooditem(item)
    })

    function addQty () {
        setQty(qty + 1)
        tempItem = foodItem
        itemNewPrice = parseFloat(tempItem?.price)
        itemNewPrice += itemNewPrice
        console.log(itemNewPrice.toFixed(2))

        // tempItem?.price = tempItem?.price + tempItem?.price

        // setFooditem(tempItem)
    }

    const [price, setPrice] = React.useState()
    function renderHeader() {
        return (
            <Header
                title="Details"
                containerStyle={{
                    height: 50,
                    marginalHorizontal: SIZES.padding,
                    marginTop: 40,
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
                    <CartQuantityButton
                    quantity={3}
                    onPress={() => navigation.navigate("Cart")}
                    />
                }
            />
        )
    }


    function renderDetails() {
        return (

            <View
            style={{
                marginTop: SIZES.radius,
                marginBottom: SIZES.padding,
                paddingHorizontal: SIZES.padding,
            }}
            >
                {/* food card */}
                <View
                    style={{
                        height:190,
                        borderRadius: 15,
                        backgroundColor: COLORS.lightGray2,
                    }}
                >
                    {/* Calories & Favourite */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius,
                        }}
                    >
                        {/* Calories */}
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <Image
                                //showing calories
                                source={icons.fire}
                                style={{
                                    width:30,
                                    height: 30,
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.darkgray,
                                    fontSize: 15,
                                    marginTop: 10
                                }}
                            >
                                {foodItem?.calories} calories
                            </Text>
                        </View>

                        {/* Favourite */}
                        <Image
                            source={icons.like}
                            style={{
                                width: 20,
                                height: 20,
                                //If it is like, color.primary otherwise color.gray
                                tintColor: foodItem?.isFavourite ? 
                                COLORS.primary : COLORS.darkgray,
                                marginTop: 7
                            }}
                        />
                    </View>

                    {/* Food Image */}
                    <Image
                        source={foodItem?.icon}
                        resizeMode="contain"
                        style={{
                            height: 170,
                            width: "100%"
                        }}
                    />
                </View>

                {/* Food info */}
                <View
                    style={{
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Name & Descriptio */}
                    <Text
                        style={{...FONTS.h1}}
                    >
                        {foodItem?.name}
                    </Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.darkgray,
                            textAlign: 'justify',
                            ...FONTS.body3
                        }}
                    >
                        {foodItem?.details}
                    </Text>

                    {/* Ratings, Duration */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding
                        }}
                    >
                        {/* Rating */}
                        <IconLabel
                            containerStyle={{
                                paddingHorizontal: 0
                            }}
                            icon={icons.clock}
                            iconStyle={{
                                color: COLORS.white
                            }}
                            label={"Preparation: " + foodItem?.duration}
                            labelStyle={{
                                color: COLORS.black
                            }}
                        />

                        {/* Duration */}
                        <IconLabel
                            containerStyle={{
                                marginLeft: 80,
                                backgroundColor: COLORS.primary
                            }}
                            icon={icons.star}
                            label={foodItem?.rating}
                            labelStyle={{
                                color: COLORS.white
                            }}
                        />

                    </View>

                    {/* Dummy sizes */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{
                            fontWeight: "700",
                            fontSize: 20,
                        }}>
                            Sizes: 
                        </Text>
                        {/* Importing size components */}
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginLeft: SIZES.padding
                            }}
                        >
                            {food.map((item, index) => {
                                return(
                                    <TextButton
                                        key={`Sizes-${index}`}
                                        buttonContainerStyle={{
                                            width: 90,
                                            height: 45,
                                            margin: 5,
                                            borderWidth: 1,
                                            borderRadius: 15,
                                            borderColor: selectedSize == item.id ? COLORS.primary : COLORS.darkgray, 
                                            backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                        }}
                                        label={item.size}
                                        labelStyle={{
                                            color: selectedSize == item.id ? COLORS.white : COLORS.darkgray,
                                            ...FONTS.body2
                                        }}
                                        onPress={() => setSelectedSize(item.id)}
                                        qty={qty.toFixed(2)}
                                    />
                                )
                            })}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderLocation() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                {/* Location image */}
                <Image
                    source={icons.location}
                    style={{
                        width: 50,
                        height: 60,
                        borderRadius: 1,
                        marginLeft: 10,
                        marginTop: 10
                    }}
                />

                {/* InfoSection "Your selected branch.. change?" */}
                <View
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{
                        fontWeight: '500', 
                        textAlign: 'center',
                        fontSize: 17
                }}
                        >
                            Your selected Branch
                            </Text>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.secondary,
                                    borderRadius: SIZES.radius,
                                    marginTop: 10
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontWeight: '700',
                                        fontSize: 26,
                                        
                                        padding: 5,
                                        
                                    }}
                                >Darwin</Text>
                            </TouchableOpacity>
                            
                    
                    {/* <Text style={{color: COLORS.darkgray, ...FONTS.body4}}></Text> */}
                </View>
                
            </View>
        )
    }

    function renderFooter() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 120,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius
                }}
            >
                {/* Stepper Input */}
                <StepperInput
                    value={qty}
                    // onAdd={() => setQty(qty + 1)}
                    onAdd = {() => addQty()}
                    onMinus={() => {
                        if (qty > 1) {
                            setQty(qty - 1)
                        }
                    }}
                />

                {/* Text Button Showing price */}
                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: 10,
                        backgroundColor: COLORS.primary
                    }}
                    label="Add"
                    label2={foodItem?.price}
                    onPress={() => {navigation.navigate('Cart')}}
                />

            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* header */}
            {renderHeader()}
            
            {/* body */}
            <ScrollView>
                {/* FoodDetails */}
                {renderDetails()}

                {/* Adding line Divider */}
                <LineDivider/>

                {/* SeeRestaurant'sLocation */}
                {renderLocation()}
            </ScrollView>
            

            {/* Footer */}
            <LineDivider/>
            {renderFooter()}
            
        </View>
    )
}

export default FoodDetail;