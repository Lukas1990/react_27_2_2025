import AddToDo from './AddToDo'
import ListToDo from './ListToDo'

import {useState, useEffect} from "react"

function ToDoApp(props) {

  let savedItems = JSON.parse(localStorage.getItem("savedItems"))
  if (savedItems == null) { savedItems = [] }

  const [items, setItems] = useState(savedItems) 

  function handleItemSubmit(item) {
    setItems([...items, item])
  }
  function handleItemDelete(id) {
    setItems( items.filter( (item, index) => index != id ) )
  }

  useEffect(() => {
    localStorage.setItem("savedItems", JSON.stringify(items))
  }, [items])

  return (
    <div className="kontajner" id="zoznam_uloh">

    <ListToDo phrase={props.phrase} items={items} onItemDelete={handleItemDelete} />
    <AddToDo phrase={props.phrase} onItemSubmit={handleItemSubmit} ovocie="jablko" />

    </div>
  )
}

export default ToDoApp
