import { createRoot } from "react-dom/client";
import "./style.css";
function Card(props) {
  const { key, title, image, brand, price } = props;
  console.log(key);
  return (
    <div className="card" key={key}>
      <img src={image} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>${price}</p>
      </div>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const container2 = data.products.map((product) => {
      return Card({
        key: product.id,
        title: product.title,
        image: product.thumbnail,
        brand: product.brand,
        price: product.price,
      });
    });
    console.log(container2);
    root.render(<div className="container">{container2}</div>);
  });
