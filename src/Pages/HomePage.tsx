import Header from '../components/Header'
import FilterList from '../components/FilterList'
import InitialBlogs from '../components/InitialBlogs'

const HomePage = () => {
  return (
    <div className='bg-[#F3F2FA] pb-[96px] '>
        <Header />
        <FilterList />
        <InitialBlogs />
    </div>
    )
}

export default HomePage