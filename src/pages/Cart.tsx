import { useAppSelector } from '@/hooks';
import SectionTitle from '@/components/ui/SectionTitle';
import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Cart = () => {
  // temp
  const user = null;

  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return <SectionTitle text='Empty cart ☹️' />;
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='grid gap-8 mt-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Button asChild className='w-full mt-8'>
              <Link to='/checkout'>Proceed to checkout</Link>
            </Button>
          ) : (
            <Button asChild className='w-full mt-8'>
              <Link to='/login'>Please Login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;