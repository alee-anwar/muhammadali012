import { StyleSheet, Text, View } from "react-native";

export default function Card(item) {
  return (
    <View style={styles.container}>
    <Text>Bookmark is empty</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
