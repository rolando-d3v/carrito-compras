import React from "react";

export default function Lista_phone({ ev_phone, carrito, setCarrito, phone }) {
  const { marca, precio, id } = ev_phone;


    const agregarCarrito = (id) => {
       const agregar = phone.filter( ev => ev.id === id)
       setCarrito([
           ...carrito,...agregar
       ])  
    }


  return (
    <div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4  my-auto p-2  ">
            <img
              src="https://i5.walmartimages.com/asr/c26deb3e-43a7-4363-935c-f7a06c9089b7_1.bb2bd2328743a21caef3d6c7504fab82.jpeg"
              className="card-img"
              alt="phone"
              style={{ width: "100%" }}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{marca} </h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                 additional contentss.
              </p>
              <p className="card-text d-flex  justify-content-between ">
                <small className="text-muted">Precio: $ {precio}</small>
                <button className="btn btn-secondary" 
                onClick={() =>  agregarCarrito(id) }
                >
                  Agregar Carrito
              </button>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
