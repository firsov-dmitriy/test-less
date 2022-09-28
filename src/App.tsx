import React from "react";
import ItemList from "./components/ItemList/ItemList";
import { useGetItemsQuery } from "./service/itemService";
function App() {
  const { data, isLoading } = useGetItemsQuery({});
  if (isLoading) {
    return <div>loading...</div>;
  }
  return <div>{data && <ItemList items={data} />}</div>;
}

export default App;
