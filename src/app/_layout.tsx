import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* ヘッダーを非表示にした状態で、index.tsxなどの画面を表示する枠組み */}
      <Stack.Screen name="index" />
    </Stack>
  )
}
