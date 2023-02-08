import React, { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Pagination from './Pagination';

const {width, height} = Dimensions.get('screen');
const ResourcePrevSlider = ({navigation}) => {



const slides = [
  { id: 0,
    heading: "Resources for you",
    body: "Get a list of curated courses and career roadmaps that are tailored to your interests.",
    image: require('../assets/ResourceMan.png')
  },
  { id: 1,
    heading: "Build Education Portfolio",
    body: "Collect and store all your achievements in one place to showcase and make impact while applying for colleges.",
    image: require('../assets/CalendarPad.png')
  },
  { id: 2,
    heading: "Achieve",
    body: "Attend your dream college with right career guidance.",
    image: require('../assets/Rocket.png')
  },
]

const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = event => {
    Animated.event([
      {
        nativeEvent:{
          contentOffset: {
            x: scrollX
          }
        },
      }
    ],
    {
      useNativeDriver: false,
    }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems})=> {
    //console.log("Viewable items: ", viewableItems)
    setIndex(viewableItems[0].index);
  }).current;

  const [index, setIndex] = useState(0)

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50
  }).current
  return (
  <View>
    <FlatList 
      data={slides}
      renderItem={({item})=> (
          <View style={styles.container}>
            <Image source={item.image} resizeMode='contain' style={styles.image}/>
          <View style={styles.content}>
            <Text style={styles.heading}>{item.heading}</Text>
            <View style={styles.body}>
            <Text style={styles.para}> {item.body}</Text>
          </View>
            </View>
          </View>
      )}
      horizontal
      pagingEnabled
      snapToAlignment='center'
      showsHorizontalScrollIndicator={false}
      onScroll={handleOnScroll}
      onViewableItemsChanged={handleOnViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
    />
    <Pagination data={slides} scrollX={scrollX} index={index}/>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 20,
    fontSize: 24 
  },
  body: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
  },
  para: {
    textAlign: 'center',
    fontSize: 16
  },
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
    padding: 10
  },
  content: {
    alignItems: 'center',
  }
});



export default ResourcePrevSlider
  
  


