import { useState, useEffect, clickHandler } from "react";
import sortByProperty from "./battle items/sortByProperty";
//import usersFromFile from "../users.js"

const usersForSorting = [
  {
    name: "Balance Harpoon",
    attack: 15,
    defense: 3,
    luck: 0,
  },
  {
    name: "Cave Spear",
    attack: 11,
    defense: 11,
    luck: 0,
  },
  {
    name: "Dark Forest Sword",
    attack: 15,
    defense: 0,
    luck: 2,
  },
  {
    name: "Dark Forest Sword (2017",
    attack: 12,
    defense: 0,
    luck: 12,
  },
  {
    name: "Dawn Sword",
    attack: 16,
    defense: 0,
    luck: 2,
  }
];

const sortOptions = [
  { title: "By attack", property: "attack" },
  { title: "By defense", property: "defense" },
  { title: "By luck", property: "luck" }
];

export default function App() {
  const [sortType, setSortType] = useState(sortOptions[0]);
  const [users, setUsers] = useState(usersForSorting);
  const [actBtn, setActBtn] = useState(sortOptions[0])

  useEffect(() => {
    const newUsers = [...users].sort(sortByProperty(sortType.property));
    setUsers(newUsers);
  }, [sortType]);

  const changeSortType = (e) => {
    const selectedType = sortOptions.find(
      (type) => type.title === e.target.value
    );
    //console.log(`Picked sort type is ${e.target.value}`)
    setSortType(selectedType);
  };

  clickHandler = (sort) => {
    setActBtn(sort);
    setSortType(sort);

    console.log(sort);
  }

  console.log(users);

  return (
    <div className="App">
      <h1>Dynamic sorting</h1>
      <div>
        {sortOptions.map((item, index) => (
          <button
          className={item === actBtn ? "btn-active" : ""}  
          onClick={() => clickHandler(item)}  key={index}>{item.title}</button>
        ))}
      </div>
      <select onChange={changeSortType}>
        {sortOptions.map(({ title }, index) => {
          return <option key={index}>{title}</option>;
        })}
      </select>
      <div>
        {users.map((item, index) => (
          <div key={index} >
            {item.name}
            <br/>+{item.attack} Atk / +{item.defense} Def / +{item.luck} Luck
            <br/>
          </div>
        ))}
      </div>
    </div>
  );
}
