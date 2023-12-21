import Blog from "./Blog";

type InitialBlogsProps = {
  categoriesChosen: string[];
};

const InitialBlogs = ({ categoriesChosen }: InitialBlogsProps) => {
  const fakeBlogs: { data: BlogType[] } = {
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
          {
            id: 3,
            title: "ხელოვნური ინტელექტი",
            text_color: "#B71FDD",
            background_color: "#B11CD6",
          },
          {
            id: 2,
            title: "აპლიკაცია",
            text_color: "#15C972",
            background_color: "#1CD67D",
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
            title: "მარკეტი",
            text_color: "#D6961C",
            background_color: "#FFBB2F",
          },
          {
            id: 4,
            title: "UI/UX",
            text_color: "#DC2828",
            background_color: "#FA5757",
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
            id: 12,
            title: "სამშენებლო",
            text_color: "#B71FDD",
            background_color: "#B11CD6",
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
            id: 12,
            title: "სამშენებლო",
            text_color: "#B71FDD",
            background_color: "#B11CD6",
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
              <Blog key={blogInfo.id} blogInfo={blogInfo} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default InitialBlogs;
