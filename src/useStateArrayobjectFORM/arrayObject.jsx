import { useState } from "react";
export default function ArrayObjectOnChange() {
  let [cars, setCars] = useState([]);
  let [year, setYear] = useState(new Date().getFullYear());
  let [make, setMake] = useState("");
  let [model, setModel] = useState("");

  function AddCars() {
let newCar = {y:year,company:make||"company",make,name:model||"name"};
    setCars(c=>[...c,newCar]);
    setYear(new Date().getFullYear());
    setMake('');
    setModel("");
  }
  function RemoveCars(index) {

    setCars(c=>c.filter((_,i)=>i!==index));
  }

  function HandleYear(e) {

    setYear(e.target.value);
  }

  function HandleMake(e) {
    setMake(e.target.value);
  }

  function HandleModel(e) {
    setModel(e.target.value);
  }
  return (
    <>
      <h1>List of Cars</h1>
      <ul>{cars.map((car,i)=><li key={i} onClick={()=>RemoveCars(i)} style={{cursor:"pointer"}}>{car.y} {car.company} {car.name}</li>)}</ul>

      <input type="number" value={year} onChange={HandleYear}/>
      <br />
      <input type="text" name="" id="" value={make} onChange={HandleMake} placeholder="enter maker name" />
      <br />
      <input type="text" value={model} onChange={HandleModel} placeholder="enter model" />
      <br />
      <button onClick={AddCars}>Add Cars</button>
    </>
  );
}
