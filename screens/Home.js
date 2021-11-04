import React from "react";
import { View, Text,TouchableOpacity, Image, SafeAreaView, StyleSheet, TextInput, FlatList, useEffect } from "react-native";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";


const Home = ({navigation}) => {

    //Writing Dummy Data
    const categoryData = [
        {
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
    const foodCardData = [
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
            categories: [1, 2],
            calories: "70",
        },
        {
            id: 2,
            name: "Spinach",
            icon: images.spinach,
            description: "Sample FOod Description",

            details: "Throw some spinach into your morning omelet, or try chef Gavin Kaysen's creamed spinach dish.",
            rating: 4.7,
            duration: "15 minutes",

            price: "10.99",
            categories: [1, 3, 4],
            calories: "400",
        },
        {
            id: 3,
            name: "Chciken Burger",
            icon: images.crispy_chicken_burger,
            description: "Crispy Fried chicken burger",

            details: "A hamburger topped with cheese. The slice of cheese is placed on top of the meat patty. It includes toppings such as lettuce, tomato, onion, pickles, bacon, mayonnaise, ketchup, and mustard With a plate of fries.",
            rating: 4.0,
            duration: "15 minutes",

            price: "10.99",
            categories: [1, 2],
            calories: "50"
        },
        {
            id: 4,
            name: "Grilled Eggplant",
            icon: images.grilledEggplant,
            description: "Sample FOod Description",

            details: "Throw some spinach into your morning omelet, or try chef Gavin Kaysen's creamed spinach dish.",
            rating: 4.2,
            duration: "15 minutes",

            price: "10.99",
            categories: [1, 3],
            calories: "55",
        },
        {
            id: 5,
            name: "Smokey Vegan Platter",
            icon: images.smokeyVeganPlatter,
            description: "Sample FOod Description",

            details: "Throw some spinach into your morning omelet, or try chef Gavin Kaysen's creamed spinach dish.",
            rating: 4.2,
            duration: "15 minutes",

            price: "10.99",
            categories: [1, 3, 4],
            calories: "30"
        },
        {
            
            id: 6,
            name: "Sushi",
            icon: images.sushi,
            description: "Delicate sushi",

            details: "Japanese cuisine encompasses the regional and traditional foods of Japan, which have developed through centuries of political, economic, and social changes.",
            rating: 4.9,
            duration: "15 minutes",

            price: "10.99",
            categories: [1, 2],
            calories: "60"
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
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

    // useEffect(()=>{
    //     console.log("Apple")
    // },[]);

    let x = 1;
    const [categories, setCategories] = React.useState(categoryData)
    const [foodCards, setFoodCards] = React.useState(foodCardData)
    const [selectedCategory, setSelectedCategory] = React.useState({"icon": 28, "id": 1, "name": "All"})
    
    // console.log(selectedCategory);
    
    const [restaurants, setRestaurants] = React.useState(restaurantData)

    //To select food preference
    function onSelectCategory(category) {
        //filter restaurant //needs to be adjusted
        let foodList = foodCardData.filter(a => a.categories.includes(category.id))

        setFoodCards(foodList)

        setSelectedCategory(category)
    }

    function renderSearch() {
        return(
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
                source={icons.filter}
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
        
    // Render Categories
    function renderFoodPreference() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding +1.5,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        marginBottom: -20,
                    }}
                    onPress={() => onSelectCategory(item)}
                    
                >
                    {/* {console.log(selectedCategory)} */}
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Food</Text>
                <Text style={{ ...FONTS.h1 }}>Preference</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderFoodCards() {

        const renderItem = ({item, index}) => {
            return (
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.white,
                        height: 150,
                        alignItems: 'center',
                        marginHorizontal: SIZES.padding,
                        marginBottom: SIZES.radius,
                        // marginTop: -50,
                    }}
                    //REMEMBER: pass the items and other dummy data as well
                    onPress={() => navigation.navigate("FoodDetail", {item})}
                >
                    {/* image */}
                    <Image
                        source={item.icon}
                        style={{
                            marginTop: 10,
                            height: 110,
                            width: 110,
                            marginBottom: 10,
                            marginLeft: 20,
                            marginRight: 15
                        }}
                    />

                    <View style={{
                        flex: 1
                    }}
                    >
                        {/* Name */}
                        <Text style={{ fontWeight: "bold", fontSize: 17, marginBottom: 10}}>
                            {item.name}
                        </Text>

                        {/* Descriptionc */}
                        <Text style={{ color: COLORS.darkgray2, ...FONTS.body4, marginBottom: 5}}>
                            {item.description}
                        </Text>

                        {/* Price */}
                        <Text style={{ marginTop: SIZES.base, fontWeight: "bold", }}>
                            ${item.price}
                        </Text>
                    </View>

                    <View
                        style={{
                            flexDirection: 'row',
                            position: 'absolute',
                            top: 5,
                            right: SIZES.radius
                        }}
                    >
                        <Image
                            source={icons.fire}
                            style={{
                                width: 18,
                                height: 21,
                                marginTop: 1,
                            }}
                        />
                        <Text style={{ color: COLORS.black, marginTop: 5, marginLeft: 3}}>
                            {item.calories} Calories
                        </Text>
                    </View>

                </TouchableOpacity>
            )
        }
        return(
            <FlatList
                data = {foodCards}
                keyExtractor={(item) => `${item.id}`}
                showVerticalScrollIndicator={false}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
            />
        )
    }

    return (

        <View style={{
            flex:1
        }}>

            {/* Move it to a function after getting to know the way */}
            {/* Search */}
            {renderSearch()}

            {/* FoodPreferenceMenu */}
            {renderFoodPreference()}

            {/* Food Cards */}
            {renderFoodCards()}

            {/* <FlatList

                data = {categories}
                keyExtractor={(item) => `${item.id}`}
                showVerticalScrollIndicator={false}
                renderItem={({item, index}) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110
                            }}
                            item={item}
                            onPress={() => console.log
                            ("HorizontalFoodCard")}
                        />
                    )
                }}
            /> */}

        </View>
    )
}

export default Home;