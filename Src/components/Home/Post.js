import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';
import {Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
const Post = ({post}) => {
  return (
    <View
      style={{
        marginBottom: 30,
      }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View
        style={{
          marginHorizontal: 10,
          marginTop: 10,
        }}>
        <PostFooter post={post} />
      </View>
      <PostLikes post={post} />
      <PostCaption post={post} />
      <PostCommentSection post={post} />
      <PostComment post={post} />
    </View>
  );
};

const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      marginLeft: 5,
      alignItems: 'center',
    }}>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: post.profile_picture,
        }}
        style={styles.story}
      />
      <Text
        style={{
          color: 'black',
          marginLeft: 5,
          fontWeight: '700',
          fontSize: 20,
        }}>
        {post.user}
      </Text>
    </View>
    <TouchableOpacity>
      <Icon
        style={styles.icon}
        name="ellipsis-horizontal-outline"
        size={20}
        color="#000"
      />
    </TouchableOpacity>
  </View>
);

const PostImage = ({post}) => {
  return(
    <View
      style={{
        width: '100%',
        height: 300,
        justifyContent: 'center',
      }}>
      <TouchableOpacity>
        <Image
          source={{
            uri: post.imageUrl,
          }}
          style={{
            height: '100%',
            resizeMode: 'cover',
          }}
        />
      </TouchableOpacity>
    </View>
  )
};

const PostFooter = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
    }}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '32%',
      }}>
      <TouchableOpacity>
        <Icon name="heart-outline" size={25} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="chatbubble-outline" size={25} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon
          style={styles.shareicon}
          name="send-outline"
          size={25}
          color="#000"
        />
      </TouchableOpacity>
    </View>
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
      }}>
      <TouchableOpacity>
        <Icon name="bookmark-outline" size={25} color="#000" />
      </TouchableOpacity>
    </View>
  </View>
);
const PostLikes = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      marginTop: 4,
      marginLeft: 15,
    }}>
    <Text
      style={{
        color: 'black',
        fontWeight: '600',
      }}>
      {post.likes.toLocaleString('en') + ' ' + 'likes'}
    </Text>
  </View>
);

const PostCaption = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      marginTop: 5,
      marginLeft: 15,
    }}>
    <Text
      style={{
        color: 'black',
        flexWrap: 'wrap',
        flex: 1,
      }}>
      <Text style={{fontWeight: '600'}}>{post.user}</Text>
      <Text> {post.caption} </Text>
    </Text>
  </View>
);

const PostCommentSection = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      marginTop: 5,
      marginLeft: 15,
    }}>
    {!!post.comments.length && (
      <Text
        style={{
          color: 'gray',
          flexWrap: 'wrap',
          flex: 1,
        }}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
        {post.comments.length > 1 ? 'commnets' : 'comment'}
      </Text>
    )}
  </View>
);
const PostComment = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View
        key={index}
        style={{
          flexDirection: 'row',
          marginTop: 5,
          marginLeft: 15,
        }}>
        <Text
          style={{
            color: 'black',
            flexWrap: 'wrap',
            flex: 1,
          }}>
          <Text
            style={{
              fontWeight: '600',
            }}>
            {comment.user}
          </Text>
          <Text> {comment.comment} </Text>
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
    borderRadius: 35,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  shareicon: {
    transform: [
      {
        rotate: '320deg',
      },
    ],
    marginTop: -3,
  },
});

export default Post;
