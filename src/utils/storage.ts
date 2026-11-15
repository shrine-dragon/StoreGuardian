import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@store_guardian_game_data'

// データを保存する関数（オブジェクトを受け取れるように型を拡張）
export async function saveGameData(data: { nickname?: string; [key: string]: any }) {
  try {
    // 既存のデータとマージして保存できるようにするとなお良しです
    const existing = await loadGameData()
    const merged = { ...existing, ...data }
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
  } catch (e) {
    console.error('保存に失敗しました', e)
  }
}

// データを読み込む関数
export async function loadGameData() {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY)
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    console.error('読み込みに失敗しました', e)
    return null
  }
}

// セーブデータを削除する関数（「はじめから」を選んだときやテスト用） //
export async function clearGameData(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('データの削除に失敗しました:', error);
  }
}