import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {
  NavigationProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/types';
import {styles} from './searchBarStyles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GoogleLensIcon from '../../assets/images/icons/lens_google_icon.svg';

export default function SearchScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute();
  const [isIncognito, setIsIncognito] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const query = (route.params as {query?: string})?.query;

  useEffect(() => {
    if (query) {
      const queryString = Array.isArray(query) ? query[0] : query;
      setSearchQuery(queryString);
      handleSearch();
    }
  }, [query]);

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      try {
        setIsLoading(true);
        navigation.navigate('SearchResults', {query: searchQuery});
      } catch (error) {
        console.error('Search failed:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const recentSearches = [
    'sleeveless gilet jacket men india',
    'sequins skirt less than 2000',
    'cut out bodysuit india',
    'floral crop top',
    'black leather skirt with button',
    'neon shirt',
    "oversized women's leather jacket india",
  ];

  return (
    <View style={styles.container}>
      {/* Search Header */}
      <View style={styles.searchHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#e8eaed" />
        </TouchableOpacity>

        <TextInput
          style={styles.searchInput}
          placeholder="Search or type URL"
          placeholderTextColor="#9aa0a6"
          autoFocus
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
          returnKeyType="search"
        />
        <TouchableOpacity onPress={() => navigation.navigate('VoiceInput')}>
          <MaterialIcons name="mic" style={styles.micIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('OpenCamera')}>
          {/* <MaterialIcons name="camera-alt" size={24} color="#8ab4f8" /> */}
          <GoogleLensIcon style={styles.lensIcon} />
        </TouchableOpacity>
      </View>

      {/* Recent Searches */}
      <View style={styles.recentSearchesHeader}>
        <Text style={styles.recentSearchesTitle}>Recent searches</Text>
        <TouchableOpacity>
          <Text style={styles.manageHistory}>MANAGE HISTORY</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.recentSearchesList}>
        {recentSearches.map((search, index) => (
          <TouchableOpacity
            key={index}
            style={styles.searchItem}
            onPress={() =>
              navigation.navigate('SearchResults', {query: search})
            }>
            <MaterialIcons name="history" size={20} color="#9aa0a6" />
            <Text style={styles.searchText}>{search}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
