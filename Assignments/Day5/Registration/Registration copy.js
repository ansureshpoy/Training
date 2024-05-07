import { useState,useEffect } from "react";
 
import styles from "./Registration.module.css";
 
 
function Registration() {
    const [user,setUser] = useState({
        name: '',
        email: '',
        phone: '',
            })
 
 
    // define useEffect for the email to validate check email can be considered or not
 
    function handleNameChange(e) {
        setUser({
            ...user,
            name: e.target.value
        });
        // email
    }
 
    function handleEmailChange(e) {
        setUser({
            ...user,
            email: e.target.value
        });
        // verify this email is valida or not
    }
 
    function handlePhoneChange(e) {
 
        setUser({
            ...user,
            phone: e.target.value
        });
    }
 
 
 
    return (
        <form  className={styles.loginForm}>
        <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                className={styles.input}
                value={user.name}
                onChange={handleNameChange}
               
            />
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                className={styles.input}
                value={user.email}
                onChange={handleEmailChange }
               
            />
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>Phone:</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                className={styles.input}
                value={user.phone}
               
                onChange={handlePhoneChange}
               
            />
        </div>
        <button type="submit" className={styles.submitButton}>Register</button>
    </form>
    );
 
}
 
export default Registration;