import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import api from '../services/api';

const Search = ({ navigation }) => {
  const [artist, setArtist] = useState('');
  const [musicName, setMusicName] = useState('');

  async function handleSearch() {
    const response = await api
      .get(`/${artist}/${musicName}`)
      .then(responseJson => {
        setArtist('');
        setMusicName('');
        navigation.navigate('Result', {
          response: responseJson.data,
          musicName,
          artist,
        });
      })
      .catch(error => {
        navigation.navigate('Result', { response: error.response.data });
      });
  }

  return (
    <KeyboardAvoidingView
      behavior="padding"
      enabled={Platform.OS === 'ios'}
      style={styles.container}
    >
      <Text h2 h2Style={{ marginBottom: 15, color: '#000' }}>
        Find Lyrics
      </Text>
      <Input
        inputStyle={{
          borderBottomColor: '#1db954',
          borderBottomWidth: 3,
          textAlign: 'center',
        }}
        placeholder="Artist name"
        value={artist}
        onChangeText={setArtist}
        autoCorrect={false}
      />
      <Input
        inputStyle={{
          padding: 15,
          borderBottomColor: '#1db954',
          borderBottomWidth: 3,
          textAlign: 'center',
        }}
        placeholder="Music name"
        value={musicName}
        onChangeText={setMusicName}
        autoCorrect={false}
      />
      <Button
        title="SEARCH"
        onPress={handleSearch}
        disabled={musicName.trim() === '' || artist.trim() === ''}
        containerStyle={{
          alignSelf: 'stretch',
          margin: 35,
        }}
        buttonStyle={{
          borderRadius: 50,
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
});

export default Search;
