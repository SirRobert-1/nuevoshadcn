import { useState } from "react";
import { getProductos } from "@/pages/api/sanity";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Formulario from "@/components/shared/Formulario";

export default function CardWithForm({ productos }) {
  const [formOpen, setFormOpen] = useState(false);

  const handleFormOpen = () => {
    setFormOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10">
      <h1 className="text-3xl font-bold mb-5">Productos juguetería</h1>
      <div className="flex flex-wrap p-5">
        {productos.map((producto) => (
          <Card key={producto._id} className="w-96 m-5">
            <CardHeader>
              <CardTitle>{producto.nombre}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{producto.descripcion}</CardDescription>
              <img
                src={producto.imagen.asset.url}
                alt={producto.nombre}
                className="w-20"
              />
            </CardContent>
            <CardFooter>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Selecciona una cantidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{producto.nombre}</SelectLabel>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Button className="my-2 mr-2">Comprar</Button>
              <div className="flex">
                {/*<Button onClick={handleFormOpen} className="my-2">
                  Agrega un comentario
                </Button>*/}
              </div>
            </CardFooter>
          </Card>
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
