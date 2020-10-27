import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const Login = ({navigation}) => {
    console.log(navigation)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Home Screen
          </Text>
          <Button
            onPress={() => navigation.navigate('DrawerStackScreen', { screen: 'Homescreen' })}
            title="Go to Home Stack"
          />
          
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default Login;
