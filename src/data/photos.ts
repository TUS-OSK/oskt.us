// 部員から提供された活動写真。トップのヒーロー直下に流れる帯と、各班のページに出る。
// 追加するときは public/images/activity/ に置いて(長辺1200px程度・位置情報なし)、ここに1行足す。
// 顔出しに同意していない部員は、絵文字やぼかしで加工済みのものだけを置くこと。

export interface Photo {
  src: string
  alt: string
  /** src/data/teams.ts の班の id */
  team: string
  width: number
  height: number
}

// 並び順は帯に流れる順。同じ班が続かないように混ぜる
export const PHOTOS: Photo[] = [
  {
    src: '/images/activity/stat-whiteboard-study.jpg',
    alt: 'ホワイトボードに最小二乗推定量の導出を書きながら話し合う部員',
    team: 'stat',
    width: 1200,
    height: 900,
  },
  {
    src: '/images/activity/ml-writing-together.jpg',
    alt: '黒板の前で議論する部員',
    team: 'ml',
    width: 1179,
    height: 700,
  },
  {
    src: '/images/activity/kyopro-abc358-review.jpg',
    alt: 'AtCoder Beginner Contest 358 の感想戦で、オンラインのホワイトボードに書き込んだ各問題の解き方',
    team: 'kyopro',
    width: 900,
    height: 675,
  },
  {
    src: '/images/activity/ml-blackboard-work.jpg',
    alt: '黒板で誤差逆伝播を計算する部員',
    team: 'ml',
    width: 1038,
    height: 698,
  },
  {
    src: '/images/activity/stat-board.jpg',
    alt: '2標本のt検定の解き方を書き込んだ黒板',
    team: 'stat',
    width: 1200,
    height: 900,
  },
  {
    src: '/images/activity/kyopro-standings.jpg',
    // 2026-07-03 に部の X で「応用数学研究部のメンバーのICPCの結果」として出したもの。
    // 葛飾の別の部のチームも混ざっている可能性があるので、「部のチーム」とは書かない
    alt: 'ICPC 2026 国内予選の順位表。他の部と合同のチームも含め、東京理科大学から出場したチームが並んでいる',
    team: 'kyopro',
    width: 1200,
    height: 419,
  },
  {
    src: '/images/activity/ml-board.jpg',
    alt: '誤差逆伝播法の計算を書き込んだ黒板',
    team: 'ml',
    width: 1179,
    height: 698,
  },
  {
    src: '/images/activity/kyopro-abc356-review.jpg',
    alt: 'AtCoder Beginner Contest 356 の感想戦で、オンラインのホワイトボードに書き込んだ図とメモ',
    team: 'kyopro',
    width: 800,
    height: 600,
  },
]

export const photosOf = (teamId: string) => PHOTOS.filter((p) => p.team === teamId)
