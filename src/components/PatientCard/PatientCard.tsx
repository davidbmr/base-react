import React from 'react';

import userIcon from '../../assets/user-icon.svg';
import style from './PatientCard.module.css';

function PatientCard() {
  return (
    <div className={style.container__main}>
      <h4>Paciente: Gonzalez Detquizan Gabriela</h4>
      <div className={style.container__card}>
        <img src={userIcon} alt="user-icon" />
        <div className={style.container__card__information}>
          <div className={style.container__card__information__item}>
            <span>D.N.I</span>
            <span>73121300</span>
          </div>
          <div className={style.container__card__information__item}>
            <span>Titular</span>
            <span>Gonzalez Detquizan Gabriela</span>
          </div>
          <div className={style.container__card__information__item}>
            <span>Parentesco</span>
            <span>Titular</span>
          </div>
          <div className={style.container__card__information__item}>
            <span>Historia Clínica</span>
            <span>67</span>
          </div>
          <div className={style.container__card__information__item}>
            <span>Ocupación</span>
            <span>Ama de casa</span>
          </div>
          <div className={style.container__card__information__item}>
            <span>Edad</span>
            <span>25 años 7 meses 11 días</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;
