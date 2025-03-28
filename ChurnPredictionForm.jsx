import React, { useState, useEffect } from "react";
import "./ChurnPredictionForm.css";

const ChurnPredictionForm = () => {
  const [formData, setFormData] = useState({
    dependents: "",
    tenure: "",
    online_security: "",
    online_backup: "",
    device_protection: "",
    tech_support: "",
    contract: "",
    paperless_billing: "",
    monthly_charges: "",
    total_charges: "",
  });

  const [result, setResult] = useState("");

  useEffect(() => {
    if (result) {
      alert(`Prediction: ${result}`);
    }
  }, [result]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://harshkr1921.pythonanywhere.com/reactPost/", {
        method: "POST",  // ✅ Change back to POST
        headers: {
          "Content-Type": "application/json",  // ✅ Ensure JSON format
        },
        body: JSON.stringify(formData),  // ✅ Send JSON data
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Backend Response:", data.result);
      setResult(data.result);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to get prediction. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Churn Prediction Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Dependents</label>
          <select name="dependents" value={formData.dependents} onChange={handleChange} required className="form-input">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Tenure</label>
          <input type="number" name="tenure" value={formData.tenure} onChange={handleChange} required className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Online Security</label>
          <select name="online_security" value={formData.online_security} onChange={handleChange} required className="form-input">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Online Backup</label>
          <select name="online_backup" value={formData.online_backup} onChange={handleChange} required className="form-input">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Device Protection</label>
          <select name="device_protection" value={formData.device_protection} onChange={handleChange} required className="form-input">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Tech Support</label>
          <select name="tech_support" value={formData.tech_support} onChange={handleChange} required className="form-input">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Contract</label>
          <select name="contract" value={formData.contract} onChange={handleChange} required className="form-input">
            <option value="">Select</option>
            <option value="1">Month-to-Month</option>
            <option value="2">One Year</option>
            <option value="3">Two Year</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Paperless Billing</label>
          <select name="paperless_billing" value={formData.paperless_billing} onChange={handleChange} required className="form-input">
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Monthly Charges</label>
          <input type="number" step="0.01" name="monthly_charges" value={formData.monthly_charges} onChange={handleChange} required className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label">Total Charges</label>
          <input type="number" step="0.01" name="total_charges" value={formData.total_charges} onChange={handleChange} required className="form-input" />
        </div>

        <button type="submit" className="form-button">Submit</button>
      </form>

      {result && <p className="result">Prediction: {result}</p>}
    </div>
  );
};

export default ChurnPredictionForm;
