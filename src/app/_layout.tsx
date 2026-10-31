import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // ここでアプリ全体のヘッダーをまとめて消す
      }}
    />
  )
}