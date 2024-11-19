import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import TextField from '@/components/TextField'
import CalculatorBtn from '@/components/CalculatorBtn'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.container}>
      {/* <Text
        style={globalStyles.result} numberOfLines={1}
        adjustsFontSizeToFit
      >50 X 50000000000000000000000</Text>
      <Text style={globalStyles.subResult}>250</Text> */}

      {/* Results */}
      <View style={{paddingHorizontal: 30, marginBottom: 20}}>
        <TextField variant='h1'>50 X 500000000</TextField>
        <TextField variant='h2'>250</TextField>
      </View>

      {/* Buttons */}

      <View style={globalStyles.row}>
        <CalculatorBtn label='C' blackText color={Colors.lightGray} onPress={() => console.log('c')} />
        <CalculatorBtn label='+/-' blackText color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='DEL' blackText color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='/' color={Colors.orange} onPress={() => console.log('')} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='7' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='8' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='9' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='X' color={Colors.orange} onPress={() => console.log('')} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='4' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='5' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='6' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='-' color={Colors.orange} onPress={() => console.log('')} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='1' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='2' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='3' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='+' color={Colors.orange} onPress={() => console.log('')} />
      </View>

      <View style={globalStyles.row}>
        <CalculatorBtn label='0' doubleSize color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='.' color={Colors.lightGray} onPress={() => console.log('')} />
        <CalculatorBtn label='=' color={Colors.orange} onPress={() => console.log('')} />
      </View>
    </View>
  )
}

export default CalculatorApp