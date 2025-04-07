import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
    backgroundColor: '#121212',
  },
  uploadedImageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  uploadedImage: {
    width: 220,
    height: 220,
    borderRadius: 12,
  },
  uploadedImageLabel: {
    marginTop: 10,
    fontSize: 14,
    color: '#bbb',
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 16,
    paddingLeft: 4,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#1c1c1e',
    borderRadius: 12,
    marginBottom: 16,
    width: '48%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  thumbnail: {
    width: '100%',
    height: 140,
  },
  textWrapper: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#aaa',
  },
});
