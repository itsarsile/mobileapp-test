import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import postsData from '../utils/mock/posts.json'
interface PostHeightMap {
  [index: number]: number;
}

export default function PostFeeds() {
  const navigation = useNavigation();
  const [postHeights, setPostHeights] = useState<PostHeightMap>({});
  const CHAR_TO_DISPLAY = 150;
  const handlePostLayout = (index: number, height: number) => {
    setPostHeights(prevHeights => ({
      ...prevHeights,
      [index]: height,
    }));
  };

  const calculatePostHeight = (index: number) => {
    return postHeights[index];
  };

//   //   Call mockdata

//   const postsData = [
//     {
//       link: 'post-detail',
//       image: 'https://picsum.photos/200',
//       author: 'Arsile',
//       date: 'Mar 27, 2023',
//       content:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
//     },
//     {
//       link: 'post-detail',
//       image: 'https://picsum.photos/300',
//       author: 'Arsile',
//       date: 'Mar 27, 2023',
//       content: 'Lorem ipsum dolor sit amet.',
//     },
//     {
//       link: 'post-detail',
//       image: 'https://picsum.photos/200',
//       author: 'Arsile',
//       date: 'Mar 27, 2023',
//       content:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci Nulla luctus in ipsum ac dictum. Integer et nunc ut tellus tinci, consectetur adipiscing elit. Nulla luctus in ipsum ac dictum.',
//     },
//   ];

  return (
    <>
      {postsData.map((post, index) => (
        <Pressable onPress={() => navigation.navigate(post.link)} key={index}>
          <View
            onLayout={e => {
              handlePostLayout(index, e.nativeEvent.layout.height);
            }}
            style={{height: calculatePostHeight(index)}}>
            <View
              style={{
                height: 64,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={{
                  uri: post.avatar,
                }}
                width={48}
                height={48}
                style={{borderRadius: 24, marginLeft: 24}}
              />
              <View style={{marginLeft: 16}}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 14,
                    lineHeight: 16.94,
                  }}>
                  {post.author}
                </Text>
                <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                  {new Date(post.date).toLocaleString()}
                </Text>
              </View>
            </View>
            <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
            <View>
              <View style={{margin: 24}}>
                <Text numberOfLines={3}>
                  {post.content.length > CHAR_TO_DISPLAY ? (
                    <>
                      {post.content.slice(0, CHAR_TO_DISPLAY)}{' '}
                      <Text style={{color: 'blue'}}>More...</Text>
                    </>
                  ) : (
                    <Text>{post.content}</Text>
                  )}
                </Text>
              </View>
              <Image
                source={{
                  uri: post.postImage,
                }}
                height={200}
              />
            </View>
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  source={IconShare}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Image
                  source={IconComment}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 4,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={IconBlock}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Pressable onPress={() => console.log('downvote')}>
                  <Image
                    source={IconDownvoteInactive}
                    height={18}
                    width={18}
                    style={{marginLeft: 24}}
                  />
                </Pressable>
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 11,
                    textAlign: 'center',
                  }}>
                  0
                </Text>
                <Pressable onPress={() => console.log('upvote')}>
                  <Image
                    source={IconUpvoteInactive}
                    height={18}
                    width={18}
                    style={{marginRight: 22}}
                  />
                </Pressable>
              </View>
            </View>
          </View>
          <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
        </Pressable>
      ))}
    </>
  );
}
