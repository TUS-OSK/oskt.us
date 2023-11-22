import React from "react";
import { DragDropContext, Droppable, Draggable, DropResult,} from "react-beautiful-dnd";

export type ListState = {
  Original: number[]
  Current: number[]
}

export interface Props {
  list: ListState,
  setList: (newList: ListState) => void; 
}

export const DraggableList: React.FC<Props> = (props) => {
  const { list, setList } = props;
  const reorder = (
    listCurrent: number[],
    startIndex: number,
    endIndex: number
  ) => {
    const result = Array.from(listCurrent);
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
      Original: list.Original,
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
              width: `80%`,
              margin: `0 auto`,
              display: 'flex',
              padding: `8px`,
              justifyContent: `center`,
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
                      width: `3em`,
                      height: `3em`,
                      margin: `0 0.5em 0 0.5em`,
                      display: `flex`,
                      justifyContent: `center`,
                      alignItems: `center`,
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
