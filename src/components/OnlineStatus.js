import React from 'react';
import {View} from 'react-native';

const OnlineStatus = ({size = 15, color = '#72D98F'}) => {
  const outerCircleSize = size;
  const innerCircleSize = size * 0.5;
  return (
    <View
      style={{
        width: outerCircleSize,
        height: outerCircleSize,
        borderRadius: outerCircleSize / 2,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: color,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: innerCircleSize,
          height: innerCircleSize,
          borderRadius: innerCircleSize / 2,
          backgroundColor: color,
        }}
      />
    </View>
  );
};
export const Circle = ({size = 15, color = '#72D98F'}) => {

  return (
  
      <View
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
        }}
      />
  );
};

export default OnlineStatus;
