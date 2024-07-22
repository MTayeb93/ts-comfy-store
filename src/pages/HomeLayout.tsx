import Loading from '@/components/Loading'
import Header from '@/components/navbar/Header'
import Navbar from '@/components/navbar/Navbar'
import { Outlet, useNavigation } from 'react-router-dom'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <div>
      <Header />
      <Navbar />
      <div className='py-20 align-element'>
        {isPageLoading ? <Loading /> : <Outlet />}
      </div>
      <footer>Footer</footer>
    </div>
  )
}

export default HomeLayout
