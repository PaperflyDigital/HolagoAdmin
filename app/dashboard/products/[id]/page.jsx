"use client";
import { FetchApi, fetchApi } from "@/utils/FetchApi";
import Product from "./Product";
import { useEffect, useState } from "react";

// export async function generateMetadata({ params, searchParams }) {
//   const id = params.id;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const product = await res.json();

//   return {
//     title: product.title,
//     description: product.body,
//   };
// }

export default function Page({ params }) {
  const id = params.id;

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await FetchApi({url: `/products/api/get-products/${id}`});
        setData(data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <main className="">
      <Product product={data} />
    </main>
  );
}
