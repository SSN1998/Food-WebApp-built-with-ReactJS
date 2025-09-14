import { useDispatch } from "react-redux";{}
import { addItem } from "../store/slices/cartSlice";
import { FOODITEM_IMG_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-40 p-4">
            <div className="absolute">
              <button
                className="p-2 mx-8 bg-black text-white rounded-lg shadow-lg "
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={FOODITEM_IMG_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
