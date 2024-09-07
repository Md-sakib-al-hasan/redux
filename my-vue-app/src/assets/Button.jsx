const Button = ({ onClick, children, className }) => {
  return (
    <button
      className={`px-4 py-2 bg-red-600 text-white rounded focus:outline-none focus:ring-2  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
