import React from "react";
import "./user.scss";
import { useState } from "react";

interface IUser {
  name: string;
  phone: string;
  email: string;
  address: string;
  position_name: string;
  department: string;
  hire_date: string;
}

interface IProps {
  user: IUser;
}

const User = React.memo((props: IProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
        <div className="user_item" onClick={() =>  setOpenModal(!openModal)}>
      <h2>{props.user.name}</h2>
      <div className="user_info">
        <img src="/img/tel.png" alt="tel" className="info_img" />
        {props.user.phone}
        <img src="/img/email.png" alt="email" className="info_img" />
        {props.user.email}
      </div>
    </div>
    {openModal ? (
        <div className="modal">
          <div className="modal_block">
            <div className="full_info">
              <h2>
                {props.user.name}
                <img
                  src="/img/close.png"
                  alt="close"
                  onClick={() => setOpenModal(!openModal)}
                />
              </h2>
              <div className="info">
                <span>Телефон:</span>
                <p>{props.user.phone}</p>
                <span>Почта:</span>
                <p>{props.user.email}</p>
                <span>Дата приема:</span>
                <p>{props.user.hire_date}</p>
                <span>Должность:</span>
                <p>{props.user.position_name}</p>
                <span>Подразделение:</span>
                <p>{props.user.department}</p>
              </div>
              <div className="extra_info">
                <span>Дополниткльная информация:</span>
                <p>
                  Разработчики используют текст в качестве заполнителя макта
                  страницы. Разработчики используют текст в качестве заполнителя
                  макта страницы.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
});

export default User;
