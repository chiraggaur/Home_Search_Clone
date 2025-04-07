import React, {useState} from 'react';
import {View} from 'react-native';
import ProfileModal from './ProfileModal';
import {styles} from './profileModalStyles';

export default function ProfileModalScreenWrapper() {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.modalContainer}>
      <ProfileModal
        visible={visible}
        onClose={() => setVisible(false)}
        onOpenAccount={() => {
          setVisible(false);
        }}
      />
    </View>
  );
}
