'use client';

import { useState } from 'react';

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  function submit(event) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setMessage('Sign-in is not connected. This concept preview does not create accounts or authenticate users.');
  }
  return (
    <div className="signin-box">
      <span className="micro-label">CONCEPT WORKSPACE</span>
      <h2>Sign in to CarePlanLoop</h2>
      <p>Workspace access is not available in this concept preview.</p>
      <form onSubmit={submit}>
        <label>Work email<input type="email" autoComplete="username" required placeholder="name@organization.com" /></label>
        <label><span className="password-row">Password <button className="password-help" type="button" onClick={() => setMessage('Password recovery is not connected in this concept preview.')}>Need help?</button></span><span className="password-input"><input type={showPassword ? 'text' : 'password'} autoComplete="current-password" required placeholder="Enter your password" /><button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? 'Hide' : 'Show'}</button></span></label>
        <button className="button button-green" type="submit">Continue <span aria-hidden="true">→</span></button>
        <p className="signin-feedback" aria-live="polite">{message}</p>
      </form>
      <div className="signin-disclosure">Concept sign-in screen only. No account creation, password handling, or authentication service is connected.</div>
    </div>
  );
}
