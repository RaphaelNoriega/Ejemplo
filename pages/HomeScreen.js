import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
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
            cambios realizados en la rama develop
          </Text>
          <Button
            onPress={() => navigation.navigate('SettingScreenStack')}
            title="Go to Setting Screen"
          />
          <Button
            onPress={() => navigation.navigate('ExploreScreen')}
            title="Go to Explore Screen"
          />
        </View>
        
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
