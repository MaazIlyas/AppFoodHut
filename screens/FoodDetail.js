import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

import {Header, IconButton} from "../components"

const FoodDetail = () => {

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
                        }}
                        iconStyle={{
                            width:20,
                            height:20,
                            tintColor: COLORS.black
                        }}
                        onPress={() => console.log("Back") }
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