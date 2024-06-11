interface ButtonProps {
  className?: string;
  disabled?: boolean;
  onclick: () => void;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ className, disabled, onclick, children }) => {
  return (
    <button type="button" className={`px-2 py-1 ${className}`} disabled={disabled} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;
