import { Text, type TextProps } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'

interface Props extends TextProps {
    // children: string
    variant: 'h1' | 'h2'
}

export default function TextField({children, variant = 'h2',...props}: Props) {
  return (
    <Text
      style={[
        { color: 'white', fontFamily: 'SpaceMono' },
        // variant == 'h1' && globalStyles.result, 
        // variant == 'h1' && globalStyles.subResult,
        variant == 'h1'? globalStyles.result : globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...props}
    >
      {children}
    </Text>
  )
}