import {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import {styles} from './imageResultStyles';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
}

export default function ImageResultsScreen() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [randomImage, setRandomImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://dummyjson.com/products?limit=10',
        );
        const products = response.data.products.map((product: any) => ({
          id: product.id.toString(),
          title: product.title,
          description: product.description,
          thumbnail: product.thumbnail,
        }));

        setResults(products);

        if (products.length > 0) {
          const randomIndex = Math.floor(Math.random() * products.length);
          setRandomImage(products[randomIndex].thumbnail);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderItem = ({item}: {item: SearchResult}) => (
    <View style={styles.card}>
      <Image source={{uri: item.thumbnail}} style={styles.thumbnail} />
      <View style={styles.textWrapper}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        <Text numberOfLines={2} style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Uploaded Image Section */}
      {randomImage && (
        <View style={styles.uploadedImageContainer}>
          <Image source={{uri: randomImage}} style={styles.uploadedImage} />
          <Text style={styles.uploadedImageLabel}>Uploaded Image</Text>
        </View>
      )}

      <Text style={styles.heading}>Visual matches</Text>

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#00FF76" />
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
