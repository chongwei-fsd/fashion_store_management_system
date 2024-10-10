import { useState, useRef } from "react";
import ItemList from "./ItemList";
import Form from "./Form";

const defaultItems = [
    { id: crypto.randomUUID(), image: 'https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/472740/item/sggoods_11_472740.jpg?width=750', name: 'AIRism Cotton Cropped Boxy T-Shirt', type: 'women', complete: false },
    { id: crypto.randomUUID(), image: 'https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/471587/item/sggoods_53_471587.jpg?width=750', name: 'AIRism Cotton Sleeveless T-Shirt', type: 'men', complete: false },
    { id: crypto.randomUUID(), image: 'https://image.uniqlo.com/UQ/ST3/sg/imagesgoods/465145/item/sggoods_01_465145.jpg?width=750', name: 'KIDS AIRism Cotton Graphic T-Shirt', type: 'kids', complete: false }
];

export default function App() {

    const [items, setItems] = useState(defaultItems); //usestate hook to track state in a function component
    const nameRef = useRef();//useref hook allow persists values between renders, store value that does not cause a re-render when updated
    const typeRef = useRef();
    const imageRef = useRef();

    function addItem(e) {
        e.preventDefault();
        const nameVal = nameRef.current.value;
        const typeVal = typeRef.current.value;
        const imageVal = imageRef.current.value;
        console.log(nameVal);
        if (nameVal === "" || typeVal === "" || imageVal === "") { return alert('Cannot be empty!'); } //if field is empty do nothing
        if (items.some(item => item.type.toLowerCase() === typeVal.toLowerCase())) { return alert(typeVal + ' already added!'); } //avoid adding if type is exists
        setItems(prevItems => { //function call previous items
            return [...prevItems, { id: crypto.randomUUID(), image: imageVal, name: nameVal, type: typeVal, complete: false }]; //after previous items, add new item into array
        });
        nameRef.current.value = null; //after click add input field becomes empty
        typeRef.current.value = null; //after click add input field becomes empty
        imageRef.current.value = null; //after click add input field becomes empty
    }

    function toggleItem(id) {
        const newItems = [...items]; //copy of the current items and set new state
        const item = newItems.find(i => i.id === id); //select items based on the ids from item input checkbox onchange function
        item.complete = !item.complete; //checkbox from false becomes true; unticked becomes ticked
        setItems(newItems);
    }

    function deleteItems() {
        const newItems = [...items]; //copy of the current items and set new state
        setItems(newItems.filter(i => !i.complete)); //only filter items are true (ticked checkbox)
    }

    return (
        <>
            <Form addItem={addItem} nameRef={nameRef} imageRef={imageRef} typeRef={typeRef} />
            <br />
            <ItemList items={items} toggleItem={toggleItem} deleteItems={deleteItems} />
        </>
    );
}
