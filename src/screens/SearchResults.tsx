import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, useRoute, NavigationProp} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {searchGoogle} from '../utils/api';
import {RootStackParamList} from '../utils/types';

interface SearchResult {
  title: string;
  link: string;
  snippet: string;
  pagemap?: {
    metatags?: Array<{
      'og:title'?: string;
      'og:description'?: string;
      'og:image'?: string;
    }>;
  };
}

export default function SearchResults() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();
  const {query} = route.params as {query: string};
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const performSearch = async () => {
      if (query) {
        try {
          setIsLoading(true);
          setError(null);
          const results = await searchGoogle(query as string);
          setSearchResults(results);
        } catch (err) {
          setError('Failed to load search results. Please try again.');
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    performSearch();
  }, [query]);

  const handleLinkPress = (url: string) => {
    Linking.openURL(url);
  };

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#8ab4f8" />
        <Text style={styles.loadingText}>Searching...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => navigation.goBack()}>
          <Text style={styles.retryButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#e8eaed" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Search Results</Text>
      </View>

      <ScrollView style={styles.resultsContainer}>
        {searchResults.map((result, index) => (
          <TouchableOpacity
            key={index}
            style={styles.resultItem}
            onPress={() => handleLinkPress(result.link)}>
            <Text style={styles.resultTitle}>{result.title}</Text>
            <Text style={styles.resultLink}>{result.link}</Text>
            <Text style={styles.resultSnippet}>{result.snippet}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#202124",
//   },
//   centerContainer: {
//     flex: 1,
//     backgroundColor: "#202124",
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 20,
//   },
//   header: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: "#3c4043",
//   },
//   backButton: {
//     marginRight: 16,
//   },
//   headerTitle: {
//     color: "#e8eaed",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   resultsContainer: {
//     flex: 1,
//     padding: 16,
//   },
//   resultItem: {
//     marginBottom: 24,
//     padding: 16,
//     backgroundColor: "#303134",
//     borderRadius: 8,
//   },
//   resultTitle: {
//     color: "#8ab4f8",
//     fontSize: 18,
//     marginBottom: 4,
//   },
//   resultLink: {
//     color: "#9aa0a6",
//     fontSize: 14,
//     marginBottom: 8,
//   },
//   resultSnippet: {
//     color: "#e8eaed",
//     fontSize: 14,
//     lineHeight: 20,
//   },
//   loadingText: {
//     color: "#e8eaed",
//     marginTop: 12,
//     fontSize: 16,
//   },
//   errorText: {
//     color: "#e8eaed",
//     fontSize: 16,
//     textAlign: "center",
//     marginBottom: 16,
//   },
//   retryButton: {
//     backgroundColor: "#8ab4f8",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   retryButtonText: {
//     color: "#202124",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

const styles = StyleSheet.create({
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
    paddingTop: 48, // Added more padding for status bar
    backgroundColor: '#202124',
    borderBottomWidth: 0.5,
    borderBottomColor: '#3c4043',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  backButton: {
    marginRight: 16,
    padding: 8,
  },
  headerTitle: {
    color: '#e8eaed',
    fontSize: 20,
    fontWeight: '500',
    flex: 1,
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  resultItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#303134',
    borderRadius: 12,
    borderLeftWidth: 3,
    borderLeftColor: '#8ab4f8',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  resultTitle: {
    color: '#8ab4f8',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 6,
    lineHeight: 24,
  },
  resultLink: {
    color: '#9aa0a6',
    fontSize: 14,
    marginBottom: 8,
    fontStyle: 'italic',
  },
  resultSnippet: {
    color: '#e8eaed',
    fontSize: 15,
    lineHeight: 22,
    opacity: 0.9,
  },
  loadingText: {
    color: '#e8eaed',
    marginTop: 16,
    fontSize: 16,
    opacity: 0.8,
  },
  errorText: {
    color: '#e8eaed',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
    opacity: 0.9,
    paddingHorizontal: 24,
  },
  retryButton: {
    backgroundColor: '#8ab4f8',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    minWidth: 120,
    alignItems: 'center',
  },
  retryButtonText: {
    color: '#202124',
    fontSize: 16,
    fontWeight: '500',
  },
  // Add these new styles for rich content
  resultMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  resultFavicon: {
    width: 16,
    height: 16,
    marginRight: 8,
    borderRadius: 2,
  },
  resultDomain: {
    color: '#9aa0a6',
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  resultImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginTop: 12,
    backgroundColor: '#3c4043',
  },
});
