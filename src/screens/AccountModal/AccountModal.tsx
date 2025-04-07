import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../utils/types';
import {styles} from './AccountStyles';

interface SectionItem {
  icon: string;
  text: string;
}

interface AccountSection {
  title: string;
  items: SectionItem[];
}

interface AccountModalProps {
  visible: boolean;
  onClose: () => void;
}

const sections: AccountSection[] = [
  {
    title: 'Privacy & personalization',
    items: [
      {icon: 'security', text: 'Privacy Checkup'},
      {icon: 'history', text: 'Your data in Search'},
    ],
  },
  {
    title: 'Account preferences',
    items: [
      {icon: 'language', text: 'Language'},
      {icon: 'map', text: 'Location History'},
    ],
  },
  {
    title: 'Security',
    items: [
      {icon: 'security', text: 'Security Checkup'},
      {icon: 'lock', text: 'Password Manager'},
    ],
  },
];

export default function AccountModal({visible, onClose}: AccountModalProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Modal animationType="slide" visible={visible} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="arrow-back" size={24} color="#5f6368" />
          </TouchableOpacity>
          <Text style={styles.title}>Google Account</Text>
        </View>

        <ScrollView
          style={styles.content}
          contentContainerStyle={styles.scrollContent} // Added separate style
          showsVerticalScrollIndicator={false}>
          <View style={styles.profileSection}>
            <Image
              source={{uri: 'https://placehold.co/80'}}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>User Name</Text>
            <Text style={styles.profileEmail}>user@google.com</Text>
            <TouchableOpacity style={styles.manageButton}>
              <Text style={styles.manageButtonText}>
                Manage your Google Account
              </Text>
            </TouchableOpacity>
          </View>

          {sections.map(section => (
            <View key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.items.map(item => (
                <TouchableOpacity key={item.text} style={styles.option}>
                  <View style={styles.optionIcon}>
                    {item.icon === 'md-location-outline' ? (
                      <Ionicons name={item.icon} size={24} color="#5f6368" />
                    ) : (
                      <MaterialIcons
                        name={item.icon}
                        size={24}
                        color="#5f6368"
                      />
                    )}
                  </View>
                  <Text style={styles.optionText}>{item.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}

          <View style={styles.signOutContainer}>
            <TouchableOpacity
              style={styles.signOutButton}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.signOutText}>Sign out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}
