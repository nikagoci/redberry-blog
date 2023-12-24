import Chip from "../ui/Chip";
import BlogImage from "../../assets/blog-image.png";

type FullBlogProps = {
    fakeBlog: BlogType
}

const FullBlog = ({fakeBlog}: FullBlogProps) => {
  return (
    <div className="w-[720px] mb-[100px] mx-auto flex flex-col gap-y-[40px]">
        <img src={BlogImage} alt="blog" className="w-full h-[328px]" />
        <div className="flex flex-col gap-y-[24px]">
          <div className="flex flex-col gap-y-[8px]">
            <h3 className=" text-[#1A1A1F] text-[16px] leading-[20px] font-semibold">
              {fakeBlog.author}s
            </h3>
            <h4 className="text-[#85858D] text-[12px] leading-[16px]">
              {new Date(fakeBlog.publish_date).toLocaleDateString("en-GB")}
            </h4>
          </div>
          <h2 className="text-[#1A1A1F] text-[20px] leading-[28px] font-semibold">
            {fakeBlog.title}
          </h2>
          <div className="flex gap-x-[16px]">
            {fakeBlog.categories.map((chipInfo) => (
              <Chip
                key={chipInfo.id}
                title={chipInfo.title}
                background_color={chipInfo.background_color}
                propClassName="px-[10px] py-[6px]"
              />
            ))}
          </div>
          <p className="text-[#404049] text-[16px] leading-[28px] ">
            {fakeBlog.description}
          </p>
        </div>
      </div>
  )
}

export default FullBlog