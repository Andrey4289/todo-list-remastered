import "./index.css"
import Logo from "../Logo"
import ShareButton from "../ShareButton"
import Button from "../Button"
import { FaShare } from "react-icons/fa"


const NavigationHeader = () => {
    return (
        <div style={{ flexDirection: "column", backgroundColor: "var(--color-bg-secondary)", padding: "144px", justifyContent: "space-between", gap: "32px", display: "flex" }}>
            <Logo/>
            <Button icon={<FaShare/>} text="Share" variant="primary"/>
            <Button icon={<FaShare/>} text="Share" variant="primary" size="small"/>
            <Button icon={<FaShare/>} text="Share" variant="primary" size="large"/>
            <Button icon={<FaShare/>} text="Share" variant="secondary"/>
            <Button icon={<FaShare/>} text="Share" variant="dark"/>
            <Button icon={<FaShare/>} text="Share" variant="text"/>
            <Button icon={<FaShare/>} text="Share" variant="danger"/>
        </div>
    )
}

export default NavigationHeader;
