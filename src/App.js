import React, {useState} from 'react';
import Header from "./components/Header"
import Lista_phone from "./components/lista_phone"
import Carrito_Compras from "./components/carrito_compras"
import { v4 as uuidv4 } from "uuid"


function App() {


  const [phone, setPhone] = useState([
    { id: uuidv4(), marca: "Iphone XS", precio: 3100 },
    { id: uuidv4(), marca: " Samsung Note 9", precio: 2500 },
    { id: uuidv4(), marca: "Sony Xperia x10", precio: 1200 },
    { id: uuidv4(), marca: "Nokia b200", precio: 1980 },
  ]);



const [carrito, setCarrito] = useState([])


  return (
    <div className="container">
     <div className="row">
    <div className="col-12">
    <Header title="Venta de Smartphone 2020"  />
    </div>
      <div className="col-6">
        <h3>Lista de SmartPhones</h3>
      {phone.map( ev_phone => (
        <Lista_phone
        phone={phone}
        ev_phone={ev_phone}
        key={ev_phone.id}
        carrito={carrito}
        setCarrito={setCarrito}
        />
      ))}
      </div>
      <div className="col-6">
        <h3 className="text-center"  >Carrito</h3>


    </div>
    </div>
    </div>
  );
}

export default App;
