// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   Switch,
// } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation, useRoute } from "@react-navigation/native";

// export default function SearchScreen() {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const [isIncognito, setIsIncognito] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const query = (route.params as { query?: string })?.query;

//   // Auto-fill search bar when query is received
//   useEffect(() => {
//     if (query) {
//       // Check if query is an array and take the first element if it is
//       const queryString = Array.isArray(query) ? query[0] : query;
//       setSearchQuery(queryString); // Auto-fill input
//       handleSearch(); // Trigger search automatically
//     }
//   }, [query]);

//   const handleSearch = async () => {
//     if (searchQuery.trim()) {
//       try {
//         setIsLoading(true);
//         // Navigate to results page with the search query
//        navigation.navigate('SearchResults', {query: searchQuery});
//       } catch (error) {
//         console.error("Search failed:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const recentSearches = [
//     "sleeveless gilet jacket men india",
//     "sequins skirt less than 2000",
//     "cut out bodysuit india",
//     "floral crop top",
//     "black leather skirt with button",
//     "neon shirt",
//     "oversized women's leather jacket india",
//   ];

//   return (
//     <View style={styles.container}>
//       {/* Search Header */}
//       <View style={styles.searchHeader}>
//         <TouchableOpacity
//           onPress={() => router.back()}
//           style={styles.backButton}
//         >
//           <MaterialIcons name="arrow-back" size={24} color="#e8eaed" />
//         </TouchableOpacity>

//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search or type URL"
//           placeholderTextColor="#9aa0a6"
//           autoFocus
//           value={searchQuery}
//           onChangeText={setSearchQuery}
//           onSubmitEditing={handleSearch}
//           returnKeyType="search"
//         />
//         <TouchableOpacity onPress={() => router.push("/screens/voiceInput")}>
//           <MaterialIcons name="mic" size={24} color="#8ab4f8" />
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => router.push("/screens/open-camera")}
//           style={styles.cameraButton}
//         >
//           <MaterialIcons name="camera-alt" size={24} color="#8ab4f8" />
//         </TouchableOpacity>
//       </View>

//       {/* Recent Searches */}
//       <View style={styles.recentSearchesHeader}>
//         <Text style={styles.recentSearchesTitle}>Recent searches</Text>
//         <TouchableOpacity>
//           <Text style={styles.manageHistory}>MANAGE HISTORY</Text>
//         </TouchableOpacity>
//       </View>

//       <ScrollView style={styles.recentSearchesList}>
//         {recentSearches.map((search, index) => (
//           <TouchableOpacity key={index} style={styles.searchItem}>
//             <MaterialIcons name="history" size={20} color="#9aa0a6" />
//             <Text style={styles.searchText}>{search}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       {/* Incognito Mode */}
//       {/* <View style={styles.incognitoContainer}>
//         <Switch
//           value={isIncognito}
//           onValueChange={setIsIncognito}
//           trackColor={{ false: "#3c4043", true: "#8ab4f8" }}
//           thumbColor={isIncognito ? "#8ab4f8" : "#9aa0a6"}
//         />
//         <Text style={styles.incognitoText}>Incognito mode</Text>
//       </View> */}

//       {/* Virtual Keyboard Placeholder */}
//       {/* <View style={styles.keyboardPlaceholder}>
//         <View style={styles.globeButton}>
//           <MaterialIcons name="language" size={24} color="#8ab4f8" />
//         </View>
//         <View style={styles.micButton}>
//           <MaterialIcons name="mic" size={24} color="#8ab4f8" />
//         </View>
//       </View> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#202124",
//     marginTop: 24,
//   },
//   searchHeader: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#303134",
//     margin: 12,
//     padding: 8,
//     borderRadius: 24,
//   },
//   backButton: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     color: "#e8eaed",
//     fontSize: 16,
//     marginLeft: 8,
//   },
//   cameraButton: {
//     marginLeft: 12,
//   },
//   recentSearchesHeader: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingHorizontal: 16,
//     paddingVertical: 12,
//   },
//   recentSearchesTitle: {
//     color: "#e8eaed",
//     fontSize: 16,
//   },
//   manageHistory: {
//     color: "#8ab4f8",
//     fontSize: 14,
//   },
//   recentSearchesList: {
//     flex: 1,
//   },
//   searchItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
//   searchText: {
//     color: "#e8eaed",
//     fontSize: 16,
//     marginLeft: 32,
//   },
//   incognitoContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: "#3c4043",
//   },
//   incognitoText: {
//     color: "#e8eaed",
//     fontSize: 16,
//     marginLeft: 12,
//   },
//   keyboardPlaceholder: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     padding: 16,
//     borderTopWidth: 1,
//     borderTopColor: "#3c4043",
//   },
//   globeButton: {
//     padding: 8,
//   },
//   micButton: {
//     padding: 8,
//   },
// });

////

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
          <MaterialIcons name="mic" size={24} color="#8ab4f8" />
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => navigation.navigate('OpenCamera')}
          style={styles.cameraButton}>
          <MaterialIcons name="camera-alt" size={24} color="#8ab4f8" />
        </TouchableOpacity> */}
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
