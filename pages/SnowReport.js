import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    display: 'flex',
    height: '80%'
  }
})



const SnowReport = (props) => {
  console.log(props.snowReportData)
  return (
    <View style={styles.page}>
      <Text>Snow</Text>
    </View>
  )
}


export default SnowReport;