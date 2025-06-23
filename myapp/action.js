// app/create/actions.js
export async function actionCreate(formData) {
  const res = await fetch("/api/products", {
    method: "POST",
    body: JSON.stringify({
      name: formData.get("name"),
      price: formData.get("price"),
      prompt: formData.get("prompt")
    }),
    headers: { "Content-Type": "application/json" }
  })
  if (!res.ok) throw new Error("Create failed")
  return res.json()
}// app/admin/actions.js
export async function actionUpdate(id, formData) {
  const res = await fetch(`/api/products/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description")
    }),
    headers: { "Content-Type": "application/json" }
  })
  if (!res.ok) throw new Error("Update failed")
  return res.json()
}
export async function actionDelete(id) {
  const res = await fetch(`/api/products/${id}`, { method: "DELETE" })
  if (!res.ok) throw new Error("Delete failed")
  return true
}



