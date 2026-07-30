export default function TenantPortal() {
  return (
    <section className="form-sec tenant-portal-sec">
      <div className="container">
        <div className="form-itm">
          <div className="img-cont">
            <img src="/img/logo.png" alt="Access Realties" className="img-fluid" />
          </div>
          <h2>Portal</h2>
          <p>Login to your account</p>
          <form action="">
            <input type="text" name="username" placeholder="Enter Username" required />
            <input type="password" name="password" placeholder="Password" required />
            <div className="checkbox">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-theme1">
              Login
            </button>
          </form>
          <a href="#">Forgot Your Password?</a>
        </div>
      </div>
    </section>
  );
}
