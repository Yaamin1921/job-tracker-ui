const BASE_URL = "http://localhost:8080/api";

export async function getJobs() {
  try {
    const res = await fetch(`${BASE_URL}/jobs`);
    if (!res.ok) throw new Error("Failed to fetch jobs");
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}