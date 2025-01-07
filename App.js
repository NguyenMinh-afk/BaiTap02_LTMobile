import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import NotificationItem from './components/NotificationItem';

const icon1 = require('./assets/icon1.png');
const icon2 = require('./assets/icon2.png');

const notifications = [
  { id: '1', title: 'Xác định nhu cầu khách hàng', description: 'Vũ Văn Hoàng sắp đến hạn lúc 01/08/2020 9:00', time: '20/08/2020, 06:00', icon: icon1 },
  { id: '2', title: 'Bạn có khách hàng mới!', description: 'Chúc mừng bạn, bạn có khách hàng mới. Hãy mau chóng liên lạc ngay.', time: '20/08/2020, 06:00', icon: icon2 },
  { id: '3', title: 'Khách hàng được chia sẻ bị trùng', description: 'Rất tiếc, khách hàng được chia sẻ đã tồn tại trên hệ thống. Vui lòng chia sẻ khách hàng.', time: '20/08/2020, 06:00', icon: icon2 },
  { id: '4', title: 'Khách hàng được thêm bị trùng', description: 'Rất tiếc, khách hàng được thêm đã tồn tại trên hệ thống. Vui lòng thêm khách hàng.', time: '20/08/2020, 06:00', icon: icon2 },
  { id: '5', title: 'Công việc sắp đến hạn trong hôm nay', description: 'Bạn có 17 công việc sắp đến hạn trong hôm nay.', time: '20/08/2020, 06:00', icon: icon1 },
  { id: '6', title: 'Công việc đã quá hạn', description: 'Bạn có 17 công việc bị quá hạn. Hãy kiểm tra và lên kế hoạch hoàn thành công việc.', time: '20/08/2020, 06:00', icon: icon1 },
];

export default function App() {
  const renderItem = ({ item }) => (
    <NotificationItem 
      title={item.title} 
      description={item.description} 
      time={item.time} 
      icon={item.icon} 
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});
