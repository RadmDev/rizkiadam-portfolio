const Button = (props) => {
  const {
    children = "button",
    variant = "focus:outline outline-2 outline-white-secondary focus:bg-black-primary focus:text-white-primary bg-white-secondary text-black-primary",
    type = "button",
    onClick = () => {},
  } = props;
  return (
    <button
      className={`${variant} px-6 py-3 font-medium text-xl lg:text-2xl rounded-full hover:opacity-50 text-center transition-all duration-75 ease-in-out focus:opacity-50`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
