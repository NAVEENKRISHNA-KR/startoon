import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // Added state for error handling
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error state before making the request
        setError("");

        // Axios POST request to register a new user
        axios.post('http://localhost:3001/register', { username, email, password })
            .then(result => {
                console.log(result);
                navigate('/login'); // Navigate to login page on success
            })
            .catch(err => {
                console.error("Error during registration:", err);
                setError("Registration failed. Please try again."); // Set error message
            });
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>SIGNUP</h2>

                {error && <p style={styles.error}>{error}</p>} {/* Display error message */}

                <label style={styles.label}>Username</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={styles.input}
                    required
                />

                <label style={styles.label}>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                    required
                />

                <label style={styles.label}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                    required
                />

                <button type="submit" style={styles.button}>
                    Signup
                </button>

                <div style={styles.loginRedirect}>
                    <p style={styles.loginText}>Already have an account?</p>
                    <Link to="/login" style={styles.loginLink}>Login</Link>
                </div>
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
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "50px",
        fontSize: "16px",
        cursor: "pointer",
    },
    loginRedirect: {
        textAlign: "center",
        marginTop: "15px",
    },
    loginText: {
        marginBottom: "5px",
        color: "#555",
    },
    loginLink: {
        color: "#007bff",
        textDecoration: "none",
        fontWeight: "bold",
    },
    error: {
        color: "red",
        marginBottom: "15px",
        textAlign: "center",
    },
};

export default Signup;
