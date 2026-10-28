import { Stack } from 'expo-router'
import { useEffect, useState } from 'react'
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
  // 画面の状態を管理するステート
  // 'warning': 最初の警告画面
  // 'loading': ローディング画面
  // 'home': 通常のトップ画面
  const [currentStep, setCurrentStep] = useState<
    'warning' | 'loading' | 'home'
  >('warning')

  // ランダムなサブタイトルのステート
  const [randomSubtitle, setRandomSubtitle] = useState('')

  useEffect(() => {
    // サブタイトルの準備
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
  }, [])

  // 警告画面から「進む」ボタンが押されたときの処理
  const handleAcknowledgeWarning = () => {
    setCurrentStep('loading') // ローディング画面へ切り替え

    // 1.5秒のローディング後にトップ画面へ切り替える
    setTimeout(() => {
      setCurrentStep('home')
    }, 1500)
  }

  return (
    <>
      {/* 1. 警告文画面（一番最初に表示）*/}
      {currentStep === 'warning' && (
        <View style={styles.warningContainer}>
          <View style={styles.warningBox}>
            <Text style={styles.warningTitle}>【法的注意書き】</Text>
            <Text style={styles.warningText}>
              万引きは窃盗罪です。{'\n'}
              10年以下の拘禁刑または50万円以下の罰金が課せられます。{'\n\n'}
              「少しなら盗んでも問題ない」という考えが貴方の人生を壊します。
              {'\n\n'}
              本アプリは万引きを推奨するものではございません。
            </Text>

            <TouchableOpacity
              style={styles.warningButton}
              onPress={handleAcknowledgeWarning}
            >
              <Text style={styles.warningButtonText}>
                理解してゲームを始める
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* 2. ローディング画面  */}
      {currentStep === 'loading' && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>NOW LOADING...</Text>
        </View>
      )}

      {/* 3. 通常のトップ画面 */}
      {currentStep === 'home' && (
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
      )}
    </>
  )
}

const styles = StyleSheet.create({
  // --- 警告画面用のスタイル ---
  warningContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  warningBox: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
  },
  warningTitle: {
    color: '#ff4d4f',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  warningText: {
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 25,
    textAlign: 'left',
  },
  warningButton: {
    backgroundColor: '#ff4d4f',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  warningButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // --- ローディング画面用のスタイル ---
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

  // --- トップ画面用のスタイル ---
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
