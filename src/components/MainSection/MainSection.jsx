import style from "./MainSection.module.css";
import Hero from "../../assets/images/HeroImg.jpg";

export default function MainSection() {
  function handleClick() {
  alert("Done Thanks For Your Time")
  }

  return (
    <>
    <div className={style.main}>

      <div className="p-2 border-rounded-5">
        <img
          src={Hero}
          alt="Anniversary-image"
          className={`${style.img}  rounded-4 `}
        />
      </div>

      <div className="d-flex flex-column mt-3">
        <span className={`${style.userMsg} mt-2 mb-1 ps-2`}>Hello Abdelwahab</span>
        <span className={`${style.userMsg} mb-1 ps-2`}>how are you doing?</span>
        <span className={`mb-1 text-secondary ps-2  ${style.textFont}`}>Thank you for your time.</span>
        <div className={`${style.msgTime} d-flex justify-content-end text-secondary border-bottom border-secondary-subtle`}>
          10:30
        </div>

        <div className={`${style.LinkText} links py-1`}>
          <a
            href="https://www.procrew.pro/"
            target="_blank"
            className={style.Link}
          >
            <div className="link border-secondary-subtle border-bottom">
              <i className="fa-solid fa-up-right-from-square ps-4 pe-2 py-1 my-2"></i>
              <span> Visit our website </span>
            </div>
          </a>



          <a href="tel:+201017872054" target="_blank" className={style.Link}>
            <div className="link border-secondary-subtle border-bottom ps-5">
              <i className="fa-solid fa-phone ps-2 pe-3 py-1 my-2"></i>
              <span> Call us </span>
            </div>
          </a>
          <a href="#" className={style.Link}>

          <div
            className="link  ps-5" onClick={()=>handleClick()}>
            <i className={` ${style.doneIcon} fa-solid fa-share ps-2 pe-3 py-1 my-2 `}></i>
            <span> Done </span>
            <div className={style.triangle}></div>
          </div>

          </a>

      
        </div>
      </div>
    </div>
    </>
  );
}
