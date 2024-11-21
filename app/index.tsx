import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import TextField from '@/components/TextField'
import CalculatorBtn from '@/components/CalculatorBtn'
import { useCalculator } from '@/hooks/useCalculator'
import { Operator } from '@/enums/Operator'
import Feather from '@expo/vector-icons/Feather';

const CalculatorApp = () => {
  const {
    calculateWasPressed,

    onPressNumber,
    onPressClear,
    onPressToggleSign,
    onPressOperator,
    onPressPercentage,
    onPressRemoveLastCharacter,
    onPressCalculate,
    showOperationBuild,
    showOperationResult,
    operationResult
  } = useCalculator()

  return (
    <View style={globalStyles.container}>
      {/* <Text
        style={globalStyles.result} numberOfLines={1}
        adjustsFontSizeToFit
      >50 X 50000000000000000000000</Text>
      <Text style={globalStyles.subResult}>250</Text> */}

      {/* Results */}
      <View style={globalStyles.displayContainer}>
        <TextField variant={calculateWasPressed? 'h2' : 'h1'}>{showOperationBuild()}</TextField>

        { showOperationResult()? (<TextField variant={calculateWasPressed? 'h1' : 'h2'}>{operationResult()}</TextField>) : null }
      </View>

      {/* Buttons */}

      <View style={globalStyles.btnContainer}>
        <View style={globalStyles.row}>
          {/* <CalculatorBtn label='c' orangeText color={Colors.lightGray} onPress={clean} /> */}
          <CalculatorBtn onPress={onPressClear} >
            <Text style={globalStyles.textBtn}>AC</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={onPressRemoveLastCharacter}>
            <Feather name="delete" size={24} color='white' style={globalStyles.textBtn} />
          </CalculatorBtn>

          <CalculatorBtn onPress={onPressPercentage} >
            <Feather name="percent" size={24} color="white" style={globalStyles.textBtn} />
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressOperator(Operator.divide)} >
            <Feather name="divide" size={24} color="white" style={globalStyles.textBtn} />
          </CalculatorBtn>
        </View>

        <View style={globalStyles.row}>
          <CalculatorBtn onPress={() => onPressNumber('7')}>
            <Text style={globalStyles.textBtnNumber}>7</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressNumber('8')}>
            <Text style={globalStyles.textBtnNumber}>8</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressNumber('9')}>
            <Text style={globalStyles.textBtnNumber}>9</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressOperator(Operator.multiply)} >
            <Feather name="x" size={24} color="white" style={globalStyles.textBtn} />
          </CalculatorBtn>
        </View>

        <View style={globalStyles.row}>
          <CalculatorBtn onPress={() => onPressNumber('4')}>
            <Text style={globalStyles.textBtnNumber}>4</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressNumber('5')}>
            <Text style={globalStyles.textBtnNumber}>5</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressNumber('6')}>
            <Text style={globalStyles.textBtnNumber}>6</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressOperator(Operator.subtract)}>
            <Feather name="minus" size={24} color="white" style={globalStyles.textBtn} />
          </CalculatorBtn>
        </View>

        <View style={globalStyles.row}>
          <CalculatorBtn onPress={() => onPressNumber('1')}>
            <Text style={globalStyles.textBtnNumber}>1</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressNumber('2')}>
            <Text style={globalStyles.textBtnNumber}>2</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressNumber('3')}>
            <Text style={globalStyles.textBtnNumber}>3</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressOperator(Operator.add)}>
            <Feather name="plus" size={24} color="white" style={globalStyles.textBtn} />
          </CalculatorBtn>
        </View>

        <View style={globalStyles.row}>
          <CalculatorBtn onPress={onPressToggleSign}>
            <Text style={globalStyles.textBtn}>+/-</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressNumber('0')}>
            <Text style={globalStyles.textBtnNumber}>0</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={() => onPressNumber('.')}>
            <Text style={globalStyles.textBtnNumber}>.</Text>
          </CalculatorBtn>

          <CalculatorBtn onPress={onPressCalculate}>
            <Text style={globalStyles.textBtnEqual}>=</Text>
          </CalculatorBtn>
        </View>
      </View>
    </View>
  )
}

export default CalculatorApp