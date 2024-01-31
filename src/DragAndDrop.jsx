import { useState } from "react";

const DragAndDrop = ({listItems, draggedItems, onDrop}) => {
    const [draggedList, setDraggedList] = useState(draggedItems || [])
    const [isDragging, setIsDragging] = useState(false)
  

  const [list, setList] = useState(listItems)

  const handleDragOver = (event) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragStart = (event) => {
    event.dataTransfer.setData("id", event.currentTarget.id)
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id")
    const item = list.find(x => x.id == id)
    if(item){
        setDraggedList([...draggedList, item])
        setIsDragging(false)

        const filteredList = list.filter(x => x.id !== id)
        setList(filteredList)

        onDrop && onDrop(item)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="p-4 mt-5 bg-white rounded-lg shadow-lg">
        {/* Source */}
        <ul className="list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40">
            {list?.map((item) => (
                <li key={item.id} id={item.id}
                draggable
                onDragStart={handleDragStart}
                className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
                >{item.label}</li>
            ))}
        </ul>
      </div>
      <div className={`m-4 bg-white rounded-lg shadow-lg border-dotted border-2 min-h-60 ${isDragging? "border-black" : "border-indigo-300"}`}
      onDragOver={handleDragOver} onDrop={handleDrop}>
        {/* Target */}
        <p>Drag Items here</p>
        <ul className="list-none p-0 m-0 bg-indigo-200 border border-indigo-300 min-h-40">
            {draggedList?.map((item) => (
                <li key={item.id} id={item.id}
                className="bg-white border border-indigo-300 p-4 mb-2 cursor-move"
                >{item.label}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DragAndDrop;
