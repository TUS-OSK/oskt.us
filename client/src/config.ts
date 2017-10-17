/**
 * 定数の詰め合わせ
 */

const twitter = {
  screen_name: 'tus_osk',
  url: 'https://twitter.com/tus_osk'
}

export default {
  twitter,
  mail: 'os_ken@ed.tus.ac.jp',
  menu: [
    { label: 'About', path: '/page/main/about' },
    { label: 'Location', path: '/page/main/location' },
    { label: 'Schedule', path: '/page/main/schedule' },
    { label: 'Archive', path: '/archive' },
    { label: 'Twitter', path: twitter.url }
  ]
}
