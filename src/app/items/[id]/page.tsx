import api from "@/api";

export default async function ItemsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const item = await api.item.fetch(id);
  return (
    <section className="grid gap-2">
      <img className="h-80 w-80 " alt={item.title} src={item.thumbnail} />

      <p>{item.title}</p>
      <hr />
      <div>
        <p className="text-xl font-bold">
          {Number(item.price).toLocaleString("es-AR", {
            style: "currency",
            currency: item.currency_id,
          })}
        </p>
        <p>{item.title}</p>
      </div>
      <p>{item.description}</p>
    </section>
  );
}
