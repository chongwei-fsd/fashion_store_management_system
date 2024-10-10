export default function Form({ addItem, nameRef, imageRef, typeRef }) {

    return (
        <form onSubmit={addItem}>
            <fieldset>
                <legend><h2>Add Fashion Item</h2></legend>
                <div>
                    <label>Name: </label>
                    <input type="text" ref={nameRef} />
                </div>
                <div>
                    <label>Image: </label>
                    <input type="text" ref={imageRef} />
                </div>
                <div>
                    <label>Type: </label>
                    <input type="text" ref={typeRef} />
                </div>
                <button>Add</button>
            </fieldset>
        </form>
    );
}