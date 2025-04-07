// import React, {useEffect, useState, useRef} from 'react';
// import {View, Text, StyleSheet, TouchableOpacity, Image, Platform} from 'react-native';
// import {Camera, useCameraDevices} from 'react-native-vision-camera';
// import ImagePicker from 'react-native-image-crop-picker';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation} from '@react-navigation/native';
// import {NavigationProp} from '@react-navigation/native';
// import {RootStackParamList} from '../utils/types';
// import ImageCropPicker from 'react-native-image-crop-picker';

// export default function CameraScreen() {
//   const [hasPermission, setHasPermission] = useState(false);
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const cameraRef = useRef<Camera>(null);
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   const devices = useCameraDevices();
//   const device = devices.find(device => device.position === 'back');

//   useEffect(() => {
//     (async () => {
//       const status = await Camera.requestCameraPermission();
//       setHasPermission(status === 'granted');
//     })();
//   }, []);

//   const takePicture = async () => {
//     if (cameraRef.current == null) return;
//     const photo = await cameraRef.current.takePhoto({
//       flash: 'off',
//     });
//     setCapturedImage(`file://${photo.path}`);
//   };

//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true,
//       });
//       setCapturedImage(result.path);
//     } catch (error) {
//       console.log('Gallery Error', error);
//     }
//   };
//   const cropImage = async () => {
//     try {
//       const cropped = await ImageCropPicker.openCropper({
//         path: capturedImage || '',
//         width: 300,
//         height: 400,
//         cropping: true,
//         mediaType: 'photo',
//       });
//       setCapturedImage(cropped.path);
//       if (capturedImage) {
//         useImage();
//       }
//     } catch (error) {
//       console.log('Crop canceled or failed:', error);
//     }
//   };

//   const useImage = () => {
//     if (capturedImage) {
//       navigation.navigate('ImageResults', {imageUri: capturedImage});
//     }
//   };

//   if (!device || !hasPermission) {
//     return (
//       <View style={styles.container}>
//         <Text style={{textAlign: 'center'}}>Camera not available or permission not granted.</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {capturedImage ? (
//         <View style={styles.previewContainer}>
//           {/* Crop button in top-right */}

//           <TouchableOpacity style={styles.cropButton} onPress={cropImage}>
//             <MaterialIcons name="crop" size={30} color="#fff" />
//           </TouchableOpacity>
//           <Image source={{uri: capturedImage}} style={styles.previewImage} />
//           <View style={styles.buttonRow}>
//             <TouchableOpacity onPress={() => setCapturedImage(null)} style={styles.actionButton}>
//               <Text style={styles.buttonText}>Retake</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={useImage}
//               style={[styles.actionButton, styles.primaryButton]}>
//               <Text style={styles.buttonText}>Use Photo</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ) : (
//         <View style={StyleSheet.absoluteFill}>
//           <Camera
//             ref={cameraRef}
//             style={StyleSheet.absoluteFill}
//             device={device}
//             isActive={true}
//             photo={true}
//           />
//           <View style={styles.overlay}>
//             <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
//               <MaterialIcons name="photo-library" size={30} color="#fff" />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
//               <View style={styles.captureButtonInner} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {flex: 1, backgroundColor: '#000'},
//   camera: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     marginTop: 20,
//   },
//   buttonContainer: {
//     position: 'absolute', // <- add this!
//     bottom: 30,
//     left: 0,
//     right: 0,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },

//   previewContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   previewImage: {
//     width: '90%',
//     height: '70%',
//     borderRadius: 10,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginTop: 20,
//   },
//   actionButton: {
//     padding: 15,
//     borderRadius: 8,
//     backgroundColor: '#f1f3f4',
//   },
//   primaryButton: {
//     backgroundColor: '#4285F4',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#202124',
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 40,
//     left: 0,
//     right: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     zIndex: 999,
//     paddingHorizontal: 30,
//   },
//   cropButton: {
//     position: 'absolute',
//     top: 40,
//     right: 20,
//     zIndex: 10,
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     padding: 10,
//     borderRadius: 30,
//   },

//   iconButton: {
//     backgroundColor: 'rgba(0,0,0,0.6)',
//     padding: 12,
//     borderRadius: 30,
//   },

//   captureButton: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   captureButtonInner: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#fff',
//     borderWidth: 4,
//     borderColor: '#000',
//   },
// });

///

import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../utils/types';
import ImageCropPicker from 'react-native-image-crop-picker';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const cameraRef = useRef<Camera>(null);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const devices = useCameraDevices();
  const [currentDevice, setCurrentDevice] = useState(
    devices.find(device => device.position === 'back'),
  );

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef.current == null) return;
    const photo = await cameraRef.current.takePhoto({
      flash: 'off',
    });
    setCapturedImage(`file://${photo.path}`);
  };

  const flipCamera = () => {
    setCurrentDevice(prevDevice =>
      prevDevice?.position === 'back'
        ? devices.find(device => device.position === 'front')
        : devices.find(device => device.position === 'back'),
    );
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      setCapturedImage(result.path);
    } catch (error) {
      console.log('Gallery Error', error);
    }
  };

  const cropImage = async () => {
    try {
      const cropped = await ImageCropPicker.openCropper({
        path: capturedImage || '',
        width: 300,
        height: 400,
        cropping: true,
        mediaType: 'photo',
      });
      setCapturedImage(cropped.path);
      if (capturedImage) {
        useImage();
      }
    } catch (error) {
      console.log('Crop canceled or failed:', error);
    }
  };

  const useImage = () => {
    if (capturedImage) {
      navigation.navigate('ImageResults', {imageUri: capturedImage});
    }
  };

  if (!currentDevice || !hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={{textAlign: 'center'}}>
          Camera not available or permission not granted.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {capturedImage ? (
        <View style={styles.previewContainer}>
          <TouchableOpacity style={styles.cropButton} onPress={cropImage}>
            <MaterialIcons name="crop" size={30} color="#fff" />
          </TouchableOpacity>
          <Image source={{uri: capturedImage}} style={styles.previewImage} />
          <View style={styles.buttonRow}>
            <TouchableOpacity
              onPress={() => setCapturedImage(null)}
              style={styles.actionButton}>
              <Text style={styles.buttonText}>Retake</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={useImage}
              style={[styles.actionButton, styles.primaryButton]}>
              <Text style={styles.buttonText}>Use Photo</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={StyleSheet.absoluteFill}>
          <Camera
            ref={cameraRef}
            style={StyleSheet.absoluteFill}
            device={currentDevice}
            isActive={true}
            photo={true}
          />
          <View style={styles.overlay}>
            <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
              <MaterialIcons name="photo-library" size={30} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={takePicture}
              style={styles.captureButton}>
              <View style={styles.captureButtonInner} />
            </TouchableOpacity>
            <TouchableOpacity onPress={flipCamera} style={styles.flipButton}>
              <MaterialIcons
                name="flip-camera-android"
                size={30}
                color="#fff"
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  previewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  previewImage: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconButton: {
    padding: 10,
  },
  captureButton: {
    alignSelf: 'center',
  },
  captureButtonInner: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#fff',
  },
  flipButton: {
    padding: 10,
  },
  cropButton: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 20,
    right: 20,
    zIndex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 20,
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  actionButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#f1f3f4',
  },
  primaryButton: {
    backgroundColor: '#4285F4',
  },
  buttonText: {
    fontSize: 16,
    color: '#202124',
  },
});

//// alternate

// import React, {useRef, useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   PermissionsAndroid,
//   Platform,
// } from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import ImagePicker from 'react-native-image-crop-picker';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import {useNavigation} from '@react-navigation/native';
// import {NavigationProp} from '@react-navigation/native';
// import {RootStackParamList} from '../utils/types';

// export default function CameraScreen() {
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [type, setType] = useState(RNCamera.Constants.Type.back);
//   const cameraRef = useRef<RNCamera>(null);
//   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

//   const requestPermissions = async () => {
//     if (Platform.OS === 'android') {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       ]);
//       return (
//         granted['android.permission.CAMERA'] === 'granted' &&
//         granted['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
//       );
//     }
//     return true;
//   };

//   const takePicture = async () => {
//     const hasPermission = await requestPermissions();
//     if (!hasPermission || !cameraRef.current) return;

//     const options = {quality: 0.8, base64: false};
//     const data = await cameraRef.current.takePictureAsync(options);
//     setCapturedImage(data.uri);
//   };

//   const pickImage = async () => {
//     try {
//       const result = await ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true,
//       });
//       setCapturedImage(result.path);
//     } catch (error) {
//       console.log('Gallery Error:', error);
//     }
//   };

//   const cropImage = async () => {
//     try {
//       if (capturedImage) {
//         const cropped = await ImagePicker.openCropper({
//           path: capturedImage,
//           width: 300,
//           height: 400,
//           mediaType: 'photo',
//         });
//         setCapturedImage(cropped.path);
//         useImage();
//       }
//     } catch (error) {
//       console.log('Crop Error:', error);
//     }
//   };

//   const useImage = () => {
//     if (capturedImage) {
//       navigation.navigate('ImageResults', {imageUri: capturedImage});
//     }
//   };

//   const flipCamera = () => {
//     setType((prev: any) =>
//       prev === RNCamera.Constants.Type.back
//         ? RNCamera.Constants.Type.front
//         : RNCamera.Constants.Type.back,
//     );
//   };
//   return (
//     <View style={styles.container}>
//       {capturedImage ? (
//         <View style={styles.previewContainer}>
//           <TouchableOpacity style={styles.cropButton} onPress={cropImage}>
//             <MaterialIcons name="crop" size={30} color="#fff" />
//           </TouchableOpacity>
//           <Image source={{uri: capturedImage}} style={styles.previewImage} />
//           <View style={styles.buttonRow}>
//             <TouchableOpacity
//               onPress={() => setCapturedImage(null)}
//               style={styles.actionButton}>
//               <Text style={styles.buttonText}>Retake</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={useImage}
//               style={[styles.actionButton, styles.primaryButton]}>
//               <Text style={styles.buttonText}>Use Photo</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       ) : (
//         <RNCamera
//           ref={cameraRef}
//           style={StyleSheet.absoluteFill}
//           type={type}
//           captureAudio={false}>
//           <View style={styles.overlay}>
//             <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
//               <MaterialIcons name="photo-library" size={30} color="#fff" />
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={takePicture}
//               style={styles.captureButton}>
//               <View style={styles.captureButtonInner} />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={flipCamera} style={styles.flipButton}>
//               <MaterialIcons
//                 name="flip-camera-android"
//                 size={30}
//                 color="#fff"
//               />
//             </TouchableOpacity>
//           </View>
//         </RNCamera>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   previewContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000',
//   },
//   previewImage: {
//     width: '90%',
//     height: '70%',
//     borderRadius: 10,
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 30,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//   },
//   iconButton: {
//     padding: 10,
//   },
//   captureButton: {
//     alignSelf: 'center',
//   },
//   captureButtonInner: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     backgroundColor: '#fff',
//   },
//   flipButton: {
//     padding: 10,
//   },
//   cropButton: {
//     position: 'absolute',
//     top: Platform.OS === 'ios' ? 50 : 20,
//     right: 20,
//     zIndex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     borderRadius: 20,
//     padding: 10,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '100%',
//     marginTop: 20,
//   },
//   actionButton: {
//     padding: 15,
//     borderRadius: 8,
//     backgroundColor: '#f1f3f4',
//   },
//   primaryButton: {
//     backgroundColor: '#4285F4',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#202124',
//   },
// });
