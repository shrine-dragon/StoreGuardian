import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function HomeScreen() {
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

        <Text style={styles.subtitle}>
          Gメンとして店舗に潜入{'\n'}万引き犯を確保せよ！
        </Text>

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
    backgroundColor: '#ffffff'
  },
  backgroundImage: {
    opacity: 0.4,
    resizeMode: 'cover', // 画像の比率を保ったままスマホの画面いっぱいに拡大する
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