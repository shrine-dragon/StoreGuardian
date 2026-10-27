// Reactライブラリから、アプリの「状態（データ）」や「画面が開いたときの処理」といった、プログラムの頭脳・仕組みを制御するための機能を取り出す。
import { useEffect, useState } from 'react'
// フレームワークであるreact-nativeから、テキスト・画像・ボタンなどのパーツ・デザインの道具を取り出す。
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function HomeScreen() {
  // 1. ローディング中かどうかを管理するステート（最初は true = ローディング中）
  const [isLoading, setIsLoading] = useState(true)

  // ランダムなサブタイトルのステート
  const [randomSubtitle, setRandomSubtitle] = useState('')

  // 2. アプリ起動時にローディング演出とサブタイトルのランダム選択を行う
  useEffect(() => {
    // 6種類のサブタイトル
    const subtitles = [
      // ゲームを一度もプレイしていない状態
      'Gメンとして店舗に潜入\n万引き犯を確保せよ！',
      // ランダム表示
      '買い物客に紛れて\n万引き犯を逮捕せよ！',
      // 新人・初心者
      '新人万引きGメンよ\nお店の治安を守れ！',
      // 中堅
      '万引きを見逃すな\n店内の平和は君が守る！',
      // ベテラン
      '万引き常習犯に\n正義の鉄槌を下せ！',
      // レジェンド
      '大量万引き犯を見つけ\n警察に引き渡せ！',
    ]
    const randomIndex = Math.floor(Math.random() * subtitles.length)
    setRandomSubtitle(subtitles[randomIndex])

    // 3. タイマーを使って、1.5秒（1500ミリ秒）後にローディングを終了させる
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    // クリーンアップ処理
    return () => clearTimeout(timer)
  }, [])

  // 【A】isLoading が true のときの「Now Loading画面」
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        {/* クルクル回るインジケーター（colorで色を変更可能） */}
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.loadingText}>NOW LOADING...</Text>
      </View>
    )
  }

  // 【B】isLoading が false になったあとの「通常のトップ画面」
  return (
    <ImageBackground
      source={require('../../assets/images/shoplifting-woman.png')}
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/StoreGuardian_second_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>{randomSubtitle}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert(
              'ゲームをはじめからプレイします。これまでのデータは削除されます。',
            )
          }}
        >
          <Text style={styles.buttonText}>はじめから</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            alert('ゲームを続きからプレイします。')
          }}
        >
          <Text style={styles.buttonText}>続きから</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: '#111111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    letterSpacing: 2,
  },

  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    opacity: 0.5,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 320,
    height: 180,
    resizeMode: 'contain',
  },
  subtitle: {
    fontSize: 23,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#ff4d4f',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
