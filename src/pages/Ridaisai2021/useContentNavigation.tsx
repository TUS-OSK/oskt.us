import Link from 'next/link'
import { FC, useMemo } from 'react'
import styled from '@emotion/styled'
import { ContentType } from './api'

export function useContentNavigation(type: 'top' | ContentType, Icon: FC) {
  const link = useMemo(
    () => (
      <NavigationIconWrapper href={`#${type}`}>
        <Icon />
      </NavigationIconWrapper>
    ),
    [],
  )

  const anchor = useMemo(() => <div id={type}></div>, [])

  return [link, anchor] as const
}

const NavigationIconWrapper = styled(Link)`
  color: black;
  display: flex;
  text-decoration: none;

  :hover {
    cursor: pointer;
  }
`
