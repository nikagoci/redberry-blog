import { useParams } from "react-router-dom";

import { fakeBlogs } from "../fakeBlogs";
import FullBlog from "../components/blogs/FullBlog";
import SimiliarBlogs from "../components/blogs/SimiliarBlogs";

const SingleBlogPage = () => {
  let { blogId } = useParams<string>();

  // Find single blog with Id
  const fakeBlog = fakeBlogs.data.find(el => el.id === (blogId ? +blogId : null))

  if(!fakeBlog) return <div>Not Found</div>

  return (
    <div className="bg-[#F3F2FA] pb-[96px] pt-[40px] ">
      <FullBlog blogInfo={fakeBlog} />
      <SimiliarBlogs chosenBlog={fakeBlog} />
    </div>
  );
};

export default SingleBlogPage;
