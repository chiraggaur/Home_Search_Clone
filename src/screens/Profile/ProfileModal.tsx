import React from 'react';
import {View, Text, TouchableOpacity, Modal, ScrollView} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './profileModalStyles';

type ProfileModalProps = {
  visible: boolean;
  onClose: () => void;
  onOpenAccount: () => void;
};
export default function ProfileModal({
  visible,
  onClose,
  onOpenAccount,
}: ProfileModalProps) {
  const menuItems = [
    {
      icon: 'account-circle',
      text: 'Manage your Google Account',
      action: onOpenAccount,
      hasChevron: true,
    },
    {icon: 'visibility-off', text: 'Turn on Incognito'},
    {icon: 'history', text: 'Search history', hasChevron: true},
    {icon: 'bookmark', text: 'Saving', hasChevron: true},
    {icon: 'delete', text: 'Delete last 15 mins', hasChevron: false},
    {icon: 'security', text: 'SafeSearch', hasChevron: true},
    {icon: 'interests', text: 'Interests', hasChevron: true},
    {icon: 'lock', text: 'Passwords', hasChevron: true},
    {icon: 'person', text: 'Your profile', hasChevron: true},
    {icon: 'search', text: 'Search personalisation', hasChevron: true},
    {icon: 'settings', text: 'Settings', hasChevron: true},
    {icon: 'help', text: 'Help and feedback', hasChevron: false},
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onClose}>
              <MaterialIcons name="close" size={24} color="#e8eaed" />
            </TouchableOpacity>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Text style={styles.title}>Google</Text>
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            {menuItems.map((item, index) => (
              <React.Fragment key={item.text}>
                {index > 0 && index % 2 === 0 && (
                  <View style={styles.divider} />
                )}
                <TouchableOpacity
                  style={styles.option}
                  onPress={item.action || onClose}>
                  <View style={styles.optionContent}>
                    <MaterialIcons
                      name={item.icon as any}
                      size={24}
                      color="#5f6368"
                    />
                    <Text style={styles.optionText}>{item.text}</Text>
                  </View>
                  {item.hasChevron && (
                    <Feather name="chevron-right" size={20} color="#5f6368" />
                  )}
                </TouchableOpacity>
              </React.Fragment>
            ))}

            <View style={styles.footer}>
              <Text style={styles.footerText}>
                Privacy Policy • Terms of Service
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
