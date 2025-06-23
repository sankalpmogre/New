// app/page.jsx
import useSWR from "swr"
import Link from "next/link"

const fetcher = url => fetch(url).then(r => r.json())

export default function Page() {
  const { data: products } = useSWR("/api/products", fetcher)
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products?.map(p => (
          <li key={p.id}>
            <strong>{p.name}</strong> – ₹{p.price} <br/>
            <em>{p.description}</em><br />
            <Link href={`/admin/${p.id}`}>Edit/Delete</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
