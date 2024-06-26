import { useNavigate } from 'react-router-dom';

interface CardProps {
  logo: string;
  title: string;
  description: string;
  page?: string;
}

const Card: React.FC<CardProps> = ({ logo, title, description, page }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (page != null) {
      navigate(page);
    }
  }

  return (
    <div className="relative p-8 bg-gradient-to-br from-[#100F0F] to-[#232323] shadow-2xl rounded-md border border-gray-800" onClick={handleClick}>
      <div className="absolute top-20 h-1/2 w-full inset-0 bg-gradient-to-br from-transparent via-red-500 to-transparent blur-lg rounded-full opacity-50" />
      <div className="flex gap-3 items-center my-3">
        <img src={logo} alt="Logo" />
        <h2 className="text-xl">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default Card;
