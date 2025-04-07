// import React, { useEffect } from "react";
// import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation, useRoute } from "@react-navigation/native";
// import { Link } from "@react-navigation/native";
// import styles from "./HomeScreenStyles";
// import AccountModal from "../AccountModal/AccountModal";
// import { useModal } from "../../hooks/usemodal";
// import ProfileModal from "../ProfileModal";

// type AppRoute = "./screens/scholar" | "./screens/music" | "./screens/translate";

// const quickLinks = [
//   { icon: "🎓", label: "Scholar", route: "./screens/scholar" as AppRoute },
//   { icon: "🎵", label: "Music", route: "./screens/music" as AppRoute },
//   { icon: "🌐", label: "Translate", route: "./screens/translate" as AppRoute },
// ] as const;

// export default function HomePage() {
//   const navigation = useNavigation();
//   const route = useRoute();
//   const { searchQuery } = route.params as { searchQuery?: string };
//   const {
//     isProfileModalOpen,
//     isAccountModalOpen,
//     openModal,
//     closeModal,
//     openAccountModal,
//   } = useModal();

//   useEffect(() => {
//     if (searchQuery) {
//       console.log("Received search query:", searchQuery);
//     }
//   }, [searchQuery]);

//   const weatherData = {
//     city: "Gurugram",
//     temperature: "30°",
//     condition: "Clear",
//     icon: "🌙",
//   };

//   const airQuality = {
//     value: 170,
//     level: "Moderate",
//     icon: "💨",
//   };

//   const newsCards = [
//     {
//       id: "1",
//       image: "https://picsum.photos/400/200?random=1",
//       title: "The ocean appears blue due to light absorption and scattering.",
//     },
//     {
//       id: "2",
//       image: "https://picsum.photos/400/200?random=2",
//       title: "Scientists discover a new species of deep-sea creatures.",
//     },
//     {
//       id: "3",
//       image: "https://picsum.photos/400/200?random=3",
//       title: "Climate change is affecting marine biodiversity significantly.",
//     },
//     {
//       id: "4",
//       image: "https://picsum.photos/400/200?random=4",
//       title: "Coral reefs are vital ecosystems, but they are under threat.",
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={newsCards}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.newsCard}>
//             <Image source={{ uri: item.image }} style={styles.newsImage} />
//             <Text style={styles.newsTitle}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//         ListHeaderComponent={
//           <>
//             {/* Top Bar */}
//             <View style={styles.topBar}>
//               <MaterialIcons name="science" size={24} color="#8ab4f8" />
//               <TouchableOpacity
//                 style={styles.avatar}
//                 onPress={() => openModal("profile")}
//               >
//                 <Text style={styles.avatarText}>A</Text>
//               </TouchableOpacity>
//               <View style={styles.searchBarMini}>
//                 <Text style={styles.dot}>⋮</Text>
//               </View>
//             </View>

//             {/* Google Logo */}
//             <View style={styles.logoContainer}>
//               <Image
//                 source={{
//                   uri: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png",
//                 }}
//                 style={styles.logo}
//                 resizeMode="contain"
//               />
//             </View>

//             {/* Search Bar */}
//             <TouchableOpacity
//               style={styles.searchBar}
//               onPress={() => router.push("/screens/SearchBar")}
//             >
//               <MaterialIcons name="search" size={24} color="#8ab4f8" />
//               <Text style={styles.searchBarText}>Search</Text>
//               <View style={styles.searchIcons}>
//                 <TouchableOpacity
//                   onPress={() => router.push("/screens/voiceInput")}
//                 >
//                   <MaterialIcons name="mic" size={28} color="#8ab4f8" />
//                 </TouchableOpacity>
//                 <TouchableOpacity
//                   onPress={() => router.push("/screens/open-camera")}
//                 >
//                   <Image
//                     source={require("../app/assets/images/google-lens-stroke-rounded.png")}
//                     style={styles.lensIcon}
//                   />
//                 </TouchableOpacity>
//               </View>
//             </TouchableOpacity>

//             {/* Quick Links */}
//             <View style={styles.quickLinks}>
//               {quickLinks.map((link, index) => (
//                 <Link key={index} href={link.route} asChild>
//                   <TouchableOpacity style={styles.quickLink}>
//                     <Text style={styles.quickLinkIcon}>{link.icon}</Text>
//                     <Text style={styles.quickLinkLabel}>{link.label}</Text>
//                   </TouchableOpacity>
//                 </Link>
//               ))}
//             </View>

//             {/* Weather and Air Quality Cards */}
//             <View style={styles.infoCards}>
//               <View style={styles.weatherCard}>
//                 <Text style={styles.cardTitle}>{weatherData.city}</Text>
//                 <View style={styles.weatherInfo}>
//                   <Text style={styles.temperature}>
//                     {weatherData.temperature}
//                   </Text>
//                   <Text style={styles.weatherIcon}>{weatherData.icon}</Text>
//                 </View>
//               </View>

//               <View style={styles.airQualityCard}>
//                 <Text style={styles.cardTitle}>
//                   Air quality · {airQuality.value}
//                 </Text>
//                 <View style={styles.aqiInfo}>
//                   <Text style={styles.aqiLevel}>{airQuality.level}</Text>
//                   <Text style={styles.aqiIcon}>{airQuality.icon}</Text>
//                 </View>
//               </View>
//             </View>
//           </>
//         }
//         ListFooterComponent={
//           <View style={styles.bottomNav}>
//             <TouchableOpacity style={styles.navItem}>
//               <MaterialIcons name="home" size={24} color="#8ab4f8" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.navItem}>
//               <MaterialIcons name="update" size={24} color="#8ab4f8" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.navItem}>
//               <MaterialIcons name="notifications" size={24} color="#8ab4f8" />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.navItem}>
//               <MaterialIcons name="menu" size={24} color="#8ab4f8" />
//             </TouchableOpacity>
//           </View>
//         }
//       />

//       {/* Profile Modal */}
//       <ProfileModal
//         visible={isProfileModalOpen}
//         onClose={closeModal}
//         onOpenAccount={openAccountModal}
//       />

//       {/* Account Modal */}
//       <AccountModal visible={isAccountModalOpen} onClose={closeModal} />
//     </View>
//   );
// }

///

import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useRoute} from '@react-navigation/native';
import styles from './HomeScreenStyles';
import AccountModal from '../AccountModal/AccountModal';
import {useModal} from '../../hooks/usemodal';
import ProfileModal from '../Profile/ProfileModal';

const quickLinks = [
  {icon: '🎓', label: 'Scholar', route: 'Scholar'},
  {icon: '🎵', label: 'Music', route: 'Music'},
  {icon: '🌐', label: 'Translate', route: 'Translate'},
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
                  <MaterialIcons name="mic" size={28} color="#8ab4f8" />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('OpenCamera')}>
                  <Image
                    source={require('../../assets/images/google-lens-stroke-rounded.png')}
                    style={styles.lensIcon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>

            {/* Quick Links */}
            <View style={styles.quickLinks}>
              {quickLinks.map((link, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.quickLink}
                  onPress={() => navigation.navigate(link.route)}>
                  <Text style={styles.quickLinkIcon}>{link.icon}</Text>
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
