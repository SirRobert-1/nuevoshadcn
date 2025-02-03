import { getProductos } from "@/pages/api/sanity";
import ProductoCard from "@/components/shared/ProductoCard";

export default function CardWithForm({ productos }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1 className="text-3xl font-bold mb-5">Productos juguetería</h1>
      <div className="flex flex-wrap p-5">
        {productos.map((producto) => (
          <ProductoCard key={producto._id} producto={producto} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const productos = await getProductos();
  return {
    props: {
      productos,
    },
  };
}
