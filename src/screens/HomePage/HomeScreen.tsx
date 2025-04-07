import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './HomeScreenStyles';
import AccountModal from '../AccountModal/AccountModal';
import {useModal} from '../../hooks/usemodal';
import ProfileModal from '../Profile/ProfileModal';
import GoogleLensIcon from '../../assets/images/icons/lens_google_icon.svg';
import YoutubeIcon from '../../assets/images/icons/youtube.svg';
import InstagramIcon from '../../assets/images/icons/instagram.svg';
import XIcon from '../../assets/images/icons/x.svg';

const quickLinks = [
  {
    Icon: YoutubeIcon, // Add this image locally
    label: 'YouTube',
    url: 'https://m.youtube.com',
  },
  {
    Icon: InstagramIcon, // Add this image locally
    label: 'Instagram',
    url: 'https://www.instagram.com',
  },
  {
    Icon: XIcon, // Add this image locally
    label: 'Twitter',
    url: 'https://twitter.com',
  },
];

export default function HomePage() {
  const navigation = useNavigation<any>(); // if using TS, define proper types
  const route = useRoute();
  const {searchQuery} = (route.params ?? {}) as {searchQuery?: string};

  const {
    isProfileModalOpen,
    isAccountModalOpen,
    openModal,
    closeModal,
    openAccountModal,
  } = useModal();

  useEffect(() => {
    if (searchQuery) {
      console.log('Received search query:', searchQuery);
    }
  }, [searchQuery]);

  const weatherData = {
    city: 'Delhi',
    temperature: '30°',
    condition: 'Clear',
    icon: '🌙',
  };

  const airQuality = {
    value: 280,
    level: 'Severe',
    icon: '💨',
  };

  const newsCards = [
    {
      id: '1',
      image: 'https://picsum.photos/400/200?random=1',
      title: 'The ocean appears blue due to light absorption and scattering.',
    },
    {
      id: '2',
      image: 'https://picsum.photos/400/200?random=2',
      title: 'Scientists discover a new species of deep-sea creatures.',
    },
    {
      id: '3',
      image: 'https://picsum.photos/400/200?random=3',
      title: 'Climate change is affecting marine biodiversity significantly.',
    },
    {
      id: '4',
      image: 'https://picsum.photos/400/200?random=4',
      title: 'Coral reefs are vital ecosystems, but they are under threat.',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={newsCards}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.newsCard}>
            <Image source={{uri: item.image}} style={styles.newsImage} />
            <Text style={styles.newsTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ListHeaderComponent={
          <>
            {/* Top Bar */}
            <View style={styles.topBar}>
              <MaterialIcons name="science" size={24} color="#8ab4f8" />
              <TouchableOpacity
                style={styles.avatar}
                onPress={() => openModal('profile')}>
                <Text style={styles.avatarText}>A</Text>
              </TouchableOpacity>
              <View style={styles.searchBarMini}>
                <Text style={styles.dot}>⋮</Text>
              </View>
            </View>

            {/* Google Logo */}
            <View style={styles.logoContainer}>
              <Image
                source={{
                  uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png',
                }}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            {/* Search Bar */}
            <TouchableOpacity
              style={styles.searchBar}
              onPress={() => navigation.navigate('SearchBar')}>
              <Text style={styles.searchBarText}>Search or type URL</Text>
              <View style={styles.searchIcons}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('VoiceInput')}>
                  <MaterialIcons name="mic" style={styles.micIcon} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('OpenCamera')}>
                  <GoogleLensIcon style={styles.lensIcon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            {/* Quick Links */}
            <View style={styles.quickLinks}>
              {quickLinks.map((link, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.quickLink}
                  onPress={() =>
                    navigation.navigate('WebViewer', {
                      title: link.label,
                      url: link.url,
                    })
                  }>
                  <link.Icon
                    width={24}
                    height={24}
                    style={styles.quickLinkIconImage}
                  />
                  <Text style={styles.quickLinkLabel}>{link.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Weather and Air Quality Cards */}
            <View style={styles.infoCards}>
              <View style={styles.weatherCard}>
                <Text style={styles.cardTitle}>{weatherData.city}</Text>
                <View style={styles.weatherInfo}>
                  <Text style={styles.temperature}>
                    {weatherData.temperature}
                  </Text>
                  <Text style={styles.weatherIcon}>{weatherData.icon}</Text>
                </View>
              </View>

              <View style={styles.airQualityCard}>
                <Text style={styles.cardTitle}>
                  Air quality · {airQuality.value}
                </Text>
                <View style={styles.aqiInfo}>
                  <Text style={styles.aqiLevel}>{airQuality.level}</Text>
                  <Text style={styles.aqiIcon}>{airQuality.icon}</Text>
                </View>
              </View>
            </View>
          </>
        }
      />

      {/* Profile Modal */}
      <ProfileModal
        visible={isProfileModalOpen}
        onClose={closeModal}
        onOpenAccount={openAccountModal}
      />

      {/* Account Modal */}
      <AccountModal visible={isAccountModalOpen} onClose={closeModal} />
    </View>
  );
}
