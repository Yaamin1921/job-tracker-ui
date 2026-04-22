function JobItem({ job }) {
  return (
    <div className="border p-4 m-2 rounded shadow">
      <h3 className="text-lg font-bold">{job.companyName}</h3>
      <p>Role: {job.role}</p>
      <p>Status: {job.status}</p>
    </div>
  );
}

export default JobItem;