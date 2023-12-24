import { fakeBlogs } from "../../fakeBlogs";
import ShortBlog from "./ShortBlog";

type InitialBlogsProps = {
  categoriesChosen: string[];
};

const InitialBlogs = ({ categoriesChosen }: InitialBlogsProps) => {


  return (
    <section className="mt-[62px]">
      <div className="def-container">
        <div className="flex  items-start gap-x-[32px] gap-y-[56px] flex-wrap">
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
                className="flex flex-col gap-[16px] basis-[31%]"
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
