import contact from '_configs/contact.json'

// 部室・X・メールアドレス。フッターとご連絡ページで使う(以前は contact.md の
// 冒頭に書いていたが、全ページのフッターから読むためにここへ移した)
export default contact as { clubroom: string; twitterId: string; mail: string }
