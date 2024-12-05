import frame from "../../assets/images/pngwing.com.png"


import style from "../MobileFrame/MobileFrame.module.css"
import DeviceInfo from "../DeviceInfo/DeviceInfo"
import Footer from "../Footer/Footer"
import MainSection from "../MainSection/MainSection"
import MsgTime from "../MsgTime/MsgTime"


export default function MobileFrame() {
  return (
<>

<div className={` d-flex justify-content-center align-items-center vh-100 `}>
    <div className={` ${style.iphone}`}>
    <img src={frame} alt="iphone" className={`${style.iphone}`} /> 
    <div className={style.bgImg}></div>
    <DeviceInfo></DeviceInfo>
    <MsgTime></MsgTime>
    <MainSection></MainSection>
    <Footer></Footer>
    </div>
    </div>





</>


)
}
