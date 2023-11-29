import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
const CountdownTimer = () => {
  const [seconds, setSeconds] = useState<number | undefined>(600); // 10 minutes in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(interval);
          // Handle timer completion or any other logic here
        } else {
          return Number(prevSeconds) - 1;
        }
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Helper function to format seconds into minutes and seconds
  const formatTime = (timeInSeconds:number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={styles.timer_wrapper}>
    <MaterialIcons
        name='timer'
        size={24}
        color={'rgba(255, 255, 255, 0.60)'}
    />

    <Text style={styles.timer}>{formatTime(seconds || 0)}</Text>
</View>

  )
};
const styles = StyleSheet.create({

  timer_wrapper: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    backgroundColor: 'transparent',
},
timer: {
    color: 'rgba(255, 255, 255, 0.60)',
    fontFamily: 'SF-Pro-Rounded',
    fontWeight:'400',

},
})
export default CountdownTimer;
