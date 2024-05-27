interface CardProps {
  logo: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({logo, title, description}) => {
  return (
    <div className="p-8 backdrop-blur-md bg-[#100F0FCC] before:absolute before:top-20 before:inset-0 before:w-3/4 before:h-3/4 before:rounded-full before:bg-gradient-to-br before:from-[#100F0FCC] before:via-[#100F0FCC] before:to-red-700 before:blur-lg rounded-md before:ring-white border">
      <div className="flex gap-3 items-center my-3">
        <img src={logo} alt="Logo" />
        <h2 className="text-xl">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}

export default Card