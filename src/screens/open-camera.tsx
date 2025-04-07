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
            <View style={styles.bottomControls}>
              <TouchableOpacity onPress={pickImage} style={styles.iconButton}>
                <MaterialIcons name="photo-library" size={30} color="#fff" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={takePicture}
                style={styles.lensSearchButton}>
                <View style={styles.lensSearchOuterCircle}>
                  <MaterialIcons name="search" size={45} color="#555" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={flipCamera} style={styles.iconButton}>
                <MaterialIcons
                  name="flip-camera-android"
                  size={30}
                  color="#fff"
                />
              </TouchableOpacity>
            </View>
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
  captureButton: {
    alignSelf: 'center',
  },
  lensSearchOuterCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f1f1f1',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  lensSearchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 130,
    bottom: 40,
    alignSelf: 'center',
    zIndex: 10,
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
  overlay: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    alignItems: 'center',
  },

  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },

  iconButton: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 50,
  },
});
