import "./index.css"

const Button = ({
  variant = 'primary', // 'primary', 'secondary', 'dark', 'text', 'danger'
  size = 'normal',
  text,
  icon,
  className = '',
  onClick,
  disabled = false,
  ...props
}) => {
  const buttonClasses = [
    'default-btn',
    `${variant}-button`,
    size !== 'normal' ? `btn-${size}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <div className="left-icon">{icon}</div>
      )}
      {text}
    </button>
  );
};

export default Button;
