import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

const ProductCard = () => {
    const products=[
        {
            id:1,
            image:'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1569&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'White T-shirt',
            price: '$45',
        },
        {
            id:2,
            image:'https://images.unsplash.com/photo-1579675109935-a12dd235c97f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'Purple T-shirt',
            price: '$47',
        },
        {
            id:3,
            image:'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'White T-shirt',
            price: '$45',
        },
        {
            id:4,
            image:'https://plus.unsplash.com/premium_photo-1675186049366-64a655f8f537?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title:'White T-shirt',
            price: '$45',
        }
    ];

    const renderProduct = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image}/>
            <View style={styles.heartContainer}>
                <View style={styles.heartBackground}>
                    <Icon name="heart-o" size={18} color="black" style={styles.heartIcon} />
                </View>
            </View>
            <View style={styles.overlay}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    );

    return (
        <FlatList
            data={products}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingTop: 10,
    },
    card: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        position: 'relative',
    },
    image: {
        height: 200,
        borderRadius: 10,
        justifyContent: 'flex-end',
    },
    overlay: {
        padding: 10,
        borderRadius: 10,
    },
    title: {
        color: 'gray',
        fontSize: 14,
    },
    price: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    heartContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    heartBackground: {
        backgroundColor: 'white',
        borderRadius: 100,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    heartIcon: {
        color: 'black',
    },
});

export default ProductCard;
