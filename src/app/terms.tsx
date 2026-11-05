import { Stack } from 'expo-router'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default function TermsScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: '利用規約' }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>利用規約</Text>

        <Text style={styles.paragraph}>
          この利用規(以下、「本規約」)は、Crow株式会(以下、「当社」)がこのアプリ上で提供するサービ(以下、「本サービス」)の利用条件を定めるものです。登録ユーザーの皆さ(以下、「ユーザー」)には、本規約に従って、本アプリをご利用いただきます。
        </Text>

        <Text style={styles.chapter}>第1(適用)</Text>

        <Text style={styles.paragraph}>
          本規約は、ユーザーと当社との間の本アプリの利用に関わる、一切の関係に適用されるものとします。
        </Text>
        <Text style={styles.paragraph}>
          当社は本アプリに関し、本規約のほか、ご利用にあたってのルール等、各種の定(以下、「個別規定」)をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
        </Text>
        <Text style={styles.paragraph}>
          本規約の規定が前条の個別規定の規定と矛盾する場合には、個別規定において特段の定めがない限り、個別規定の規定が優先されるものとします。
        </Text>

        <Text style={styles.chapter}>第2(本サービスの提供)</Text>

        <Text style={styles.paragraph}>
          当社は、ユーザーに対し、本規約に従い本サービスを利用するための非独占的かつ譲渡不能の利用権を付与します。当社は、本サービスの全部または一部を、ユーザーへの事前通知なく変更、中断または終了することができます。
        </Text>

        <Text style={styles.chapter}>第3(アカウント管理)</Text>

        <Text style={styles.paragraph}>
          ユーザーは、本アプリにアカウント登録を行う場合、真実かつ正確な情報を入力するものとします。
          ユーザーは、登録した情報の管理責任を負い、第三者への貸与、譲渡、共有はできません。アカウントの不正利用により損害が生じた場合、当社は一切の責任を負いません。
        </Text>

        <Text style={styles.chapter}>第4(禁止事項)</Text>

        <Text style={styles.paragraph}>
          ユーザーは、本アプリの利用にあたり、以下の行為を行ってはなりません。
        </Text>
        <Text style={styles.listItem}>• 法令または公序良俗に反する行為</Text>
        <Text style={styles.listItem}>• 犯罪行為につながる行為</Text>
        <Text style={styles.listItem}>
          •
          当社または第三者の知的財産権、名誉、プライバシーその他の権利を侵害する行為
        </Text>
        <Text style={styles.listItem}>
          • アプリの解析、改変、リバースエンジニアリング、複製、再配布
        </Text>
        <Text style={styles.listItem}>
          • サーバーまたはネットワークへ不正にアクセスする行為
        </Text>
        <Text style={styles.listItem}>• 本アプリの運営を妨害する行為</Text>
        <Text style={styles.listItem}>• 虚偽情報の登録</Text>
        <Text style={styles.listItem}>• 他ユーザーになりすます行為</Text>
        <Text style={styles.listItem}>
          •
          以下の表現を含み、または含むと当社が判断する内容を本アプリ上に投稿し、または送信する行為
        </Text>
        <Text style={styles.numberListItem}>1.過度に暴力的な表現</Text>
        <Text style={styles.numberListItem}>2.露骨な性的表現</Text>
        <Text style={styles.numberListItem}>
          3.人種、国籍、信条、性別、社会的身分、門地等による差別につながる表現
        </Text>
        <Text style={styles.numberListItem}>
          4.自殺、自傷行為、薬物乱用を誘引または助長する表現
        </Text>
        <Text style={styles.numberListItem}>
          5.その他反社会的な内容を含み他人に不快感を与える表現
        </Text>

        <Text style={styles.listItem}>
          • 以下を目的とし、または目的とすると当社が判断する行為
        </Text>
        <Text style={styles.numberListItem}>
          1.営業、宣伝、広告、勧誘、その他営利を目的とする行(当社の認めたものを除きます)
        </Text>
        <Text style={styles.numberListItem}>
          2.性行為やわいせつな行為を目的とする行為
        </Text>
        <Text style={styles.numberListItem}>
          3.面識のない異性との出会いや交際を目的とする行為
        </Text>
        <Text style={styles.numberListItem}>
          4.他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為
        </Text>
        <Text style={styles.numberListItem}>
          5.当社、本アプリの他のユーザー、または第三者に不利益、損害または不快感を与えることを目的とする行為
        </Text>
        <Text style={styles.numberListItem}>
          6.その他、本アプリが予定している利用目的と異なる目的で本アプリを利用する行為
        </Text>
        <Text style={styles.listItem}>
          • 宗教活動または宗教団体への勧誘行為
        </Text>
        <Text style={styles.listItem}>
          • その他、当社が不適切と判断する行為
        </Text>
        <Text style={styles.paragraph}>
          当社は、ユーザーが禁止事項に該当すると判断した場合、利用停止、投稿削除、アカウント削除など必要な措置を取ることができます。
        </Text>

        <Text style={styles.chapter}>第5(本サービスの提供の停止等)</Text>

        <Text style={styles.paragraph}>
          当社は、以下のいずれかの事由があると判断した場合、本サービスの全部または一部を停止・中断します。
        </Text>
        <Text style={styles.listItem}>
          • 本アプリにかかるコンピュータシステムの保守点検または更新を行う場合
        </Text>
        <Text style={styles.listItem}>
          •
          地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
        </Text>
        <Text style={styles.listItem}>
          • コンピュータまたは通信回線等が事故などにより停止した場合
        </Text>
        <Text style={styles.listItem}>
          • その他、当社が本サービスの提供が困難と判断した場合
        </Text>
        <Text style={styles.paragraph}>
          当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害についても、一切の責任を負わないものとします。
        </Text>

        <Text style={styles.chapter}>第6(知的財産権)</Text>

        <Text style={styles.paragraph}>
          ユーザーは、自ら著作権等の必要な知的財産権を有する、または必要な権利者の許諾を得た文章、画像や映像等の情報に関してのみ、本アプリを利用し、投稿ないしアップロードできるものとします。
        </Text>
        <Text style={styles.paragraph}>
          ユーザーが本アプリを利用して投稿ないしアップロードした文章、画像、映像等の著作権については、当該ユーザーその他既存の権利者に留保されるものとします。ただし、当社は、本アプリを利用して投稿ないしアップロードされた文章、画像、映像等について、本アプリの改良、品質の向上、または不備の是正等ならびに本アプリの周知宣伝等に必要な範囲で利用できるものとし、ユーザーは、この利用に関して、著作者人格権を行使しないものとします。
        </Text>

        <Text style={styles.paragraph}>
          前項本文の定めるものを除き、本アプリおよび本アプリに関連する一切の情報についての著作権およびその他の知的財産権はすべて当社または当社にその利用を許諾した権利者に帰属し、ユーザーは無断で複製、譲渡、貸与、翻訳、改変、転載、公衆送(送信可能化を含みます。)、伝送、配布、出版、営業使用等をしてはならないものとします。
        </Text>

        <Text style={styles.chapter}>第7(個人情報の取扱い)</Text>

        <Text style={styles.paragraph}>
          当社は、ユーザーの個人情報を、当社が別途定めるプライバシーポリシーに従い、適切に取り扱います。ユーザーは、本アプリの利用にあたりプライバシーポリシーに同意するものとします。
        </Text>

        <Text style={styles.chapter}>第8(広告表示・外部サービス連携)</Text>

        <Text style={styles.paragraph}>
          本アプリには広告が表示される場合があります。広告内容によりユーザーに損害が生じても、当社は一切責任を負いません。
          また、本アプリは外部サービ(SNS、外部API等)と連携することがあります。外部サービス利用時は、それぞれの利用規約が適用されます。
        </Text>

        <Text style={styles.chapter}>
          第9(本アプリの機能追加・改善・変更)
        </Text>

        <Text style={styles.paragraph}>
          当社は、ユーザーへの事前通知なしに、本アプリの機能追加・改善・変更を行うことがあります。
        </Text>

        <Text style={styles.chapter}>第10(アプリの特性に関する免責)</Text>

        <Text style={styles.paragraph}>
          本アプリはエンターテインメント用のシミュレーションゲームであり、作中に登場する行為や表現は現実世界での犯罪行為を推奨・助長するものではありません。ユーザーが本アプリを利用したこと、または利用できなかったことに関連して生じた一切の損害について、当社は故意または重過失がある場合を除き、責任を負いません。
        </Text>

        <Text style={styles.chapter}>第11(ローカルデータに関する免責)</Text>

        <Text style={styles.paragraph}>
          本アプリのセーブデータやアカウント情報は、ユーザーの利用する端末のストレージに保存されます。機種変更、アプリの削除、端末の故障等によりデータが消失した場合、当社はデータの復元および補償等の一切の責任を負いません。
        </Text>

        <Text style={styles.chapter}>第12(利用規約の変更)</Text>

        <Text style={styles.paragraph}>
          当社は以下の場合には、ユーザーの個別の同意を要せず、本規約を変更できるものとします。
        </Text>

        <Text style={styles.listItem}>
          • 本規約の変更がユーザーの一般の利益に適合するとき
        </Text>
        <Text style={styles.listItem}>
          •
          本規約の変更が本アプリ利用契約の目的に反せず、かつ、変更の必要性、変更後の内容の相当性その他の変更に係る事情に照らして合理的なものであるとき
        </Text>
        <Text style={styles.paragraph}>
          当社はユーザーに対し、前項による本規約の変更にあたり、事前に、本規約を変更する旨及び変更後の本規約の内容並びにその効力発生時期を通知します。
        </Text>

        <Text style={styles.chapter}>第13(通知または連絡)</Text>

        <Text style={styles.paragraph}>
          ユーザーと当社との間の通知または連絡は、当社の定める方法によって行うものとします。当社は、ユーザーから、当社が別途定める方式に従った変更届け出がない限り、現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い、これらは、発信時にユーザーへ到達したものとみなします。
        </Text>

        <Text style={styles.chapter}>第14(権利義務の譲渡の禁止)</Text>

        <Text style={styles.paragraph}>
          ユーザーは、当社の書面による事前の承諾なく、利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し、または担保に供することはできません。
        </Text>

        <Text style={styles.chapter}>第15(損害賠償・責任制限)</Text>

        <Text style={styles.paragraph}>
          ユーザーが本規約に違反した場合、当社に発生した損(弁護士費用を含む。)を賠償するものとします。
          当社が責任を負う場合であっても、その責任は通常生じうる直接損害の範囲に限られます。
        </Text>

        <Text style={styles.chapter}>第16(反社会的勢力の排除)</Text>

        <Text style={styles.paragraph}>
          ユーザーは、暴力団等の反社会的勢力に該当せず、また資金提供等の関与も行わないことを保証します。違反が判明した場合、当社はユーザーに通知なく利用停止措置を行うことができます。
        </Text>

        <Text style={styles.chapter}>第17(準拠法・裁判管轄)</Text>

        <Text style={styles.paragraph}>
          本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingBottom: 20,
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
    marginBottom: 18,
  },
  chapter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginTop: 12,
    marginBottom: 8,
  },
  listItem: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
    marginLeft: 10,
    marginBottom: 6,
  },
  numberListItem: {
    fontSize: 14,
    lineHeight: 22,
    color: '#666666',
    marginLeft: 20,
    marginBottom: 6,
  },
})
