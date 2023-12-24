import { useState } from 'react'

import Header from '../components/Header'
import FilterList from '../components/FilterList'
import InitialBlogs from '../components/blogs/InitialBlogs'

const HomePage = () => {
  const [categoriesChosen, setCategoriesChosen] = useState<string[]>([])

  return (
    <div className='bg-[#F3F2FA] pb-[96px] '>
        <Header />
        <FilterList categoriesChosen={categoriesChosen} setCategoriesChosen={setCategoriesChosen} />
        <InitialBlogs categoriesChosen={categoriesChosen} />
    </div>
    )
}

export default HomePage