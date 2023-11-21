import React, { useState, memo, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import structuredClone from 'structured-clone';
import { DraggableList } from './DraggableList';

const nextPermutation = (input: Array<number>) : NextPermutationType => {
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
          return {ok: true, nextList: arr};
        }
      }
    }
  }
  return {ok: false, nextList: undefined};
}

function shuffle(array) {
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
const Quiz = () => {
  const [page, setPage] = useState('default');
  const initList : Array<number> = Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const shuffleList = shuffle(initList);
  const [list, setList] = useState(shuffleList);
  const {ok, nextList} = nextPermutation(shuffleList);
  console.log("shuffle", shuffleList)
  console.log("list", list)
  console.log("nextList", nextList)
  switch (page) {
    case 'default':
      return (
        <button type='button' onClick={() => {setPage('quiz')}} >
          Start
        </button>
      )
    case 'quiz':
      return (
        <div>
          <DraggableList list={list} setList={setList} />
          <button type='button' onClick={() => {setPage('result')}} >
            Submit
          </button>
        </div>
      )
    case 'result':
      return (
        <div>
          {JSON.stringify(nextList) === JSON.stringify(list) ? 
            "Correct"
              : 
            <div>
              "Wrong"
              "Problem"
              {shuffleList}
              "Answer"
              {nextList}
              "Your Solution"
              {list}
            </div>
          }
        </div>
      )
  }
}

export default function Kyopro() {
  return (
    <div>
      <Quiz />
    </div>
  )
}
