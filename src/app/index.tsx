import { useEffect, useState } from 'react'
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

export default function HomeScreen() {
  // ランダムに選ばれたサブタイトルを保持するステート
  const [randomSubtitle, setRandomSubtitle] = useState('')

  // 画面が開いたときに1回だけランダムなセリフを決定する
  useEffect(() => {
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
    // 3つのうちからランダムに1つを選ぶ
    // floor →小数点以下を切り捨てる関数
    const randomIndex = Math.floor(Math.random() * subtitles.length)
    setRandomSubtitle(subtitles[randomIndex])
  }, [])

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

        {/* ランダムに選ばれたサブタイトルを表示 */}
        <Text style={styles.subtitle}>{randomSubtitle}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // TODO: ゲーム画面へ遷移する処理などを書く場所
            alert('ゲームをはじめる！')
          }}
        >
          <Text style={styles.buttonText}>ゲームをはじめる</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
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
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
