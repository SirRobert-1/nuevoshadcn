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
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Form, FormItem, FormField, FormControl } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cantProductos } from "@/schemas/cantProductos";

function ProductoCard({ producto }) {
  const form = useForm({
    resolver: zodResolver(cantProductos),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Card key={producto._id} className="w-96 m-10">
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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="cantidad"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Selecciona una cantidad" />
                        </SelectTrigger>
                      </FormControl>
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
                    {form.formState.errors.cantidad && (
                      <span>{form.formState.errors.cantidad.message}</span>
                    )}
                  </FormItem>
                )}
              />
              <Button type="submit" className="my-2 mr-2">
                Comprar
              </Button>
            </form>
          </Form>
        </CardFooter>
        <Dialog className="flex">
          <DialogTrigger asChild>
            <Button className="ml-5">Agrega un comentario</Button>
          </DialogTrigger>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
          <DialogContent className="bg-white">
            <Formulario />
          </DialogContent>
        </Dialog>
      </Card>
      ;
    </div>
  );
}

export default ProductoCard;
