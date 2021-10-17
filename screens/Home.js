import React from "react";
import { View, Text,TouchableOpacity, Image, TextInput,FlatList } from "react-native";
import { COLORS, icons, SIZES } from "../constants";


const Home = () => {

    // Writing Dummy Data

    function renderSearch() {
        return (
            <View
            style={{
                flexDirection: 'row',
                height: 40,
                alignItems: 'center',
                marginHorizontal: SIZES.base,
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.radius,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray

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
            <TextInput
                style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                }}
                placeholder="Search food...."
            />
            {/* Filter Buttons */}
            <TouchableOpacity
            //onPress - will work later on
            >
                <Image
                source={icons.hamburger}
                style={{
                    height: 20,
                    width: 20,
                    tintColor: COLORS.black
                }}
                />
            </TouchableOpacity>
        </View>

        )
    }
        
    return (

        <View style={{
            flex:1
        }}>
            {/* Search */}
            {renderSearch()}

        </View>
    )
}

export default Home;