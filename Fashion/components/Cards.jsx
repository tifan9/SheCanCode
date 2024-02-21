import React from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet } from 'react-native';
import tw from 'twrnc';

// Horizontal cards
function Card({ type, image, title, tag, price }) {
  return (
    <View style={tw`mr-4 relative`}>
      <ImageBackground source={{ uri: image }} style={styles.image}>
        <View style={styles.overlay}>
          <View style={styles.topContainer}>
            <Text style={[tw`text-lg font-bold text-white`, styles.text]}>{tag}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={[tw `text-sm text-gray-500 text-white`, styles.text]}>{title}</Text>
            <Text style={[tw`text-sm text-white`, styles.text]}>{price}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  overlay: {
    height:200,
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
  },
});

const Cards = () => {
  const clothes = [
    {
      id: 1,
      tag: '#2 Best Seller',
      type: 'Gj Jeans',
      price: '$46.00',
      image:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      tag: '#1 Best Seller',
      type: 'bestseller',
      price: '$50.30',
      image:
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {clothes.map((item) => (
        <Card
          key={item.id}
          type={item.type}
          image={item.image}
          title={item.type}
          tag={item.tag}
          price={item.price}
        />
      ))}
    </ScrollView>
  );
};

export default Cards;
