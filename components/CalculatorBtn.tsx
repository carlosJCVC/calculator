import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as Haptics from 'expo-haptics';

interface Props {
    label: string;
    color?: string
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

export default function CalculatorBtn({label, color = Colors.darkGray, blackText = false, doubleSize = false, onPress}: Props) {
  return (
    <Pressable
      style={({pressed}) => ({
        ...globalStyles.btn,
        backgroundColor: color,
        opacity: pressed? 0.8 : 1,
        width: doubleSize? 180 : 80,
      })}
      onPress={ () => {
        // Haptics.notificationAsync(
        //   Haptics.NotificationFeedbackType.Success
        // )

        Haptics.selectionAsync()

        onPress()
      } }
    >
      <Text
        style={{
            ...globalStyles.textBtn,
            color: blackText? 'black' : 'white'
        }}

      >{label}</Text>
    </Pressable>
  )
}