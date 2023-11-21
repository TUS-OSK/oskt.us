import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import type { Quote as QuoteType } from "../types";
import structuredClone from 'structured-clone';


const grid = 8;
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function Quote({ quote, index }) {
  return (
    <Draggable draggableId={quote.id} index={index}>
      {provided => (
        <QuoteItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
            {quote.content}
        </QuoteItem>
      )}
    </Draggable>
  );
}

const getListStyle = isDraggingOver => ({
  width: `100%`,
  margin: `auto`,
  justifyContent: `space-around`,
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  padding: grid,
});


const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 ${grid}px 0 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const ListStyle = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: auto;
`;

type NextPermutationType = {
  ok: boolean
  nextList : Array<number>
}

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

const DefaultPage = (props) => {
  const { setPage } = props
  return (
    <div>
      <button type='button' onClick={() => {console.log("hello"); setPage('quiz')}} >
        Start
      </button>
    </div>
  )
}

const QuizPage = (props) => {
  const { setPage } = props
  const initList = Array.from({ length: 15 }, (v, k) => k)
                        .map(k => {
                          const custom: Quote = {
                            id: `id-${k}`,
                            content: `${k}`
                          };
                          return custom;
                        })

  // const { ok, nextList } = nextPermutation(initList);
  console.log(initList)
  // console.log(nextList)

  const [state, setState] = useState({ quotes: initList });

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const quotes = reorder(
      state.quotes,
      result.source.index,
      result.destination.index
    );

    setState({ quotes });
  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list" direction="horizontal">
          {(provided, snapshot)  => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {state.quotes.map((quote, index) => (
                <Draggable key={quote.id} draggableId={quote.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                    >
                      {quote.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button type='button' onClick={setPage('result')} >
        Submit
      </button>

    </div>
  );
}

const ResultPage = (props) => {
  return (
    <div>yay!</div>
  )
}

const Center = styled.div`
  width: 55%;
  height: 50%;
  min-height: 280px;
  margin: auto;
`

export default function Kyopro() {
  const [page, setPage] = useState('default');


  return <QuizPage setPage={setPage}/>
  // switch (page) {
  //   case 'default':
  //     return <DefaultPage setPage={setPage}/>
  //   case 'quiz':
  //     return <QuizPage state={state} setState={setState} setPage={setPage}/>
  //   case 'result':
  //     return <ResultPage state={state} setPage={setPage}/>
  // }
}


