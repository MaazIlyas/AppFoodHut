import React from "react";
import { View, Text, TouchableOpacity, Image, SafeAreaView, StyleSheet, TextInput, FlatList } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";


const Home = () => {

    //Writing Dummy Data
    const categoryData = [{
            id: 1,
            name: "All",
            icon: icons.allFV,
        },
        {
            id: 2,
            name: "Non Veg",
            icon: icons.nonVeg,
        },
        {
            id: 3,
            name: "Vegetarian",
            icon: icons.salad,
        },
        {
            id: 4,
            name: "Vegan",
            icon: icons.vegan,
        }
    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [{
            id: 1,
            name: "Burger Crisp",
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: "30 - 45 min"
        },
        {
            id: 2,
            name: "ByProgrammers Pizza",
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: "15 - 20 min"

        }
    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
        // const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant //needs to be adjusted
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function renderSearch() {
        return ( <
            View style = {
                {
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.base,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray

                }
            } >
            { /* Icon */ } <
            Image source = { icons.search }
            style = {
                {
                    height: 20,
                    width: 20,
                    tintColor: COLORS.black
                }
            }
            /> { /* Text ibput */ } <
            TextInput style = {
                {
                    flex: 1,
                    marginLeft: SIZES.radius,
                }
            }
            placeholder = "Search food...." /
            > { /* Filter Buttons */ } <
            TouchableOpacity
            //onPress - will work later on
            >
            <
            Image source = { icons.hamburger }
            style = {
                {
                    height: 20,
                    width: 20,
                    tintColor: COLORS.black
                }
            }
            /> <
            /TouchableOpacity> <
            /View>

        )
    }

    <<
    << << < HEAD
        ===
        === =
        // Render Categories
        function renderFoodPreference() {
            const renderItem = ({ item }) => {
                return ( <
                    TouchableOpacity style = {
                        {
                            padding: SIZES.padding + 1.5,
                            paddingBottom: SIZES.padding * 2,
                            backgroundColor: (selectedCategory ? .id == item.id) ? COLORS.primary : COLORS.white,
                            borderRadius: SIZES.radius,
                            alignItems: "center",
                            justifyContent: "center",
                            marginRight: SIZES.padding,
                        }
                    }
                    onPress = {
                        () => onSelectCategory(item) } >
                    <
                    View style = {
                        {
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory ? .id == item.id) ? COLORS.white : COLORS.lightGray
                        }
                    } >
                    <
                    Image source = { item.icon }
                    resizeMode = "contain"
                    style = {
                        {
                            width: 30,
                            height: 30
                        }
                    }
                    /> <
                    /View>

                    <
                    Text style = {
                        {
                            marginTop: SIZES.padding,
                            color: (selectedCategory ? .id == item.id) ? COLORS.white : COLORS.black,
                        }
                    } >
                    { item.name } <
                    /Text> <
                    /TouchableOpacity>
                )
            }

            return ( <
                View style = {
                    { padding: SIZES.padding * 2 } } >
                <
                Text style = {
                    {...FONTS.h1 } } > Food < /Text> <
                Text style = {
                    {...FONTS.h1 } } > Preference < /Text>

                <
                FlatList data = { categories }
                horizontal showsHorizontalScrollIndicator = { false }
                keyExtractor = { item => `${item.id}` }
                renderItem = { renderItem }
                contentContainerStyle = {
                    { paddingVertical: SIZES.padding * 2 } }
                /> <
                /View>
            )
        }


    >>>
    >>> > Home - Categories
    return (

        <
        View style = {
            {
                flex: 1
            }
        } >
        <<
        << << < HEAD { /* Search */ } { renderSearch() } ===
        === = { /* Move it to a function after getting to know the way */ } { /* Search */ } { renderSearch() }

        { renderFoodPreference() } >>>
        >>> > Home - Categories

        <
        /View>
    )
}

export default Home;