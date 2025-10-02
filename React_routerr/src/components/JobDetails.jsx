import React from 'react'
import { useLoaderData } from 'react-router-dom'
const JobDetails = () => {

const JobDetails = useLoaderData()   

  return (
    <div className='job-details'>
      <p><b>Job Title :</b>{JobDetails.title}</p>
      <p><b>Location :</b>{JobDetails.location}</p>
      <p><b>Type :</b>{JobDetails.type}</p>
      <p><b>Description :</b>{JobDetails.description}</p>
      <button>Apply now</button>
    </div>
  )
}

export default JobDetails

export const JobDetailsLoader = async ({ params }) => {
  const { id } = params;  
  const res = await fetch(`http://localhost:5000/jobs/${id}`);
  if (!res.ok) {
    throw new Error("Failed to load job details");
  }
  return res.json();
};
