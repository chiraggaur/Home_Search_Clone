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
import {
  useNavigation,
  useRoute,
  NavigationProp,
} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {searchGoogle} from '../../utils/api';
import {RootStackParamList} from '../../utils/types';
import {styles} from './searchResultsStyles';

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
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.retryButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
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
