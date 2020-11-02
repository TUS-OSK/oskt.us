import { FlattenSimpleInterpolation } from 'styled-components'

export const mergeCss = (cssList: FlattenSimpleInterpolation[]) =>
  cssList.reduce((prevCss, currentCss) => {
    const first = prevCss.slice(0, -1)
    const latter = currentCss.slice(1)
    const coupler = `${prevCss[prevCss.length - 1]}${currentCss[0]}`
    return [...first, coupler, ...latter]
  })
