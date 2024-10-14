import { MouseEvent, useState } from "react";
function ListGroup() {
  let items = ["New York", "Dhaka", "Sylhet", "Gazipur"];
  //   items = [];
  let SelectedItem =0;
  const arr = useState(-1);
  const handleClick = (event: MouseEvent) => ;
  return (
    <>
      <h1>LIST</h1>
      {items.length == 0 && <h3>No Item Found</h3>}
      <ul className="list-group">
        {items.map((item,index) => (
          <li className={SelectedItem===index ? "list-group-item active" : "list-group-item" }
           key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
