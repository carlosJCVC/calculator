import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import TextField from '@/components/TextField'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.container}>
      {/* <Text
        style={globalStyles.result} numberOfLines={1}
        adjustsFontSizeToFit
      >50 X 50000000000000000000000</Text>
      <Text style={globalStyles.subResult}>250</Text> */}

      <TextField variant='h1'>50 X 500000000</TextField>
      <TextField variant='h2'>250</TextField>
    </View>
  )
}

export default CalculatorApp