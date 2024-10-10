import Item from "./Item";
import Type from "./Type";
import { useState } from "react";

export default function ItemList({ items, toggleItem, deleteItems }) {

    const [filter, setFilter] = useState('');

    function filterType(e) {
        setFilter(e);
    }

    return (
        <>
            <Type items={items} filterType={filterType} /><br />
            <button className="deleteBtn" onClick={deleteItems}>Remove</button>

            <div className="flex-container">
                {items.map(item => {
                    if (filter && item.type !== filter) { return null; } //do not show items if select the item type is not equal to the item type
                    return <Item key={item.id} item={item} toggleItem={toggleItem} />;
                }
                )}
            </div>
        </>
    );
}