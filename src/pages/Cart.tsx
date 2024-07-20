import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const Cart = () => {
  return (
    <div>
      <h1 className="text-8xl">Cart Page</h1>
      <Link to='/' className='text-red-900 text-7xl'>
        back home
      </Link>
      <Button asChild size='lg'>
        <Link to='/'>home button</Link>
      </Button>
    </div>
  )
}

export default Cart
