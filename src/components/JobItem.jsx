function JobItem({job}){
    return (
        <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
            <h3>{job.companyName}</h3>
            <p>Role: {job.role}</p>
            <p>Status: {job.status}</p>
        </div>
    );
}
export default JobItem;