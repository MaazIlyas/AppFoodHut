import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

// import {Header} from "../components"

const FoodDetail = () => {

    function renderHeader() {
        // return (
        //     // <Header
        //     //     title="Details"
        //     //     containerStyle={{
        //     //         height: 50,
        //     //         marginalHorizontal: SIZES.padding,
        //     //         marginTop: 40,
        //     //     }}
        //     // />
        // )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white
            }}
        >
            {/* header */}
            {/* {renderHeader()} */}

            {/* body */}

            {/* Footer */}

        {/* <Text>FoodDetail</Text> */}
        </View>
    )
}

export default FoodDetail;