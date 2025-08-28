import "./index.css"
import Logo from "../Logo"
import ShareButton from "../ShareButton"



const NavigationHeader = () => {
    return (
        <div className="navigation-header">
            <Logo/>
            <ShareButton/>
        </div>
    )
}

export default NavigationHeader;
