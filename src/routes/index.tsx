import { Layout } from "@/app/_layout";
import { Dashboard } from "@/app/dashboard";
import { Interface } from "@/app/interface";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

export const Routers = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="/interface/:id" element={<Interface />} />
    </Route>
  )
)