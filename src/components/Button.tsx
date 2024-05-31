interface ButtonProps {
  className?: string;
  onclick: () => void;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ className, onclick, children }) => {
  return (
    <button type="button" className={`px-2 py-1 ${className}`} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
