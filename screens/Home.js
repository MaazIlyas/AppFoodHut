import React from "react";
import { View, Text,TouchableOpacity, Image, TextInput,FlatList } from "react-native";
import { COLORS, icons, SIZES } from "../constants";


const Home = () => {
    return (
        <View
        style={{
            flexDirection: 'row',
            height: '40px',
            alignItems: 'center',
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            paddingHorizontal: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2

        }}
        >
            {/* Icon */}
            <Image
            source={icons.search}
            style={{
                height: 20,
                width: 20,
                tintColor: COLORS.black
            }}
            />
            {/* Text ibput */}

            {/* Filter Buttons */}
        </View>
    )
}

export default Home;