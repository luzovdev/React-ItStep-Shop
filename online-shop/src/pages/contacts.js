import React, {useState} from "react";
import { selectAdress, selectPhone, changeCity } from "../redux/slices/contacts";
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles/contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const {street, city} = useSelector(selectAdress);
  const phone = useSelector(selectPhone);

  const [isEditting, setIsEditting] = useState(false);

  const handleCityChange = ({code, target: {value}}) => {
    if (code === 'Enter') {
      dispatch(changeCity(value));
      setIsEditting(false);
    }
  };

  const switchCityEdit = () => {
    setIsEditting(prev => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.header}>Contacts</h2>
      
      <div className={styles.addres}>
        City:  {
          isEditting ? 
          <input className={styles.input} onKeyDown={handleCityChange} autoFocus/> 
          : <span onClick={switchCityEdit}>{city}</span>
        }        
      </div>
      <div className={styles.addres}>
        Street: <span>{street}</span>
      </div>
      <div className={styles.addres}>
        Telephone: <span>{phone}</span>
      </div>
    </div>
  );
};































// import React, {useState} from "react";
// import {selectAdress, selectPhone,selectContacts} from "../redux/slices/contacts";
// import {useSelector} from "react-redux";
// export const Contacts = () => {
//   const phone = useSelector(selectPhone);
//   const {street} = useSelector(selectAdress);

//     const [city, setCity] = useState('Gomel');
//     const [clicked, setClicked] = useState(false);
//     const [valueCity,setValueCity] = useState('');
//     const handlerCity = () => {
//       setClicked((prev) => prev = true)
//     }
//     const handlerInput = (e) => {
//       if(e.code === 'Enter') {
//         setCity(valueCity)
//         setClicked((prev) => prev = false)
//       }
//     }
  
//     return (
//       <div>
//         <h2>Contacts</h2>
//         <div onClick={handlerCity}>
//           {clicked ? <input autoFocus type='text' value={valueCity} onKeyDown = {handlerInput} onChange={(e)=>setValueCity(e.target.value)}/>:<span>{city}</span>}
//         </div>
//         <div>
//           Street: <span>{street}</span>
//         </div>
//         <div>
//           Telephone: <span>{phone}</span>
//         </div>
//       </div>
//     );
//   };