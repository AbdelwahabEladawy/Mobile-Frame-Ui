import style from "./Footer.module.css";
import camera from "../../assets/icon/camera.svg";
import mic from "../../assets/icon/mic-24-regular.svg";
import sticker from "../../assets/icon/sticker.svg";
import plus from "../../assets/icon/plus.svg";

export default function Footer() {
  return (
    <>

      <div className={`${style.footerSec} `}>
        <div className={`${style.footerIcons}`}>
          <img src={camera} alt="Camera-icon" className=" ps-2 pe-1 " />
          <img src={mic} alt="Mic-Icon" className=" ps-1" />
        </div>
        <div className={`${style.messageInput} d-flex justify-content-end `}>
          <img src={sticker} alt="sticker-icon" className={style.sticker} />  
        </div>
        <div>
          <img src={plus} alt="plus-Icon" className={`${style.plus} ps`} />
        </div>
        <p className={style.backBtn}></p>
        
      </div>


      
      

    </>
  );
}
