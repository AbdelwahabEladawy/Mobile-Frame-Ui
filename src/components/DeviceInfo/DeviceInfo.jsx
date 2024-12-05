
import style from "./DeviceInfo.module.css"
import battery from "../../assets/icon/battery-full.svg"
import wifi from "../../assets/icon/wifi-alt.svg"
import signal from "../../assets/icon/signal.svg"
import groupIcon from "../../assets/icon/Group 3301.svg"

export default function DeviceInfo() {
  return (
    <div className={`${style.deviceSec}  position-absolute  `}>

<div className={`${style.icons} `}>
  <img src= {signal}  alt="signal-Icon" className="ps-2 pt-2"/>
  <img src= {wifi}  alt="wifi-Icon" className="ps-2 pt-2"/>
  <img src= {battery}  alt="battery-Icon" className="ps-2 pt-2"/>
</div>


<div className={`${style.time} pt-2 fw-bold`}><span>10:38</span></div>


 <div className={`container mt-5 ms-3 d-flex  `}>
  <img src={groupIcon} alt="Group-Icon" className={`${style.groupIcon} `} />
  <span className={`${style.text}  `}> communicate</span>
 </div>



    </div>
  )
}
