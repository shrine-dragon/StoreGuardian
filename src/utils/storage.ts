import AsyncStorage from '@react-native-async-storage/async-storage';

// セーブデータを保存する際のキー名（アプリ内で共通の識別子）
const STORAGE_KEY = '@store_guardian_save';

// データの型定義
export interface GameSaveData {
  nickname: string;
  created_at: string;
  updated_at: string;
}

// セーブデータを保存（または更新）する関数 //
export async function saveGameData(nickname: string): Promise<GameSaveData> {
  const now = new Date().toISOString(); // 現在日時をISO形式で取得
  
  // 既存のデータがあるか確認して、created_atを維持するか判定するなどの処理もここに書けます
  const existingData = await loadGameData();

  const dataToSave: GameSaveData = {
    nickname,
    created_at: existingData ? existingData.created_at : now, // 初回なら現在日時、既存なら引き継ぐ
    updated_at: now, // 最終ログイン日時は常に更新
  };

  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    return dataToSave;
  } catch (error) {
    console.error('データの保存に失敗しました:', error);
    throw error;
  }
}

// セーブデータを読み込む関数 //
export async function loadGameData(): Promise<GameSaveData | null> {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? (JSON.parse(jsonValue) as GameSaveData) : null;
  } catch (error) {
    console.error('データの読み込みに失敗しました:', error);
    return null;
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