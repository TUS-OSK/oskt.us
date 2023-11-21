import React, { useState, memo } from "react";
import ReactDOM from "react-dom";
import styled from "@emotion/styled";
import { DragDropContext, Droppable, Draggable, DropResult, DraggingStyle, NotDraggingStyle,} from "react-beautiful-dnd";

export interface Props {
  list: any,
  setList: (newList: any) => void; 
}

export const DraggableList: React.FC<Props> = (props) => {
  const { list, setList } = props;
  const reorder = (
    list: any,
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(list.Current);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) {
      return;
    }
    const newList = reorder(
      list.Current,
      result.source.index,
      result.destination.index
    );
    setList({
      Original: lists.Original,
      Current: newList,
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list" direction="horizontal">
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={{
              width: `20%`,
              margin: `auto`,
              background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
              display: 'flex',
              padding: `8px`,
              ...provided.droppableProps
            }}
          >
            {list.Current.map((elem, index) => (
              <Draggable key={elem.toString()} draggableId={elem.toString()} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: 'none',
                      padding: 16,
                      margin: `0 8px 0 0`,
                      background: snapshot.isDragging ? 'lightgreen' : 'grey',
                      ...provided.draggableProps.style,
                    }}
                  >
                    {elem}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
};
