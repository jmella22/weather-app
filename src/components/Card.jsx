import React from "react";
import S from "../styles/Card.module.css";

export default function Card({ descrp, img, max, min, name, onClose, id }) {
  // acá va tu código
  return (
    <div className={S.container}>
      <div className={S.button}>
        <button onClick={onClose} className={S.x}>
          X
        </button>
      </div>
      <div>
        <h4 className={S.text}>{name}</h4>
      </div>
      <div className={S.clima}>
        <div className={S.temperatura}>
          <div>
            <p>Min</p>
            <p>{min}°C</p>
          </div>
          <div>
            <p>Max</p>
            <p>{max}°C</p>
          </div>
        </div>
        <div>
          <img
            className={S.img}
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt={descrp}
            // onClick={() => setEstModal(!estModal)}
          />
        </div>
      </div>
      {/* <Modal
      estado={estModal}
      cambEstado={setEstModal}
      name={name}
      >
        <div className={S.modalText}>
        <p >the climes is {descrp} today</p>
        <p>the temperature is {temp}°C now</p>
        <p>the wind is {wind}[m/s2]today</p>
        </div>
      </Modal> */}
    </div>
  );
}
