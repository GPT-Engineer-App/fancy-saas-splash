import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-white font-bold text-xl">CloudBoost</div>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Button variant="outline" className="bg-white text-purple-600 hover:bg-purple-100">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
