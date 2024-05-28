import Card from "../components/Card";

const arrayCard = [
  {
    logo: '/public/zap.png',
    title: 'Deposit',
    description: 'Deposit funds to earn interest'
  },
  {
    logo: '/public/zap.png',
    title: 'Deposit',
    description: 'Deposit funds to earn interest'
  },
  {
    logo: '/public/zap.png',
    title: 'Deposit',
    description: 'Deposit funds to earn interest'
  },

]

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20'>
      <h2 className='text-6xl my-3 font-bold'><span className="text-orange-600">No Loss</span> Prize Savings Protocol</h2>
      <div className='flex items-center justify-center gap-3 my-6'>
        {arrayCard.map((card, index) => (
            <Card key={index} logo={card.logo} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  )
}

export default Header;