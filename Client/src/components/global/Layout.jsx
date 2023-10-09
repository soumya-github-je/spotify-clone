import Main from "../Main"
import Navbar from "./Navbar"
import Player from "./Player"
import "./Layout.css"

const Layout = () => {
    return(
        <div className="layout-wraper"> 
        <Navbar/>
        <Main/>
        <Player/>
        
    </div>
    )
}

export default Layout