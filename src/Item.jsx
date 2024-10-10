export default function Item({ item, toggleItem }) {

    return (
        <div className="fashion-preview">
            <input type="checkbox" checked={item.complete} onChange={() => toggleItem(item.id)} />
            <p>{item.name}</p>
            <img src={item.image} width={200} />
            <p>Type: {item.type}</p>
        </div>
    );
}