import { PrefixPathnameNormalizer } from "next/dist/server/future/normalizers/request/prefix";
import Link from "next/link";
import api from "@/api";

export default async function ItemsPage({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  const { results } = await api.item.search(searchParams.search);

  console.log(results);
  return (
    <section>
      <article className="grid gap-4">
        {results.map((item) => (
          <Link href={`/items/${item.id}`} key={item.id} className="flex gap-4">
            <img alt={item.title} src={item.thumbnail}></img>
            <div>
              <p className="text-xl font-bold">
                {Number(item.price).toLocaleString("es-AR", {
                  style: "currency",
                  currency: item.currency_id,
                })}
              </p>
              <p>{item.title}</p>
            </div>

            <span className="ml-auto text-sm opacity-50 capitalize">
              {item.seller.nickname.toLocaleLowerCase()}
            </span>
          </Link>
        ))}
      </article>
    </section>
  );
}
