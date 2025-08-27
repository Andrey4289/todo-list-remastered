import "./index.css"
import Logo from "../Logo"
import ShareButton from "../ShareButton"



const TopBar = () => {
    return (
        <div className="top-bar">
            <Logo/>
            <ShareButton/>
        </div>
    )
}

export default TopBar;