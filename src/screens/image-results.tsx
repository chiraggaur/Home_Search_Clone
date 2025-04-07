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

const styles = StyleSheet.create({
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
