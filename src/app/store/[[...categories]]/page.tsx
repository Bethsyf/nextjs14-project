interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

const page = (props: CategoryProps) => {
  const { categories } = props.params;
  console.log(props);
  return <h1>Categoria dinamica: {categories}</h1>;
};

export default page;