import React, { FC } from "react";
import { IItems } from "../../Types/Type";
import "./style.scss";

interface ItemCardProps {
  item: IItems;
}

const ItemCard: FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__body">
          <div className="card__body-project">{item.name}</div>
          <div className="card__body-type">{item.type}</div>
          <div className="card__body-conditon">{item.conditions}</div>
          <div className="card__body-volume">{item.volume}</div>
          <div className="card__body-roi">{item.roi}</div>
          <div className="card__body-free">{item.free}</div>
          <div className="card__body-hadge">{item.hedge}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
