// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getSanityData } from "../../lib/sanityQuery";

export async function getProductos() {
  const query = `*[_type == "productos"][]{_id, nombre, precio, descripcion, imagen{asset->{url}}}`;
  return await getSanityData(query);
}
