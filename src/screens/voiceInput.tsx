// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Animated,
//   Easing,
//   Platform,
//   Alert,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import AudioRecorderPlayer from 'react-native-audio-recorder-player';
//   import {useNavigation} from '@react-navigation/native';
// import {NavigationProp} from '@react-navigation/native';
// import {RootStackParamList} from '../utils/types';

// const audioRecorderPlayer = new AudioRecorderPlayer();

// function VoiceInputScreen() {
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();
//   const [isListening, setIsListening] = useState(false);
//   const [transcript, setTranscript] = useState('');
//   const recordingRef = useRef<Audio.Recording | null>(null);
//   const [hasPermission, setHasPermission] = useState<boolean | null>(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const silenceTimer = useRef<NodeJS.Timeout | null>(null);

//   // Animated values for dots
//   const dot1 = useState(new Animated.Value(1))[0];
//   const dot2 = useState(new Animated.Value(1))[0];
//   const dot3 = useState(new Animated.Value(1))[0];
//   const dot4 = useState(new Animated.Value(1))[0];

//   useEffect(() => {
//     const requestPermission = async () => {
//       const { status } = await Audio.requestPermissionsAsync();
//       setHasPermission(status === "granted");
//     };

//     requestPermission();
//     startRecording(); // Start recording immediately when screen opens

//     return () => {
//       stopRecording();
//       if (silenceTimer.current) clearTimeout(silenceTimer.current);
//     };
//   }, []);

//   useEffect(() => {
//     if (isListening) {
//       animateDots();
//       startSilenceDetection();
//     } else {
//       stopAnimateDots();
//       if (silenceTimer.current) clearTimeout(silenceTimer.current);
//     }
//   }, [isListening]);

//   const animateDots = () => {
//     const duration = 1500;
//     const delay = 200;

//     const createAnimation = (value: Animated.Value, delay: number) => {
//       return Animated.sequence([
//         Animated.delay(delay),
//         Animated.loop(
//           Animated.sequence([
//             Animated.timing(value, {
//               toValue: 1,
//               duration: duration,
//               useNativeDriver: true,
//               easing: Easing.inOut(Easing.ease),
//             }),
//             Animated.timing(value, {
//               toValue: 0.3,
//               duration: duration,
//               useNativeDriver: true,
//               easing: Easing.inOut(Easing.ease),
//             }),
//           ])
//         ),
//       ]).start();
//     };

//     createAnimation(dot1, 0);
//     createAnimation(dot2, delay);
//     createAnimation(dot3, delay * 2);
//     createAnimation(dot4, delay * 3);
//   };

//   const stopAnimateDots = () => {
//     [dot1, dot2, dot3, dot4].forEach((dot) => dot.stopAnimation());
//   };

//   const startSilenceDetection = () => {
//     if (silenceTimer.current) clearTimeout(silenceTimer.current);

//     silenceTimer.current = setTimeout(() => {
//       if (isListening) {
//         stopRecording();
//       }
//     }, 3000);
//   };

//   const resetSilenceTimer = () => {
//     if (silenceTimer.current) clearTimeout(silenceTimer.current);
//     startSilenceDetection();
//   };

//   const startRecording = async () => {
//     try {
//       if (hasPermission === false) {
//         Alert.alert(
//           "Permission required",
//           "Microphone access is needed for voice input"
//         );
//         return;
//       }

//       // Stop any existing recording first
//       if (recordingRef.current) {
//         await stopRecording();
//       }

//       setIsListening(true);
//       setTranscript("Speak Now");

//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: true,
//         playsInSilentModeIOS: true,
//       });

//       const { recording } = await Audio.Recording.createAsync(
//         Audio.RecordingOptionsPresets.HIGH_QUALITY
//       );
//       recordingRef.current = recording;

//       // Simulate voice detection
//       const simulateVoice = () => {
//         if (isListening && Math.random() > 0.5) {
//           resetSilenceTimer();
//           setTranscript(
//             "Listening... " +
//               new Array(Math.floor(Math.random() * 5 + 1)).fill(".").join("")
//           );
//         }
//         if (isListening) {
//           setTimeout(simulateVoice, 500);
//         }
//       };
//       simulateVoice();
//     } catch (error) {
//       console.error("Failed to start recording", error);
//       setIsListening(false);
//       recordingRef.current = null;
//       handleError(error instanceof Error ? error : new Error(String(error)));
//     }
//   };

//   const stopRecording = async () => {
//     try {
//       if (!isListening) return;

//       setIsListening(false);
//       setIsProcessing(true);
//       setTranscript("Processing...");

//       if (!recordingRef.current) return;

//       await recordingRef.current.stopAndUnloadAsync();
//       await Audio.setAudioModeAsync({
//         allowsRecordingIOS: false,
//       });
//       recordingRef.current = null;

//       // Simulate processing
//       setTimeout(() => {
//         const demoResponses = [
//           "Play latest Taylor Swift song",
//           "What's the weather today?",
//           "Set a timer for 5 minutes",
//           "Call mom",
//           "Navigate to nearest coffee shop",
//         ];
//         const demoTranscript =
//           demoResponses[Math.floor(Math.random() * demoResponses.length)];
//         setTranscript(demoTranscript);
//         handleTranscriptResult(demoTranscript);
//         setIsProcessing(false);
//       }, 1500);
//     } catch (error) {
//       console.error("Failed to stop recording", error);
//       handleError(error instanceof Error ? error : new Error(String(error)));
//       setIsProcessing(false);
//     }
//   };

//   const handleBackPress = () => {
//     if (isListening) {
//       stopRecording();
//     } else {
//       navigation.goBack();
//     }
//   };

//   const dotStyle = (animatedValue: Animated.Value) => ({
//     opacity: animatedValue.interpolate({
//       inputRange: [0, 1],
//       outputRange: [0.3, 1],
//     }),
//     transform: [
//       {
//         scale: animatedValue.interpolate({
//           inputRange: [0, 1],
//           outputRange: [0.8, 1.2],
//         }),
//       },
//     ],
//   });

//   const handleTranscriptResult = (text: string) => {
//     navigation.navigate('SearchBar', {query: text});
//   };

//   const handleError = (error: Error) => {
//     console.error('Error:', error);
//     Alert.alert('Error', 'Failed to process voice input');
//     navigation.goBack();
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
//           <MaterialIcons
//             name={isListening ? "stop" : "arrow-back"}
//             size={24}
//             color="#e8eaed"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.languageButton}>
//           <MaterialIcons name="language" size={24} color="#e8eaed" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.content}>
//         {/* <Text style={styles.title}>
//           {isProcessing
//             ? "Processing..."
//             : isListening
//             ? "Speak now"
//             : "Voice search"}
//         </Text> */}
//         <Text style={styles.transcript}>{transcript}</Text>

//         {isListening && (
//           <View style={styles.dotsContainer}>
//             <Animated.View
//               style={[styles.dot, styles.blueDot, dotStyle(dot1)]}
//             />
//             <Animated.View
//               style={[styles.dot, styles.redDot, dotStyle(dot2)]}
//             />
//             <Animated.View
//               style={[styles.dot, styles.yellowDot, dotStyle(dot3)]}
//             />
//             <Animated.View
//               style={[styles.dot, styles.greenDot, dotStyle(dot4)]}
//             />
//           </View>
//         )}

//         <TouchableOpacity
//           style={[
//             styles.searchSongButton,
//             isProcessing && styles.disabledButton,
//           ]}
//           onPress={() => {}}
//           disabled={isProcessing}
//         >
//           <MaterialIcons name="music-note" size={20} color="#e8eaed" />
//           <Text style={styles.searchSongText}>Search a song</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#202124",
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 16,
//     paddingTop: Platform.OS === "ios" ? 50 : 16,
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#303134",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   languageButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: "#303134",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   content: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingBottom: 100,
//   },
//   title: {
//     color: "#e8eaed",
//     fontSize: 32,
//     marginBottom: 20,
//   },
//   transcript: {
//     color: "#9AA0A6",
//     fontSize: 16,
//     marginBottom: 40,
//     textAlign: "center",
//     paddingHorizontal: 40,
//   },
//   dotsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     height: 50,
//     marginBottom: 40,
//   },
//   dot: {
//     width: 12,
//     height: 12,
//     borderRadius: 6,
//     marginHorizontal: 6,
//   },
//   blueDot: {
//     backgroundColor: "#4285F4",
//   },
//   redDot: {
//     backgroundColor: "#EA4335",
//   },
//   yellowDot: {
//     backgroundColor: "#FBBC05",
//   },
//   greenDot: {
//     backgroundColor: "#34A853",
//   },
//   searchSongButton: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#303134",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 20,
//   },
//   disabledButton: {
//     opacity: 0.5,
//   },
//   searchSongText: {
//     color: "#e8eaed",
//     marginLeft: 8,
//     fontSize: 16,
//   },
// });

// export default VoiceInputScreen;

////

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../utils/types';
import RNFS from 'react-native-fs';

const audioRecorderPlayer = new AudioRecorderPlayer();

function VoiceInputScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const silenceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dot1 = useState(new Animated.Value(1))[0];
  const dot2 = useState(new Animated.Value(1))[0];
  const dot3 = useState(new Animated.Value(1))[0];
  const dot4 = useState(new Animated.Value(1))[0];

  useEffect(() => {
    requestPermissions();
    startRecording();

    return () => {
      stopRecording();
      if (silenceTimer.current) clearTimeout(silenceTimer.current);
    };
  }, []);

  useEffect(() => {
    if (isListening) {
      animateDots();
      startSilenceDetection();
    } else {
      stopAnimateDots();
      if (silenceTimer.current) clearTimeout(silenceTimer.current);
    }
  }, [isListening]);

  const requestPermissions = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]);
        const recordGranted =
          granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED;
        if (!recordGranted) {
          Alert.alert('Permission denied', 'Cannot access microphone.');
        }
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const startRecording = async () => {
    try {
      setIsListening(true);
      setTranscript('Speak Now');

      const path = Platform.select({
        ios: 'voice.m4a',
        android: `${RNFS.ExternalDirectoryPath}/voice.mp4`,
      });

      await audioRecorderPlayer.startRecorder(path!);

      // Simulate voice detection
      const simulateVoice = () => {
        if (isListening && Math.random() > 0.5) {
          resetSilenceTimer();
          setTranscript(
            'Listening... ' + new Array(Math.floor(Math.random() * 5 + 1)).fill('.').join('')
          );
        }
        if (isListening) {
          setTimeout(simulateVoice, 500);
        }
      };
      simulateVoice();
    } catch (error) {
      console.error('Failed to start recording', error);
      setIsListening(false);
      handleError(error instanceof Error ? error : new Error(String(error)));
    }
  };

  const stopRecording = async () => {
    try {
      if (!isListening) return;

      setIsListening(false);
      setIsProcessing(true);
      setTranscript('Processing...');

      await audioRecorderPlayer.stopRecorder();
      audioRecorderPlayer.removeRecordBackListener();

      setTimeout(() => {
        const demoResponses = [
          'Play latest Taylor Swift song',
          "What's the weather today?",
          'Set a timer for 5 minutes',
          'Call mom',
          'Navigate to nearest coffee shop',
        ];
        const demoTranscript = demoResponses[Math.floor(Math.random() * demoResponses.length)];
        setTranscript(demoTranscript);
        handleTranscriptResult(demoTranscript);
        setIsProcessing(false);
      }, 1500);
    } catch (error) {
      console.error('Failed to stop recording', error);
      handleError(error instanceof Error ? error : new Error(String(error)));
      setIsProcessing(false);
    }
  };

  const animateDots = () => {
    const duration = 1500;
    const delay = 200;

    const createAnimation = (value: Animated.Value, delay: number) => {
      return Animated.sequence([
        Animated.delay(delay),
        Animated.loop(
          Animated.sequence([
            Animated.timing(value, {
              toValue: 1,
              duration: duration,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.ease),
            }),
            Animated.timing(value, {
              toValue: 0.3,
              duration: duration,
              useNativeDriver: true,
              easing: Easing.inOut(Easing.ease),
            }),
          ])
        ),
      ]).start();
    };

    createAnimation(dot1, 0);
    createAnimation(dot2, delay);
    createAnimation(dot3, delay * 2);
    createAnimation(dot4, delay * 3);
  };

  const stopAnimateDots = () => {
    [dot1, dot2, dot3, dot4].forEach(dot => dot.stopAnimation());
  };

  const startSilenceDetection = () => {
    if (silenceTimer.current) clearTimeout(silenceTimer.current);
    silenceTimer.current = setTimeout(() => {
      if (isListening) stopRecording();
    }, 3000);
  };

  const resetSilenceTimer = () => {
    if (silenceTimer.current) clearTimeout(silenceTimer.current);
    startSilenceDetection();
  };

  const handleBackPress = () => {
    if (isListening) {
      stopRecording();
    } else {
      navigation.goBack();
    }
  };

  const dotStyle = (animatedValue: Animated.Value) => ({
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.3, 1],
    }),
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0.8, 1.2],
        }),
      },
    ],
  });

  const handleTranscriptResult = (text: string) => {
    navigation.navigate('SearchBar', {query: text});
  };

  const handleError = (error: Error) => {
    console.error('Error:', error);
    Alert.alert('Error', 'Failed to process voice input');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <MaterialIcons name={isListening ? 'stop' : 'arrow-back'} size={24} color="#e8eaed" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <MaterialIcons name="language" size={24} color="#e8eaed" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.transcript}>{transcript}</Text>

        {isListening && (
          <View style={styles.dotsContainer}>
            <Animated.View style={[styles.dot, styles.blueDot, dotStyle(dot1)]} />
            <Animated.View style={[styles.dot, styles.redDot, dotStyle(dot2)]} />
            <Animated.View style={[styles.dot, styles.yellowDot, dotStyle(dot3)]} />
            <Animated.View style={[styles.dot, styles.greenDot, dotStyle(dot4)]} />
          </View>
        )}

        <TouchableOpacity
          style={[styles.searchSongButton, isProcessing && styles.disabledButton]}
          onPress={() => {}}
          disabled={isProcessing}>
          <MaterialIcons name="music-note" size={20} color="#e8eaed" />
          <Text style={styles.searchSongText}>Search a song</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#202124'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#303134',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    width: 40,
    height: 40,
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: '#303134',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  transcript: {
    color: '#9AA0A6',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    marginBottom: 40,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  blueDot: {backgroundColor: '#4285F4'},
  redDot: {backgroundColor: '#EA4335'},
  yellowDot: {backgroundColor: '#FBBC05'},
  greenDot: {backgroundColor: '#34A853'},
  searchSongButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  disabledButton: {opacity: 0.5},
  searchSongText: {
    color: '#e8eaed',
    marginLeft: 8,
    fontSize: 16,
  },
});

export default VoiceInputScreen;
