interface CategoryProps {
  params: {
    category: string;
  };
}

const page = (props: CategoryProps) => {
  const { category } = props.params;
  console.log(props);
  return <h1>Categoria dinamica: {category}</h1>;
};

export default page;
