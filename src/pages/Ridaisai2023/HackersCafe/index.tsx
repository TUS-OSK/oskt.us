import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

export default function HackersCafe() {
  return (
    <Text>
      hello
    </Text>
  )
}


const Text = styled.p`
`

const Flex = styled.div`
  width: 100%;
  margin: auto;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`

const List = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Elem = styled.span`
  width: 3em;
  height: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
`

const Gamen = styled.div`
  height: 20em;
  background: rgb(43, 135, 209);
  position: relative;
  color: white;
  user-select: none;
  overflow: hidden;
  text-align: center;
`
