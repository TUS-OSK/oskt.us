import { useState } from 'react'
import styled from '@emotion/styled'
import structuredClone from 'structured-clone'
import { DraggableList, ListState } from './DraggableList'

const nextPermutation = (input: Array<number>) => {
  // deep copy
  const arr = structuredClone(input)
  const n = arr.length
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      for (let j = n - 1; j > i; j--) {
        if (arr[j] > arr[i]) {
          ;[arr[i], arr[j]] = [arr[j], arr[i]]
          const len = (n - (i + 1)) >> 1
          for (let k = 0; k < len; k++) {
            ;[arr[i + 1 + k], arr[n - 1 - k]] = [arr[n - 1 - k], arr[i + 1 + k]]
          }
          return arr
        }
      }
    }
  }
  return undefined
}

export function shuffle(array: number[]) {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export function init(array: number[]) {
  const n = array.length
  const l = [3, 4, 5, 6]
  const i = l[getRandomInt(4)]
  const narray = shuffle(array)
  const ret = [
    ...narray.slice(0, n - i),
    ...narray
      .slice(n - i)
      .sort()
      .reverse(),
  ]
  return ret
}

const Button = styled.button`
  text-align: center;
  background-color: rgb(255, 209, 84);
  color: rgb(51, 51, 51);
  width: 7em;
  height: 2.5em;
  min-width: 100px;
  box-shadow: none;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.2em;
  cursor: pointer;
  margin: 0 0 2em 0;
`

const DisplayList = (props) => {
  const { list } = props
  return (
    <List>
      {list.map((elem) => (
        <Elem>{elem}</Elem>
      ))}
    </List>
  )
}

export default () => {
  const [page, setPage] = useState('default')
  const array = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9])
  let initList = init(array)
  if (initList === array.reverse()) {
    initList = array
  }
  const [list, setList] = useState<ListState>({
    Original: initList,
    Current: initList,
  })
  const playAgain = () => {
    let initList = init(array)
    if (initList === array.reverse()) {
      initList = array
    }
    setList({
      Original: initList,
      Current: initList,
    })
    setPage('default')
  }
  switch (page) {
    case 'default':
      return (
        <Flex>
          <Title>Next Permutation!</Title>
          <Description>与えられた数列のnext_permutationを答えるゲームです。</Description>
          <Button
            type="button"
            onClick={() => {
              setPage('quiz')
            }}
          >
            遊ぶ
          </Button>
        </Flex>
      )
    case 'quiz':
      return (
        <Flex>
          <Title>問題</Title>
          <DisplayList list={list.Original} />
          <Title>回答</Title>
          <DraggableList list={list} setList={setList} />
          <Button
            type="button"
            onClick={() => {
              setPage('result')
            }}
          >
            回答する
          </Button>
        </Flex>
      )
    case 'result':
      const nextList = nextPermutation(list.Original)
      if (JSON.stringify(nextList) === JSON.stringify(list.Current)) {
        return (
          <Flex>
            <Title>正解！！</Title>
            <Button
              type="button"
              onClick={() => {
                playAgain()
              }}
            >
              もう一度遊ぶ
            </Button>
          </Flex>
        )
      } else {
        return (
          <Flex>
            <Title>不正解</Title>
            <Title>問題</Title>
            <DisplayList list={list.Original} />
            <Title>あなたの回答</Title>
            <DisplayList list={list.Current} />
            <Title>正解</Title>
            <DisplayList list={nextList} />
            <Button
              type="button"
              onClick={() => {
                playAgain()
              }}
            >
              もう一度遊ぶ
            </Button>
          </Flex>
        )
      }
    default:
      return null
  }
}

const Flex = styled.div`
  width: 100%;
  display: flex;
  background: rgb(43, 135, 209);
  color: white;
  margin: auto;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 1em;
`

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Elem = styled.span`
  width: 3em;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid rgba(255, 255, 255, 0.1);
  border-radius: 5px;
`

const Gamen = styled.div`
  background: rgb(43, 135, 209);
  position: relative;
  color: white;
  user-select: none;
  overflow: hidden;
  text-align: center;
`

const Description = styled.div`
  font-family: 'Yu Gothic', sans-serif;
  margin: 0 3%;
  font-size: 1em;
  text-align: left;
`

const Title = styled.div`
  margin: 0.5em 0 0 0;
  font-family: 'Hiragino Kaku Gothic Pro', sans-serif;
  font-size: 2em;
  line-height: 1.3em;
  text-align: left;

  &::after {
    content: '';
    display: block;
    width: 100%;
    border-bottom: solid 2px #5d639e;
    margin: 5px auto;
  }
`
