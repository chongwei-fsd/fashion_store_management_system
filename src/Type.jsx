export default function Type({items,filterType}){

    return (    
        <select onChange={(e)=>filterType(e.target.value)}>
            <option value="">-- All Type</option>
            {items.map((item)=>
              <option key={item.id} value={item.type}>{item.type}</option>    
            )}      
        </select>
    )
}