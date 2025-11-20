import React, { useEffect, useState } from "react";

const InternshipDetail = ({ internshipId, onBack }) => {

  const [internship, setInternship] = useState(null);
  const [loading, setLoading] = useState(true);

  // Normalize ID
  const fixedId =
    internshipId?._id || internshipId?.id || internshipId;

  // ------------------------
  //  useEffect MUST be here
  // ------------------------
  useEffect(() => {
    if (!fixedId) return;

    fetch(`http://localhost:5001/api/internships/${fixedId}`)
      .then((res) => res.json())
      .then((data) => {
        setInternship(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching internship:", err);
        setLoading(false);
      });
  }, [fixedId]);

  // ------------------------
  //  Now we check invalid ID
  // ------------------------
  if (!fixedId) {
    return (
      <div className="text-white p-10">
        <h2>No Internship Selected</h2>
        <button
          onClick={onBack}
          className="mt-4 bg-purple-500 px-4 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-white p-10 text-xl">
        Loading Internship Details...
      </div>
    );
  }

  if (!internship) {
    return (
      <div className="text-white p-10">
        <p>Internship not found.</p>
        <button
          onClick={onBack}
          className="mt-4 bg-purple-500 px-4 py-2 rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <button
        onClick={onBack}
        className="bg-purple-500 px-4 py-2 rounded-lg mb-6"
      >
        ← Back
      </button>

      <h1 className="text-4xl font-bold text-purple-400 mb-4">
        {internship.title}
      </h1>

      <p className="text-lg mb-2"><strong>Company:</strong> {internship.company}</p>
      <p className="text-lg mb-2"><strong>Category:</strong> {internship.category}</p>
      <p className="text-lg mb-2"><strong>Duration:</strong> {internship.duration}</p>
      <p className="text-lg mb-2"><strong>Location:</strong> {internship.location}</p>
    </div>
  );
};

export default InternshipDetail;
