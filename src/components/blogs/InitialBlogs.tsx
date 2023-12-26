import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

import { fakeBlogs } from "../../fakeBlogs";
import ShortBlog from "./ShortBlog";

type InitialBlogsProps = {
  categoriesChosen: string[];
};

const fetchBlogs = async() => {
  const result = await axios.get("https://api.blog.redberryinternship.ge/api/blogs", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`
    },
  
  })

  return result.data
}

const InitialBlogs = ({ categoriesChosen }: InitialBlogsProps) => {

  const { isLoading, data: blogs} = useQuery({ queryKey: ["blogs"], queryFn: fetchBlogs })


  if(isLoading) {
    return <h1>Loading</h1>
  }

  return (
    <section className="mt-[62px]">
      <div className="def-container ">
        <div className="flex items-start gap-x-[32px] gap-y-[56px] flex-wrap">
          {fakeBlogs.data
            .filter((blog) => {
              // Check if category is chosen. If it isn't return every blog
              if (categoriesChosen.length === 0) return blog;

              // Filter blogs by category. If any blog contains at least one category, return blog.
              return blog.categories.some((category) =>
                categoriesChosen.includes(category.title)
              );
            })
            .map((blogInfo) => (
              <div
                key={blogInfo.id}
                className="basis-[31%] flex flex-col gap-[16px] "
                
              >
                <ShortBlog blogInfo={blogInfo} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default InitialBlogs;
