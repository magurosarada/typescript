const index = () => {
  let object: {
    name: string;
    age: number;
    gender?: string;
  } = {
    name: "阿部寛",
    age: 45,
  };

  object.gender = "male";

  return <div>index</div>;
};

export default index;
