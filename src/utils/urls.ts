import { join } from 'path'

const externalUrlOrigin = {
  twitter: 'https://twitter.com',
}

type ExternalUrlType = keyof typeof externalUrlOrigin

export const externalTo = (type: ExternalUrlType, path: string) => join(externalUrlOrigin[type], path)

export const mailTo = (to: string) => join('mailto:', to)
