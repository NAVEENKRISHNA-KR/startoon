import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
    const [patientDetails, setPatientDetails] = useState({
        patientId: '',
        name: '',
        age: '',
        phone: '',
        disease: 'ortho', // Default value
        doctor: 'Dr. Smith', // Default value
    });

    const [error, setError] = useState(""); // Added state for error handling
    const navigate = useNavigate();

    useEffect(() => {
        const generatePatientId = () => {
            // Generate a random 8-digit numeric ID
            const id = Math.floor(100 + Math.random() * 1);
            setPatientDetails(prevDetails => ({ ...prevDetails, patientId: id }));
        };

        generatePatientId();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientDetails({
            ...patientDetails,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset error state before making the request
        setError("");

        try {
            // Send form data to backend server
            const response = await axios.post('http://localhost:3001/api/patients', patientDetails);
            console.log('Patient details stored successfully:', response.data);
            // Navigate to the Doctor page after successful submission
            navigate('/doctor');
        } catch (error) {
            console.error('Error storing patient details:', error);
            setError("Failed to store patient details. Please try again."); // Set error message
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>_._.ABC HOSPITAL._._</h2>

                {error && <p style={styles.error}>{error}</p>} {/* Display error message */}

                <label style={styles.label}>Patient ID</label>
                <input
                    type="text"
                    name="patientId"
                    value={patientDetails.patientId}
                    style={styles.input}
                    readOnly
                />

                <label style={styles.label}>Name</label>
                <input
                    type="text"
                    name="name"
                    value={patientDetails.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <label style={styles.label}>Age</label>
                <input
                    type="number"
                    name="age"
                    value={patientDetails.age}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <label style={styles.label}>Phone Number</label>
                <input
                    type="tel"
                    name="phone"
                    value={patientDetails.phone}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />

                <label style={styles.label}>Disease Affected</label>
                <select
                    name="disease"
                    value={patientDetails.disease}
                    onChange={handleChange}
                    style={styles.input}
                    required
                >
                    <option value="ortho">Ortho</option>
                    <option value="diabetics">Diabetics</option>
                    <option value="cancer">Cancer</option>
                    <option value="general">General</option>
                </select>

                <label style={styles.label}>Dr. to be Consulted</label>
                <select
                    name="doctor"
                    value={patientDetails.doctor}
                    onChange={handleChange}
                    style={styles.input}
                    required
                >
                    <option value="Dr. Smith">Dr. Smith</option>
                    <option value="Dr. Jones">Dr. Jones</option>
                    <option value="Dr. Lee">Dr. Lee</option>
                    <option value="Dr. Patel">Dr. Patel</option>
                </select>

                <button type="submit" style={styles.button}>
                    Submit
                </button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
    },
    form: {
        padding: "20px",
        borderRadius: "25px",
        backgroundColor: "#fff",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        width: "300px",
    },
    heading: {
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "24px",
        color: "#333",
    },
    label: {
        marginBottom: "8px",
        fontWeight: "bold",
        color: "#555",
        display: "block",
    },
    input: {
        width: "100%",
        padding: "10px",
        marginBottom: "15px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    button: {
        width: "100%",
        padding: "10px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "50px",
        fontSize: "16px",
        cursor: "pointer",
    },
    error: {
        color: "red",
        marginBottom: "15px",
        textAlign: "center",
    },
};

export default Home;
