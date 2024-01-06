import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Page = () => {
  return (
    <View>
      <Link href={"/(modals)/login"}>
        <Text> Login </Text>
      </Link>
      <Link href={"/(modals)/booking"}>
        <Text> Book </Text>
      </Link>
      <Link href={"/listing/1337"}>
        <Text> Listing Details </Text>
      </Link>
    </View>
  )
}

export default Page