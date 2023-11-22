import { useState } from "react";
import styled from '@emotion/styled'
import structuredClone from 'structured-clone';
import { DraggableList, ListState } from './DraggableList';

const nextPermutation = (input: Array<number>) => {
  // deep copy
  const arr = structuredClone(input)
  const n = arr.length
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      for (let j = n - 1; j > i; j--) {
        if (arr[j] > arr[i]) {
          [arr[i], arr[j]] = [arr[j], arr[i]];
          const len = (n - (i + 1)) >> 1;
          for (let k = 0; k < len; k++) {
            [arr[i + 1 + k], arr[n - 1 - k]] = [ arr[n - 1 - k], arr[i + 1 + k], ];
          }
          return arr;
        }
      }
    }
  }
  return undefined;
}

// function shuffle(input) {
//   let array = structuredClone(input)
function shuffle(array: number[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
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
`;
const DisplayList = (props) => {
  const { list } = props
  return (
    <List>
      {list.map((elem) => (
        <Elem>
          {elem}
        </Elem>
      ))}
    </List>
  )
}

const Quiz = () => {
  const [page, setPage] = useState('default');
  const initList = shuffle(Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]))
  const [list, setList] = useState<ListState>({
    Original: initList,
    Current: initList,
  });
  switch (page) {
    case 'default':
      return (
        <Button type='button' onClick={() => {setPage('quiz')}} >
          遊ぶ
        </Button>
      )
    case 'quiz':
      return (
        <Flex>
          <Text>
            問題
          </Text>
          <DisplayList list={list.Original} />
          <Text>
            この配列を並び替えて回答してね
          </Text>
          <DraggableList list={list} setList={setList} />
          <Button type='button' onClick={() => {setPage('result')}} >
            回答
          </Button>
        </Flex>
      )
    case 'result':
      const nextList = nextPermutation(list.Original)
      return (
        <Flex>
          <Text>
            {JSON.stringify(nextList) === JSON.stringify(list.Current) ? 
                "正解"
              : 
                "不正解"
            }
          </Text>
          <Text>
            問題
          </Text>
          <DisplayList list={list.Original} />
          <Text>
            あなたの回答
          </Text>
          <DisplayList list={list.Current} />
          <Text>
            正解
          </Text>
          <DisplayList list={nextList} />
          <Button type='button' onClick={() => {setPage('quiz')}} >
            もう一度遊ぶ
          </Button>
        </Flex>
      )
    default:
      return null
  }
}

export default function Kyopro() {
  return (
    <div>
      <Gamen>
        <Quiz />
      </Gamen>
    </div>
  )
}
const Play = styled.div`
`

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
  background: rgb(43, 135, 209);
  position: relative;
  color: white;
  user-select: none;
  overflow: hidden;
  text-align: center;
`
