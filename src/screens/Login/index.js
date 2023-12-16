import React, { useState } from 'react';
import { View, Image, TextInput, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import Images from '../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

const Index = () => {
  // State for TextInput
  const [name, onChangeName] = useState('');
  const [mobNo, onChangeMobNo] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelection = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <ImageBackground source={Images.bgg1} resizeMode={'cover'} style={styles.container}>
      {/* Logo */}
      <Image style={styles.logo} source={Images.logo} />

      {/* TextInput 1 */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={onChangeName}
        value={name}
      />

      {/* TextInput 2 */}
      <TextInput
        style={styles.input}
        placeholder="Mob no."
        onChangeText={onChangeMobNo}
        value={mobNo}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedGender === 'male' && styles.selectedButton,
          ]}
          onPress={() => handleGenderSelection('male')}
        >
          <Text style={[styles.buttonText, { color: selectedGender === 'male' ? '#ffffff' : '#000000' }]}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            selectedGender === 'female' && styles.selectedButton,
            { marginLeft: 40 }]}
          onPress={() => handleGenderSelection('female')}
        >
          <Text style={[styles.buttonText, { color: selectedGender === 'female' ? '#ffffff' : '#000000' }]}>Female</Text>
        </TouchableOpacity>
      </View>

      <LinearGradient colors={['#FC210D', '#450A3B']} style={{
        height: 50,
        borderRadius: 5,
        backgroundColor: '#e71616',
        position: 'absolute',
        bottom: 40,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 80,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}>
        <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: '600' }}>Next</Text>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginBottom: 60, // Add some margin between logo and text inputs
  },
  input: {
    height: 55,
    marginVertical: 10,
    padding: 10,
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  container1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,

  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 53,
    borderRadius: 5,
    // borderWidth: 1,
    borderColor: '#333',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedButton: {
    backgroundColor: '#e71616', // Change the color when selected
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  selectedGenderText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
