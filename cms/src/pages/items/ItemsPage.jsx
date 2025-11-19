import { useEffect, useState } from "react";
import { getAllItems } from "../../services/items/itemApi";

function ItemsPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getAllItems();
      setItems(data);
    }
    load();
  }, []);

  return (
    <div>
      <h1>Items</h1>
      {items.map(i => (
        <p key={i._id}>{i.name}</p>
      ))}
    </div>
  );
}

export default ItemsPage;
