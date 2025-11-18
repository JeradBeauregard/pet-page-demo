import api from "../api";

export async function getAllItems() {
  const response = await api.get("/items");
  return response.data;
}
