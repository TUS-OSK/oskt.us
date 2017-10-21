/**
 * 何をやっているの？
 */

import * as React from 'react'

import { Section, Title, Content } from '../common/section'

type Props = {
  className?: string
}

const About: React.SFC<Props> = function About (p) {
  return (
    <Section className={p.className}>
      <Title>Hello!</Title>
      <Content>
        <p>応用数学研究部(応数研, OSK)は東京理科大学一部研究会に属する部活動団体で、創部から半世紀以上たつ歴史ある団体です。</p>
        <p>コンピュータを利用してプログラミングを主に、計算機科学、WEB開発、アプリケーション開発、ゲーム開発、など様々なことに挑戦しています。</p>
      </Content>
    </Section>
  )
}

export default About
