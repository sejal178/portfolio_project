import "./topbar.scss"
import {Person,Mail} from "@mui/icons-material"
export default function Topbar({
  menuOpen,setMenuOpen
}) {
  return (
    <div className={"Topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">genius.</a>
          <div className="itemContainer">
          <Person className="icon"/>
          <span>+91 8107490098</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>sejalvijay0319@gmail.com</span>
          </div>
        </div>
        <div className="right"> 
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          </div>
          </div>
      </div>
    </div>
  )
}
