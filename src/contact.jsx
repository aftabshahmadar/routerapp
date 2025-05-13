import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
   const [number, setNumber] = useState(""); // 👈 Gender state
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
    formData.append("gender", gender); // 👈 Append gender
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
    <div className="p-4 max-w-sm mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border px-3 py-2 rounded shadow"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border px-3 py-2 rounded shadow"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Age</span>
          <input
            type="number"
            value={age}
            required
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full border px-3 py-2 rounded shadow"
          />
        </label>

        <label className="block">
          <span className="text-gray-700">Address</span>
          <input
            type="text"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 block w-full border px-3 py-2 rounded shadow"
          />
        </label>

        <div className="block">
          <span className="text-gray-700">Gender</span>
          <div className="mt-1 flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Male</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              <span>Female</span>
            </label>

            
      
          </div>
        </div>

          <label className="block">
          <span className="text-gray-700">Number</span>
          <input
            type="number"
            value={number}
            required
            onChange={(e) => setNumber(e.target.value)}
            className="mt-1 block w-full border px-3 py-2 rounded shadow"
          />
        </label>


        <button
          type="submit"
          className={`bg-blue-600 text-white px-4 py-2 rounded ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {submitted && <p className="mt-4 text-green-600">Form submitted!</p>}
    </div>
  );
};

export default Contact;
