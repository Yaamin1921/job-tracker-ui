import { useState } from "react";
import { createJob } from "../services/api";

function JobForm({ onJobAdded }) {
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    status: "SAVED",
    appliedDate: "",
    source: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const savedJob = await createJob(formData);

    onJobAdded(savedJob);

    setFormData({
      companyName: "",
      role: "",
      status: "SAVED",
      appliedDate: "",
      source: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Job</h2>

      <input
        type="text"
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />

      <input
        type="text"
        name="role"
        placeholder="Role"
        value={formData.role}
        onChange={handleChange}
      />

      <input
        type="date"
        name="appliedDate"
        value={formData.appliedDate}
        onChange={handleChange}
      />

      <input
        type="text"
        name="source"
        placeholder="Source"
        value={formData.source}
        onChange={handleChange}
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
      >
        <option value="SAVED">SAVED</option>
        <option value="APPLIED">APPLIED</option>
        <option value="INTERVIEW">INTERVIEW</option>
        <option value="REJECTED">REJECTED</option>
      </select>

      <button type="submit">Save Job</button>
    </form>
  );
}

export default JobForm;