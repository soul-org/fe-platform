import Button from "./Button"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-white/10 p-4 rounded-lg mx-4 my-2">
      <img src="/logo.png" alt="logo" className="h-10" />
      <div className="flex space-x-4">
        <Button onclick={() => {}} className="bg-orange-500 p-2 rounded">Connect wallet</Button>
      </div>
    </div>
  )
}

export default Navbar