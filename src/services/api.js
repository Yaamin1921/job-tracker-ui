//const BASE_URL = "http://localhost:8080/api";
  const BASE_URL= "https://job-tracker-production-4503.up.railway.app/api"

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

export async function createJob(jobData) {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });

  return res.json();
}