import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Animated, SafeAreaView, Image} from 'react-native';

import { createMaterialTopTabNavigator} from 'react-navigation';

export default class App extends Component {
  render (){
    return(
      <SafeAreaView style={{flex: 1, marginTop: 20}}> 
    <AppTabNavigator/>
      </SafeAreaView>
    )
  }
}


class DetailScreen extends Component {

  render() {
    return (
		<View style={{ flex: 1, marginTop: 40, flexDirection: 'column', width: '100%', alignContent:  'center' }}>
			<TextInput
          style={styles.textInput}
				placeholder="Product Name"
			/>
        <TextInput
          style={styles.textInput}

          placeholder="Product Category"
        />
        <TextInput
          style={styles.textInput}

          placeholder="Product Cost Price"
        />
        <TextInput
          style={styles.textInput}

          placeholder="Product Selling Price"
        />
        <TextInput
          style={styles.textInput}

          placeholder="Product Quantity"
        />
        <TextInput
          style={styles.textInput}

          placeholder="Product Limit"
        />
        <TextInput
          style={styles.textInput}

          placeholder="Expiry Date"
        />

        <View style={{ marginTop: 60, marginRight: 20, alignItems: 'flex-end'}}>
          <Button title="Continue" color="black" width='100%'/>
        </View>
		</View>
    
	);
  }
  
}

class MoreScreen extends Component {

  render() {
    return (
		<View style={{ flex: 1, marginTop: 40, flexDirection: 'column', width: '100%' }}>
			<TextInput
          style={styles.textInput}
				placeholder="Product Discoumt"
			/>

			<TextInput
          style={styles.textInput}
				placeholder="Product Tax"
			/>

			<TextInput
          style={styles.textInput}
				placeholder="Product Weight"
			/>

			<TextInput
          style={styles.text}
				placeholder="Product Description"
			/>

			<TextInput
          style={styles.textInput}
				placeholder="Red"
			/>

			<TextInput
          style={styles.textInput}
				placeholder="5"
			/>

			<TextInput
				style={styles.textInput}
				placeholder="2"
			/>
			<View style={{ marginTop: 20, marginRight: 20, alignItems: 'flex-end' , flexDirection: 'column', justifyContent: 'space-between', marginVertical: 10}}>
          <Button title="Done" color="#FFCBA4" width="100%"  />
          <View style={{ marginTop: 20}}><Button title="Continue" color="black" width="100%" /></View>
			</View>

			
		</View>
	);
  }

}

class BarcodeScreen extends Component {
  render () {
    return (
		<View style={{ flex: 1, marginTop: 40, flexDirection: 'column', width: '100%' }}>
			<TextInput style={styles.text} placeholder="Enter Barcode Digits" />
			<Text
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 200,
					marginLeft: 'auto',
					marginBottom: 10,
					marginRight: 'auto',
				}}
			>
				Or
			</Text>
      

        <Image style={{ width: 90, height: 90 , alignItems: 'center', padding: 20}} source={require('C:/xampp/htdocs/Projects/rn-first-app/assets/Group2.png')} />
			
		</View>
	);
  }
}




const AppTabNavigator = createMaterialTopTabNavigator({
 Detail: {screen: DetailScreen},
  MoreDetail: {screen: MoreScreen},
  Barcode: {screen: BarcodeScreen}
}, 
{
  initialRouteName: 'Detail',
  order: ['Detail', 'MoreDetail', 'Barcode'],
  activeTintColor: 'orange',
})

  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	textInput: {
		height: 40,
		backgroundColor: '#FFCBA4',
		fontSize: 20,
		marginTop: 20,
		alignItems: 'center',
		marginLeft: 20,
		marginRight: 20,
		padding: 10,
	},

	text: {
    height: 80,
    backgroundColor: '#FFCBA4',
    fontSize: 20,
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
	},
});