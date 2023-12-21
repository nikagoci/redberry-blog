type CategoryType = {
  id: number;
  title: string;
  text_color: string;
  background_color: string;
};

type BlogType = {
  id: number;
  title: string;
  description: string;
  image: string;
  publish_date: string;
  categories: CategoryType[];
  author: string;
};
