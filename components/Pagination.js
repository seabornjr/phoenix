import React from 'react'
import { Animated, Dimensions, StyleSheet, View } from 'react-native'

const {width} = Dimensions.get('screen')

const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
        {
            data.map((_, idx) => {
                const inputRange = [(idx-1)* width, idx * width, (idx+1)*width]
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 2],
                    extrapolate: 'clamp',
                })

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ["#CCC", '#000', '#CCC'],
                    extrapolate: 'clamp',
                })

                return <Animated.View key={idx.toString()} 
                style={[styles.dot, {width: dotWidth, backgroundColor},
                    //idx === index && styles.dotActive
                ]} />
            })
        }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    dot: {
        width: 12,
        height: 12,
        borderRadius: 6,
        margin: 3,
        backgroundColor: "#CCC"
    },
    container: {
        position: "absolute",
        bottom: 150,
        flexDirection: "row",
        marginHorizontal: 3,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    dotActive: {
        backgroundColor: '#000',
    }
})