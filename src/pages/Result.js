import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Text, Button, Card, Icon } from 'react-native-elements';

import axios from 'axios';

const Main = ({ navigation }) => {
  const res = navigation.getParam('response');
  let error = null;
  let info = null;
  let artist = null;
  let musicName = null;
  let lyric = null;

  if (res !== undefined) {
    if (res.error) {
      error = true;
    } else {
      error = false;
      artist = navigation.getParam('artist');
      musicName = navigation.getParam('musicName');
      lyric = res.lyrics;
    }
  }

  if (error !== null) {
    if (error) {
      info = (
        <Text h2 h2Style={{ marginBottom: 50 }}>
          Lyrics not found!
        </Text>
      );
    } else {
      info = (
        <>
          <Text
            h3
            h3Style={{
              marginBottom: 5,
              marginHorizontal: 20,
              textAlign: 'center',
            }}
          >
            Lyrics of {musicName}
          </Text>
          <Text h4 h4Style={{ marginBottom: 15, textAlign: 'center' }}>
            {artist}
          </Text>
          <ScrollView style={{ maxHeight: 400, minHeight: 200 }}>
            <Text style={{ paddingHorizontal: 30, textAlign: 'center' }}>
              {lyric}
            </Text>
          </ScrollView>
        </>
      );
    }
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: error === false ? 'space-around' : 'center',
      }}
    >
      {info !== null ? info : null}
      <View style={{ marginBottom: 20 }}>
        <Text
          h3
          h3Style={{
            color: '#1db954',
            textAlign: 'center',
          }}
        >
          {info == null ? 'Search Something' : 'Search Again'}
        </Text>
        <Button
          title="Go"
          onPress={() => navigation.navigate('Search')}
          containerStyle={{
            marginTop: 15,
            width: 100,
            alignSelf: 'center',
          }}
          buttonStyle={{
            borderRadius: 50,
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
