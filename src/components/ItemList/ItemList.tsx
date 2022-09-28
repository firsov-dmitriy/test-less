import React, { FC, useEffect, useState } from "react";
import { IItems } from "../../Types/Type";
import ItemCard from "../ItemCard/ItemCard";
import "./style.scss";

interface ItemListProps {
  items: IItems[];
}

const ItemList: FC<ItemListProps> = ({ items }) => {
  return (
    <div className="card__list">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemList;
