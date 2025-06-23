// app/create/page.jsx
"use client"
import { actionCreate } from "./actions"
import { Form, Input, Textarea, Button } from "@shadcn/ui"
import { useRouter } from "next/navigation"

export default function CreatePage() {
  const router = useRouter()
  async function onSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    await actionCreate(data)
    router.push("/")
  }
  return (
    <Form onSubmit={onSubmit}>
      <h1>Create Product</h1>
      <Input name="name" placeholder="Name" required />
      <Input name="price" type="number" placeholder="Price" required />
      <Textarea name="prompt" placeholder="Gemini prompt" />
      <Button type="submit">Save</Button>
    </Form>
  )
}
