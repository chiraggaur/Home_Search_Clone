import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    paddingTop: Platform.OS === 'ios' ? 50 : 50,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#303134',
    margin: 12,
    padding: 8,
    borderRadius: 24,
  },
  backButton: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    color: '#e8eaed',
    fontSize: 16,
    marginLeft: 8,
  },
  cameraButton: {
    marginLeft: 12,
  },
  recentSearchesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  recentSearchesTitle: {
    color: '#e8eaed',
    fontSize: 16,
  },
  manageHistory: {
    color: '#8ab4f8',
    fontSize: 14,
  },
  recentSearchesList: {
    flex: 1,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  searchText: {
    color: '#e8eaed',
    fontSize: 16,
    marginLeft: 32,
  },
});
