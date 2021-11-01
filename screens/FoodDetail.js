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

import {Header, IconButton, CartQuantityButton} from "../components"

const FoodDetail = ({route}) => {

    const [foodItem, setFooditem] = React.useState(null);

    React.useEffect(() => {
        let {item} = route.params;
        setFooditem(item)
    }
    )
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

            {/* Footer */}

        {/* <Text>FoodDetail</Text> */}
        </View>
    )
}

export default FoodDetail;