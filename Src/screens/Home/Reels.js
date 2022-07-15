/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {useState, useRef} from 'react';
import { StyleSheet, View, Platform, Dimensions, ScrollView } from 'react-native';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation';


const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Reels = () => {

    const data = [{id:0,video:'https://cdn.videvo.net/videvo_files/video/premium/video0321/large_watermarked/623_623-0235_preview.mp4'},{id:1,video:'https://cdn.videvo.net/videvo_files/video/premium/video0315/large_watermarked/601-2_601-9482_preview.mp4'},{id:2,video:'https://cdn.videvo.net/videvo_files/video/premium/getty_105/large_watermarked/istock-1083459308_preview.mp4'},{id:3,video:'https://cdn.videvo.net/videvo_files/video/premium/getty_142/large_watermarked/istock-1078247726_preview.mp4'}];
    const videoPlayer = useRef(null);
    const [duration, setDuration] = useState(0);
    const [paused, setPaused] = useState(true);

    const [currentTime, setCurrentTime] = useState(0);
    const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
    const [isLoading, setIsLoading] = useState(true);

    const onSeek = (seek) => {
        videoPlayer?.current.seek(seek);
    };

    const onSeeking = (currentVideoTime) => setCurrentTime(currentVideoTime);

    const onPaused = (newState) => {
        setPaused(!paused);
        setPlayerState(newState);
    };

    const onReplay = () => {
        videoPlayer?.current.seek(0);
        setCurrentTime(0);
        if (Platform.OS === 'android') {
            setPlayerState(PLAYER_STATES.PAUSED);
            setPaused(true);
        } else {
            setPlayerState(PLAYER_STATES.PLAYING);
            setPaused(false);
        }
    };

    const onProgress = (data) => {
        if (!isLoading) {
            setCurrentTime(data.currentTime);
        }
    };

    const onLoad = (data) => {
        setDuration(Math.round(data.duration));
        setIsLoading(false);
    };

    const onLoadStart = () => setIsLoading(true);

    const onEnd = () => {
        setPlayerState(PLAYER_STATES.ENDED);
        setCurrentTime(duration);
    };


    const [isFullScreen, setIsFullScreen] = useState(false);

    const onFullScreen = () => {
        if (!isFullScreen) {
          Orientation.lockToLandscape();
        } else {
          Orientation.lockToPortrait();
        }
        setIsFullScreen(!isFullScreen);
    };

    return (
        <ScrollView style={{flex:1}}>
            {
                data.map((data,id)=>{
                    return(
                        <View style={{height:screenHeight*0.9,width:screenWidth,alignItems:'center',justifyContent:'center'}}>
                            <Video
                                onEnd={onEnd}
                                onLoad={onLoad}
                                onLoadStart={onLoadStart}
                                posterResizeMode={'cover'}
                                onProgress={onProgress}
                                paused={paused}
                                key={id}
                                ref={(ref) => (videoPlayer.current = ref)}
                                resizeMode={'cover'}
                                source={{uri:data.video}}
                                style={styles.backgroundVideo}
                            />
                            <MediaControls
                                isFullScreen={isFullScreen}
                                duration={duration}
                                isLoading={isLoading}
                                progress={currentTime}
                                onFullScreen={onFullScreen}
                                onPaused={onPaused}
                                onReplay={onReplay}
                                onSeek={onSeek}
                                onSeeking={onSeeking}
                                mainColor={'green'}
                                playerState={playerState}
                                style={isFullScreen ? styles.backgroundVideoFullScreen : styles.backgroundVideo}
                                sliderStyle={isFullScreen ? { containerStyle: styles.mediaControls, thumbStyle: {}, trackStyle: {} } : { containerStyle: {}, thumbStyle: {}, trackStyle: {} }}
                            />
                        </View>
                    )
                }
                )
            }
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    backgroundVideo: {
        height: '100%',
        width: '100%',
    },
    mediaControls: {
        width: screenHeight - 170,
        height: '100%',
        flex: 1,
        alignSelf: Platform.OS === 'android' ? screenHeight < 800 ? 'center' : 'flex-start' : 'center',
    },
    backgroundVideoFullScreen: {
        height: screenHeight,
        width: screenWidth,
    },
});

export default Reels;
