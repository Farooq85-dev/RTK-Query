import { useGetPostQuery } from "./Redux/Redux";

type itemsType = {
  title: string;
  description: string;
  image: string;
  category: string;
  price: number;
};

function App() {
  const { isLoading, data } = useGetPostQuery("");

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        loading...
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data?.map((item: itemsType, i: number) => (
        <div key={i}>
          <img width={200} src={item.image} alt="" />
          <p>{item.title}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
