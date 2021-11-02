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

import {Header, IconButton, CartQuantityButton, IconLabel, TextButton} from "../components"

const food = ['Small', 'Medium', 'Large']

const FoodDetail = ({route, navigation}) => {

    const [foodItem, setFooditem] = React.useState(null);

    React.useEffect(() => {
        let {item} = route.params;
        setFooditem(item)
    })

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
                                    height:30
                                }}
                            />

                            <Text
                                style={{
                                    color: COLORS.darkgray,
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
                                COLORS.primary : COLORS.darkgray
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
                        <Text Stele={{...FONTS.h3}}>
                            Size: 
                        </Text>

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
                                    />
                                )
                            })}
                        </View>
                    </View>
                </View>
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

                {/* FoodItems */}
            </ScrollView>
            

            {/* Footer */}

        {/* <Text>FoodDetail</Text> */}
        </View>
    )
}

export default FoodDetail;