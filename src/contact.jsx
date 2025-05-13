import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [number, setNumber] = useState(""); 
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzg4ZG9YwnVgowjVaLbniMvShwfHEr8vABMb8KGpyAV7mG5jf59hXyBz-3xrrvbrYpP2g/exec";

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("age", age);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("number", number);
    console.log("Form Data: ", { name, email, age, address, gender, number });

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setAge("");
        setAddress("");
        setGender("");
        setNumber("");

        setTimeout(() => setSubmitted(false), 2000);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error submitting the form!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">Contact Form</h3>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-12">
              <label className="form-label">Name</label>
              <input
                type="text"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Age</label>
              <input
                type="number"
                value={age}
                required
                onChange={(e) => setAge(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Phone Number</label>
              <input
                type="number"
                value={number}
                required
                onChange={(e) => setNumber(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
              />
            </div>

            <div className="col-12">
              <label className="form-label">Gender</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-check-input"
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="form-check-input"
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>

            <div className="col-12 text-center">
              <button
                type="submit"
                className={`btn btn-primary w-100 ${loading ? "disabled" : ""}`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>

          {submitted && (
            <div className="alert alert-success mt-4 text-center" role="alert">
              Form submitted successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
