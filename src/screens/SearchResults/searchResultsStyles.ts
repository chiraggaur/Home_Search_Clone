import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  centerContainer: {
    flex: 1,
    backgroundColor: '#202124',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#3c4043',
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    color: '#e8eaed',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultsContainer: {
    flex: 1,
    padding: 16,
  },
  resultItem: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#303134',
    borderRadius: 8,
  },
  resultTitle: {
    color: '#8ab4f8',
    fontSize: 18,
    marginBottom: 4,
  },
  resultLink: {
    color: '#9aa0a6',
    fontSize: 14,
    marginBottom: 8,
  },
  resultSnippet: {
    color: '#e8eaed',
    fontSize: 14,
    lineHeight: 20,
  },
  loadingText: {
    color: '#e8eaed',
    marginTop: 12,
    fontSize: 16,
  },
  errorText: {
    color: '#e8eaed',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#8ab4f8',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#202124',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
