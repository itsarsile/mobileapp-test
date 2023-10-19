import { useNavigation } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView
} from 'react-native';
import PostFeeds from '../components/PostFeeds';


function FeedScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <PostFeeds />
      </ScrollView>
    </SafeAreaView>
  );
}

export default FeedScreen;
