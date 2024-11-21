import { Operator } from "@/enums/Operator";
import { useEffect, useRef, useState } from "react"

export const useCalculator = ()  => {
  const [operator, setOperator] = useState<Operator>()
  const [firstNumber, setFirstNumber] = useState<string | undefined>(undefined)
  const [secondNumber, setSecondNumber] = useState<string | undefined>(undefined)
  const [lastOperationResult, setLastOperationResult] = useState<string | undefined>(undefined)
  const [calculateWasPressed, setCalculateWasPressed] = useState<boolean>(false)

  const onPressClear = () => {
    setCalculateWasPressed(false)
    setFirstNumber(undefined)
    setSecondNumber(undefined)
    setOperator(undefined)
  }

  const onPressToggleSign = () => {
    setCalculateWasPressed(false)

    const newNumber = parseFloat(firstNumber || '0')

    setFirstNumber(`${newNumber*-1}`)
  }

  const onPressRemoveLastCharacter = () => {
    setCalculateWasPressed(false)

    if (secondNumber) {
      const newvalue = secondNumber.slice(0, -1).length === 0? undefined : secondNumber.slice(0, -1);
      setSecondNumber(newvalue);
      return;
    }
    
    if (secondNumber === undefined && operator) {
      setOperator(undefined)
    }

    if (firstNumber && operator === undefined && secondNumber == undefined) {
      const newvalue = firstNumber.slice(0, -1).length === 0? undefined : firstNumber.slice(0, -1);
      setFirstNumber(newvalue)
    }
  }

  const onPressPercentage = () => {
    setCalculateWasPressed(false)
    if (secondNumber === undefined && operator) {
      return
    }

    if (secondNumber) {
      const a = parseFloat(secondNumber);
      const newvalue = `${a/100}`;
    } else {
      const a = parseFloat(firstNumber || '0');
      const newvalue = `${a/100}`;
      setFirstNumber(newvalue);
    }
  }

  const onPressOperator = (ope: Operator) => {
    setCalculateWasPressed(false)
    setOperator(ope)

    if (calculateWasPressed) {
      const result = calculate();
      (result == "Can't divide by zero")? setFirstNumber('0') : setFirstNumber(result);

      setSecondNumber(undefined)
    }
  }

  const onPressNumber = (number: string) => {
    setCalculateWasPressed(false)

    if (operator) {
        buildSecondNumber(number)
    } else {
        buildFirstNumber(number)
    }
  }

  const buildFirstNumber = (number: string) => {
    if (firstNumber?.includes('.') && number === '.') {
        return;
      }
  
      if (firstNumber?.startsWith('0') || firstNumber?.startsWith('-0')) {
        if (number === '.') {
          return setFirstNumber(firstNumber+number)
        }
        
        if (number==='0' && firstNumber.includes('.')) {
          return setFirstNumber(firstNumber+number)
        }
        
        if (number !== '0' && !firstNumber.includes('.')) {
          return setFirstNumber(number)
        }

        if (number === '0' && !firstNumber.includes('.')) {
          return;
        }
      }

      const value = firstNumber? `${firstNumber + number}` : number;
      setFirstNumber(value)
  }

  const buildSecondNumber = (number: string) => {
    if (secondNumber?.includes('.') && number === '.') {
        return;
      }

      if (secondNumber?.startsWith('0') || secondNumber?.startsWith('-0')) {
        if (number === '.') {
          return setSecondNumber(firstNumber+number)
        }

        if (number==='0' && secondNumber.includes('.')) {
          return setSecondNumber(firstNumber+number)
        }

        if (number !== '0' && !secondNumber.includes('.')) {
          return setSecondNumber(number)
        }

        if (number === '0' && !secondNumber.includes('.')) {
          return;
        }
      }

      const value = secondNumber? `${secondNumber + number}` : number;
      setSecondNumber(value)
  }

  const onPressCalculate = () => {
    const res = calculate();

    setCalculateWasPressed(true)
    setLastOperationResult(res)
  }

  const calculate = (): string => {
    const a = parseFloat(firstNumber || '0');
    const b = parseFloat(secondNumber || '0');

    if (operator === undefined) {
      return firstNumber || '0';
    }

    switch (operator) {
      case Operator.add:
        return `${a + b}`;
      case Operator.subtract:
        return `${a - b}`;
      case Operator.multiply:
        if (secondNumber === undefined) {
          return firstNumber || "0";
        }

        return `${a * b}`;
      case Operator.divide:
        if (secondNumber === undefined) return firstNumber || "0";
        if (secondNumber !== undefined && b === 0) return "Can't divide by zero";

        return `${a / b}`;
    }
  }

  const showOperationResult = (): boolean => {
    return (firstNumber !== undefined)
  }

  const showOperationBuild = (): string => {
    if (secondNumber) {
      return `${firstNumber}${operator}${secondNumber}`;
    }

    if (operator) {
      return `${firstNumber}${operator}`;
    }

    return firstNumber || "0";
  }

  const operationResult = (): string => {
    return `= ${calculate()}`
  }

  return {
    // props
    firstNumber,
    secondNumber,
    calculateWasPressed,

    // methods
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
  }
}