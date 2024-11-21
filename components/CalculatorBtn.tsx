import { View, Text, Pressable, TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import * as Haptics from 'expo-haptics';
import { Colors } from '@/constants/Colors';
// import Feather from '@expo/vector-icons/Feather';

interface Props extends TextProps {
    onPress: () => void;
}

export default function CalculatorBtn({children, onPress}: Props) {
  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.btn,
        // backgroundColor: color,
        opacity: pressed? 0.8 : 1,
      })}
      onPress={ () => {
        // Haptics.notificationAsync(
        //   Haptics.NotificationFeedbackType.Success
        // )

        Haptics.selectionAsync()

        onPress()
      } }
    >
      {children}
    </Pressable>
  )
}