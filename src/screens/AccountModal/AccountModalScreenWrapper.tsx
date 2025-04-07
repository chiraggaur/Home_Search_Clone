import React, {useState} from 'react';
import {View} from 'react-native';
import AccountModal from './AccountModal';

export default function AccountModalScreenWrapper() {
  const [visible, setVisible] = useState(true);

  return (
    <View style={{flex: 1}}>
      <AccountModal visible={visible} onClose={() => setVisible(false)} />
    </View>
  );
}
