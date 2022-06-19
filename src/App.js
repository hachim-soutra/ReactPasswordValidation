import './App.css';
import {useState} from "react";

function App() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [password, setPassword] = useState('');
    const passwordValidationLength = password.length >= 8;
    const passwordValidationHasNumber = /\d/.test(password);
    const passwordValidationLowerCase = /[a-z]/.test(password);
    const passwordValidationUpperCase = /[A-Z]/.test(password);
    const passwordValidationSpecialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
  return (
    <div className="App">
      <h1>Password validation :</h1>
        <input type={passwordVisible ? 'text' : 'password'} placeholder="Please enter your password.." onClick={(e) => setPassword(e.currentTarget.value)}/>
        <button onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? 'hide' : 'show'}</button>
        <ul>
            <li className={passwordValidationLowerCase ? 'valid' : 'invalid'}>One lowercase</li>
            <li className={passwordValidationUpperCase ? 'valid' : 'invalid'}>One uppercase</li>
            <li className={passwordValidationSpecialChar ? 'valid' : 'invalid'}>Special character</li>
            <li className={passwordValidationHasNumber ? 'valid' : 'invalid'}>One number</li>
            <li className={passwordValidationLength ? 'valid' : 'invalid'}>Minimum 8 characters</li>
        </ul>
    </div>
  );
}

export default App;
