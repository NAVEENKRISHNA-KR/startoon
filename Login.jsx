import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); // State for handling errors
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset error state before making the request
        setError("");

        // Axios POST request to login the user
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "SUCCESS") {
                    // Navigate to homepage or dashboard after successful login
                    navigate('/home'); // Adjust the route as necessary
                } else {
                    setError("Login failed. Please check your credentials."); // Handle failed login
                }
            })
            .catch(err => {
                console.error("Error during login:", err);
                setError("Login failed. Please try again."); // Handle error during request
            });
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.heading}>LOGIN</h2>

                {error && <p style={styles.error}>{error}</p>} {/* Display error message */}

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
                    Login
                </button>

                <div style={styles.signupRedirect}>
                    <p style={styles.signupText}>Don't have an account?</p>
                    <Link to="/signup" style={styles.signupLink}>Signup</Link>
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
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "50px",
        fontSize: "16px",
        cursor: "pointer",
    },
    signupRedirect: {
        textAlign: "center",
        marginTop: "15px",
    },
    signupText: {
        marginBottom: "5px",
        color: "#555",
    },
    signupLink: {
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

export default Login;
