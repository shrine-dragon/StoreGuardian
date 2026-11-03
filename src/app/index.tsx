import { Stack, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function HomeScreen() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState<
    'warning' | 'terms' | 'loading' | 'home'
  >('warning')

  const [randomSubtitle, setRandomSubtitle] = useState('')
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // 背景画像リスト
  const backgroundImages = [
    require('../../assets/images/shoplifting-woman.png'),
    require('../../assets/images/stop-text.png'),
    require('../../assets/images/police-car.png'),
  ]

  useEffect(() => {
    // サブタイトルの準備
    const subtitles = [
      'Gメンとして店舗に潜入\n万引き犯を確保せよ！',
      '買い物客に紛れて\n万引き犯を逮捕せよ！',
      '新人万引きGメンよ\nお店の治安を守れ！',
      '万引きを見逃すな\n店内の平和は君が守る！',
      '万引き常習犯に\n正義の鉄槌を下せ！',
      '大量万引き犯を見つけ\n警察に引き渡せ！',
    ]
    const randomSubIndex = Math.floor(Math.random() * subtitles.length)
    setRandomSubtitle(subtitles[randomSubIndex])
  }, [])

  // スライドショーのタイマー
  useEffect(() => {
    if (currentStep !== 'home') return

    const slideTimer = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      )
    }, 3000)

    return () => clearInterval(slideTimer)
  }, [currentStep])

  // 最初の警告画面から「進む」ボタンが押されたとき
  const handleAcknowledgeWarning = () => {
    setCurrentStep('terms')
  }

  // 2. 文書確認モーダルで「同意する」ボタンが押されたとき
  const handleAgreeTerms = () => {
    setCurrentStep('loading') // ローディング画面へ切り替え

    // 1.5秒のローディング後にトップ画面へ切り替える
    // （※のちにここに「ニックネームが未登録ならニックネーム入力モーダルを開く」という判定を挟むことになります！）
    setTimeout(() => {
      setCurrentStep('home')
    }, 1500)
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      {/* 1. 最初の法的警告画面 */}
      {currentStep === 'warning' && (
        <View style={styles.overlayContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>【法的注意書き】</Text>
            <Text style={styles.modalText}>
              万引きは窃盗罪です。{'\n'}
              10年以下の拘禁刑または50万円以下の罰金が課せられます。{'\n\n'}
              「少しなら盗んでも問題ない」という考えが貴方の人生を壊します。
              {'\n\n'}
              本アプリは万引きを推奨するものではございません。
            </Text>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleAcknowledgeWarning}
            >
              <Text style={styles.buttonText}>理解して次へ進む</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* 2. 文書確認用モーダル（check_documents_modal）*/}
      {currentStep === 'terms' && (
        <View style={styles.overlayContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>
              利用規約・プライバシーポリシー
            </Text>

            <ScrollView
              style={styles.termsScrollView}
              contentContainerStyle={styles.termsScrollContent}
            >
              <Text style={styles.modalText}>
                以下の
                <Text
                  style={styles.linkText}
                  onPress={() => router.push('/terms')}
                >
                  利用規約
                </Text>{' '}
                と {/* プライバシーポリシーのリンク */}
                <Text
                  style={styles.linkText}
                  onPress={() => router.push('/privacy-policy')}
                >
                  プライバシーポリシー
                </Text>{' '}
                を読み、内容が確認できましたら同意ボタンを押してください。
              </Text>
            </ScrollView>

            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleAgreeTerms}
            >
              <Text style={styles.buttonText}>同意して進む</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* 3. ローディング画面 */}
      {currentStep === 'loading' && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.loadingText}>NOW LOADING...</Text>
        </View>
      )}

      {/* 4. 通常のトップ画面 */}
      {currentStep === 'home' && (
        <ImageBackground
          source={backgroundImages[currentImageIndex]}
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
              style={styles.actionButton}
              onPress={() => {
                alert(
                  'ゲームをはじめからプレイします。これまでのデータは削除されます。',
                )
              }}
            >
              <Text style={styles.buttonText}>はじめから</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionButton}
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
  // --- モーダル共通の背景（黒半透明・または真っ黒） ---
  overlayContainer: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  modalBox: {
    width: '100%',
    maxWidth: 400,
    maxHeight: '80%',
    backgroundColor: '#1a1a1a',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#333333',
  },
  modalTitle: {
    color: '#ff4d4f',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    color: '#cccccc',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'left',
  },
  linkText: {
    color: '#1890ff',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  termsScrollView: {
    maxHeight: 200,
    marginBottom: 20,
    backgroundColor: '#111111',
    padding: 10,
    borderRadius: 6,
  },
  termsScrollContent: {
    paddingRight: 5,
  },
  primaryButton: {
    backgroundColor: '#ff4d4f',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },

  // --- ローディング画面 ---
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

  // --- トップ画面 ---
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  backgroundImage: {
    opacity: 0.4,
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
  actionButton: {
    backgroundColor: '#ff4d4f',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    maxWidth: 250,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
