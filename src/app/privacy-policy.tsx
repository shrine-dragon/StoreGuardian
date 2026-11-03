import { Stack } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'プライバシーポリシー' }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>プライバシーポリシー</Text>
        <Text style={styles.text}>
          ここにプライバシーポリシーのテンプレートを記載します。{'\n\n'}
          第1条（個人情報）{'\n'}
          「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとします。{'\n\n'}
          （以下、ポリシーの文章が続きます）
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333333',
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
  },
})