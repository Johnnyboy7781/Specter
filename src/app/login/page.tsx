import Image from 'next/image';

import './page.css';

export const metadata = {
  title: 'Login',
  description: 'Login page'
};

export default function Login() {
  return (
    <div className="login">
      <Image
        src="logo.svg"
        alt="Specter Logo"
        className="login-logo"
        height={130}
        width={130}
      />

      <h1 className="login-title">
        Welcome to<br />
        <span>Specter</span>
      </h1>

      <form className="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="text"
          name="password"
          id="password"
          placeholder="password"
        />
        <button>Log In</button>
        <label className="login-form-checkbox-container">
          <input className="checkbox-default" type="checkbox" defaultChecked={false} />
          <span className="checkbox-custom"></span>
          Remember Me
        </label>
      </form>
    </div>
  );
}
