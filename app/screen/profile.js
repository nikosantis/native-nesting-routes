import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Profile</Text>
      <Button
        title='Settings'
        onPress={() => navigation.navigate('SettingProfile')}
      />
    </View>
  );
};

export default Profile;
