import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
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
