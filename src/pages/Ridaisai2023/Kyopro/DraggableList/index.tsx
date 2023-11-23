import React from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import styled from '@emotion/styled'

export type ListState = {
  Original: number[]
  Current: number[]
}

export interface Props {
  list: ListState
  setList: (newList: ListState) => void
}

export const DraggableList: React.FC<Props> = (props) => {
  const { list, setList } = props
  const reorder = (listCurrent: number[], startIndex: number, endIndex: number) => {
    const result = Array.from(listCurrent)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)
    return result
  }
  const onDragEnd = (result: DropResult): void => {
    if (!result.destination) {
      return
    }
    const newList = reorder(list.Current, result.source.index, result.destination.index)
    setList({
      Original: list.Original,
      Current: newList,
    })
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list" direction="horizontal">
        {(provided, snapshot) => (
          <List ref={provided.innerRef}>
            {list.Current.map((elem, index) => (
              <Draggable key={elem.toString()} draggableId={elem.toString()} index={index}>
                {(provided, snapshot) => (
                  <Elem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {elem}
                  </Elem>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  )
}

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
