import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import "./index.css";

const Table = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Buy a car", status: "to do", checked: false },
    {
      id: 2,
      name: "Complete CIT-1942 ticket in JIRA",
      status: "done",
      checked: false,
    },
    {
      id: 3,
      name: "Purchase an ESP32-C3 microcontroller",
      status: "to do",
      checked: false,
    },
  ]);

  const allChecked = items.every((item) => item.checked);
  const someChecked = items.some((item) => item.checked);

  const toggleAll = () => {
    setItems(items.map((item) => ({ ...item, checked: !allChecked })));
  };

  const toggleOne = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <div className="table-container">
      <table className="table">
        <colgroup>
          <col style={{ width: "40px" }} /> {/* checkbox */}
          <col /> {/* name, takes remaining */}
          <col style={{ width: "120px" }} /> {/* status */}
          <col style={{ width: "40px" }} /> {/* edit */}
        </colgroup>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allChecked}
                indeterminate={String(!allChecked && someChecked)}
                onChange={toggleAll}
              />
            </th>
            <th>Task Name</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleOne(item.id)}
                />
              </td>
              <td title={item.name}>{item.name}</td>
              <td>{item.status}</td>
              <td>
                <button className="edit-btn">
                  <FiEdit2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
