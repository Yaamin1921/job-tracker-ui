const BASE_URL = "http://localhost:8080/api"; // your backend

export async function getJobs() {
  const res = await fetch(`${BASE_URL}/jobs`);
  return res.json();
}