import "./App.css";
import DragAndDrop from "./DragAndDrop";

function App() {
  const listItems = [
    { id: "item1", label: "Item 1" },
    { id: "item2", label: "Item 2" },
    { id: "item3", label: "Item 3" },
    { id: "item4", label: "Item 4" },
    { id: "item5", label: "Item 5" },
    { id: "item6", label: "Item 6" },
  ];
  const draggedItems = [
    { id: "item10", label: "Item 10" },
    { id: "item11", label: "Item 11" },
    { id: "item12", label: "Item 12" },
    { id: "item13", label: "Item 13" },
    { id: "item14", label: "Item 14" },
    { id: "item15", label: "Item 15" },
  ];

  return (
    <>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <DragAndDrop listItems={listItems} draggedItems={draggedItems} onDrop={(item) => alert(item.label)}></DragAndDrop>
    </>
  );
}

export default App;
