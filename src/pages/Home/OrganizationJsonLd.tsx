import Head from 'next/head'
import contact from 'src/data/contact'

// 検索エンジン・AI 検索向けに、部の基本情報を機械が読める形で埋め込む(見た目には出ない)。
// 文面の方針は docs/copy-plan.md の 1.3
const DATA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '応用数学研究部',
  alternateName: ['応数研', 'OSK', '東京理科大学 応用数学研究部'],
  url: 'https://oskt.us',
  logo: 'https://oskt.us/images/og.jpg',
  foundingDate: '1959',
  description:
    '東京理科大学の部活動(Ⅰ部研究会)。数学・プログラミング・データサイエンス・統計・AIを扱い、機械学習、数理統計、競技プログラミング、コンピュータサイエンス、3DCG、Web・アプリ開発の班で活動する。',
  parentOrganization: { '@type': 'CollegeOrUniversity', name: '東京理科大学', url: 'https://www.tus.ac.jp/' },
  location: { '@type': 'Place', name: `東京理科大学 ${contact.clubroom}(部室)` },
  knowsAbout: [
    '応用数学',
    '機械学習',
    'データサイエンス',
    '統計学',
    '統計検定',
    '競技プログラミング',
    'ICPC',
    'AtCoder',
    'コンピュータサイエンス',
    '型理論',
    '定理証明 Lean',
    '3DCG',
    'Unity',
    'Blender',
    'Webアプリ開発',
  ],
  email: contact.mail,
  sameAs: [`https://x.com/${contact.twitterId}`, 'https://github.com/TUS-OSK'],
}

export default function OrganizationJsonLd() {
  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DATA) }} />
    </Head>
  )
}
