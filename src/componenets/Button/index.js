import "./index.css"

const Button = ({ icon, text }) => {
    return (
        <div className="button">
            <div className="button-icon">{icon}</div>
            <p>{text}</p>
        </div>
    )
}

export default Button;