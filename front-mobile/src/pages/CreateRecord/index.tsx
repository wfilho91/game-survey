import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header } from '../../components/Header'

export function CreateRecord() {
  return (
    <>
      <Header />
      <Text style={styles.text}>Create  Record</Text>
    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff'
  }
})
