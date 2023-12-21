
import Blog from "./Blog";

export type BlogType = {
    id: number;
    title: string;
    description: string;
    image: string;
    publish_date: string;
    categories: {
      id: number;
      title: string;
      text_color: string;
      background_color: string;
    }[];
    author: string;
  };

  type FakeBlogsType = {
    data: BlogType[]
  }

const InitialBlogs = () => {
  const fakeBlogs: FakeBlogsType = {
    data: [
      {
        id: 1,
        title: "Blog title",
        description:
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი დიდხანს გაგრძელდა, კარგად შეისწავლა და შედეგებიც დაიდო. ამ შედეგებს მოგახსენებთ",
        image: "https://via.placeholder.com/150",
        publish_date: "2023-11-19 00:00:00",
        categories: [
          {
            id: 1,
            title: "Category title",
            text_color: "#ffffff",
            background_color: "#000000",
          },
        ],
        author: "გელა გელაშვილი",
      },
      {
        id: 2,
        title: "Blog title",
        description:
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი დიდხანს გაგრძელდა, კარგად შეისწავლა და შედეგებიც დაიდო. ამ შედეგებს მოგახსენებთ",
        image: "https://via.placeholder.com/150",
        publish_date: "2023-11-19 00:00:00",
        categories: [
          {
            id: 1,
            title: "Category title",
            text_color: "#ffffff",
            background_color: "#000000",
          },
        ],
        author: "გელა გელაშვილი",
      },
      {
        id: 4,
        title: "Blog title",
        description:
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი დიდხანს გაგრძელდა, კარგად შეისწავლა და შედეგებიც დაიდო. ამ შედეგებს მოგახსენებთ",
        image: "https://via.placeholder.com/150",
        publish_date: "2023-11-19 00:00:00",
        categories: [
          {
            id: 1,
            title: "Category title",
            text_color: "#ffffff",
            background_color: "#000000",
          },
          {
            id: 13,
            title: "სამედიცინო",
            text_color: "#D6961C",
            background_color: "#FFBB2F",
          },
          {
            id: 14,
            title: "სხვა",
            text_color: "#DC2828",
            background_color: "#FA5757",
          },
        ],
        author: "გელა გელაშვილი",
      },
      {
        id: 3,
        title: "Blog title",
        description:
          "6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური სიზუსტისთვის, ეს პროცესი დიდხანს გაგრძელდა, კარგად შეისწავლა და შედეგებიც დაიდო. ამ შედეგებს მოგახსენებთ",
        image: "https://via.placeholder.com/150",
        publish_date: "2023-11-19 00:00:00",
        categories: [
          {
            id: 1,
            title: "Category title",
            text_color: "#ffffff",
            background_color: "#000000",
          },
          {
            id: 13,
            title: "სამედიცინო",
            text_color: "#D6961C",
            background_color: "#FFBB2F",
          },
          {
            id: 14,
            title: "სხვა",
            text_color: "#DC2828",
            background_color: "#FA5757",
          },
        ],
        author: "გელა გელაშვილი",
      },
    ],
  };

  return (
    <section className="mt-[62px]">
      <div className="def-container">
        <div className="flex justify-between items-start gap-x-[32px] gap-y-[56px] flex-wrap">
          {fakeBlogs.data.map((blogInfo) => (
            <Blog key={blogInfo.id} blogInfo={blogInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitialBlogs;
