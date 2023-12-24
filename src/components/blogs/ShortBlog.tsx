import { Link } from "react-router-dom";

import Chip from "../ui/Chip";
import BlogImage from "../../assets/blog-image.png";
import ArrowSVG from "../../assets/svg/arrow.svg";

type ShortBlogProps = {
  blogInfo: BlogType;
};

const ShortBlog = ({ blogInfo }: ShortBlogProps) => {
  return (
    <div className="flex flex-col gap-[16px] basis-[31%]">
      <img
        src={BlogImage}
        alt="blog"
        className="mb-[8px] h-[328px] w-[408px]"
      />
      <div className="flex flex-col gap-y-[8px]">
        <h3 className=" text-[#1A1A1F] text-[16px] leading-[20px] font-semibold">
          {blogInfo.author}
        </h3>
        <h4 className="text-[#85858D] text-[12px] leading-[16px]">
          {new Date(blogInfo.publish_date).toLocaleDateString("en-GB")}
        </h4>
      </div>
      <h2 className="text-[#1A1A1F] text-[20px] leading-[28px] font-semibold">
        {blogInfo.title}
      </h2>
      <div className="flex gap-x-[16px]">
        {blogInfo.categories.map((chipInfo) => (
          <Chip
            key={chipInfo.id}
            title={chipInfo.title}
            background_color={chipInfo.background_color}
            propClassName="px-[10px] py-[6px]"
          />
        ))}
      </div>
      <p className="text-[#404049] text-[16px] leading-[28px] line-clamp-2">
        {blogInfo.description}
      </p>
      <div>
        <Link
          to={`/blog/${blogInfo.id}`}
          className="text-[#5D37F3] text-[14px] leading-[20px] flex gap-x-[4px]"
        >
          სრულად ნახვა <img src={ArrowSVG} alt="arrow" />
        </Link>
      </div>
    </div>
  );
};

export default ShortBlog;
