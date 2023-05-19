import React, { useState } from "react";
import { apiFood } from "../api/apiFood";

const Login = ({ customClose}) => {
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [regPassRepeat, setRegPassRepeat] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regImage, setRegImage] = useState("");

  const resetForm = () => {
    setLogEmail("");
    setLogPass("");

    setRegName("");
    setRegEmail("");
    setRegPass("");
    setRegPassRepeat("");
    setRegPhone("");
    setRegImage("");
  };

  const handleLogin = async () => {
    if (logEmail === "" || logPass === "") {
      alert("Email dan password harus diisi");
    }

    const data = {
      email: logEmail,
      password: logPass,
    };

    try {
      const result = await apiFood.post("/login", data);
      localStorage.setItem("token", result.data.token);

      alert("login sukses");

      window.location.reload();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleRegister = async () => {
    if (regEmail === "") {
      alert("email harus diisi");
    } else if (regPass === "") {
      alert("password harus diisi");
    }

    const data = {
      name: regName,
      email: regEmail,
      password: regPass,
      passwordRepeat: regPassRepeat,
      role: "admin",
      profilePictureUrl: regImage,
      phoneNumber: regPhone,
    };

    try {
      const result = await apiFood.post("/register", data);
      alert("registrasi sukses");
      resetForm();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <>
      <div className="container-login">
        <div className="close" onClick={customClose}>
          X
        </div>
        <input type="checkbox" id="check" />
        <div className="login form">
          <header className="header">Login</header>
          <form action="#">
            <input type="text" value={logEmail} onChange={(e) => setLogEmail(e.target.value)} placeholder="Masukkan email" />
            <input type="password" value={logPass} onChange={(e) => setLogPass(e.target.value)} placeholder="Masukkan password" />
            <a href="#">Lupa Password?</a>
            <input type="button" value="login" className="button" onClick={handleLogin} />
          </form>
          <div className="signup">
            <span className="signup">
              Belum punya akun?
              <label htmlFor="check">Daftar</label>
            </span>
          </div>
        </div>
        <div className="registration form">
          <header className="header">Registrasi</header>
          <form action="#">
            <input type="text" value={regName} onChange={(e) => setRegName(e.target.value)} placeholder="Masukkan nama" />
            <input type="text" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} placeholder="Masukkan email" />
            <input type="password" value={regPass} onChange={(e) => setRegPass(e.target.value)} placeholder="Masukkan password" />
            <input type="password" value={regPassRepeat} onChange={(e) => setRegPassRepeat(e.target.value)} placeholder="Masukkan ulang password" />
            <input type="tel" value={regPhone} onChange={(e) => setRegPhone(e.target.value)} placeholder="Masukkan nomor telepon" />
            <input type="text" value={regImage} onChange={(e) => setRegImage(e.target.value)} placeholder="Masukkan url gambar" />

            <input type="button" className="button" value="Daftar" onClick={handleRegister} />
          </form>
          <div className="signup">
            <span className="signup">
              Sudah punya akun?
              <label htmlFor="check">Login</label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
