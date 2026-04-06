import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import logoRolex from "../../assets/logo-rolex.png";
import logoRolexGolden from "../../assets/rolex-logo-golden.png";
import { useDemoLoginMutation, useLoginMutation } from "../../store/service/authService";
import { toast } from "react-toastify";

/* ================= SVG ICONS ================= */

const UserIcon = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="#000">
    <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-44.8 18.9-85 46-119.5 80.6A374 374 0 00136 901.8h60c2-77.2 33-149.5 87.8-204.3C340.7 640.8 416 609.6 512 609.6s171.3 31.2 212.2 87.9C779 752.3 810 824.6 812 901.8h60c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" />
  </svg>
);

const LockIcon = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="#000">
    <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53h40v-53a48.01 48.01 0 10-40 0z" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
);

const EyeInvisibleIcon = () => (
  <svg viewBox="64 64 896 896" focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path></svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
  </svg>
);

const Spinner = () => (
  <svg className="btn-spinner" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" />
  </svg>
);

const getErrorMessage = (error: unknown, fallback: string) => {
  if (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof (error as { data?: unknown }).data === "object" &&
    (error as { data?: { message?: unknown } }).data &&
    typeof (error as { data?: { message?: unknown } }).data?.message === "string"
  ) {
    return (error as { data: { message: string } }).data.message;
  }
  return fallback;
};

const Login_New = () => {
  const nav = useNavigate();
  const [trigger, { data: loginData, isLoading, error: loginRequestError }] = useLoginMutation();
  const [demoLogin, { data: demoData, isLoading: isDemoLoadingApi, error: demoRequestError }] = useDemoLoginMutation();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [touched, setTouched] = useState({
    username: false,
    password: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loadingType, setLoadingType] = useState<"login" | "demo" | null>(null);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleAuthSuccess = useCallback((authData: LoginResponse | DemoLoginResponse) => {
    const resolvedData = authData?.data ?? authData;
    const token = resolvedData?.token;
    const userId = resolvedData?.userId;
    const username = resolvedData?.username;

    if (!token) return false;

    localStorage.setItem("isLogin", "1");
    localStorage.setItem("client-token", token);
    if (userId) localStorage.setItem("userId", userId);
    if (username) localStorage.setItem("username", username);
    setLoginError(null);
    nav("/main/rules");
    return true;
  }, [nav]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((p) => ({ ...p, [name]: true }));
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!formData?.username) {
      // toast.error("Username is required!");
      console.error("Username is required!");
      return;
    }
    if (!formData?.password) {
      // toast.error("Password is required!");
      console.error("Password is required!");
      return;
    }

    setLoadingType("login");
    setLoginError(null);
    const hostname = window.location.hostname;
    const isLocalRuntime =
      import.meta.env.DEV ||
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname === "[::1]" ||
      /^10\./.test(hostname) ||
      /^192\.168\./.test(hostname) ||
      /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname);
    const loginUrl = isLocalRuntime ? "wbt24.com" : hostname;

    try {
      await trigger({
        password: formData.password,
        userId: formData.username,
        url: loginUrl,
      });
    } catch (error) {
      console.error("Login failed:", error);
      setLoadingType(null);
    }
  };

  const handleDemoLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoadingType("demo");
    setLoginError(null);
    demoLogin();
  };

  useEffect(() => {
    // Reset loading when mutation is no longer loading and we have result
    if (!isLoading && loginData) {
      if (loginData?.status === false) {
        setLoadingType(null);
        const message = loginData.message || "Invalid UserId or Password";
        setLoginError(message);
        console.error("Login failed:", message);
        return;
      }

      if (!handleAuthSuccess(loginData) && loginData?.message) {
        // Handle login error
        setLoadingType(null);
        // Show error message if needed
        setLoginError(loginData.message);
        console.error("Login failed:", loginData.message);
      }
    }
  }, [handleAuthSuccess, loginData, isLoading]);

  useEffect(() => {
    if (!isDemoLoadingApi && demoData) {
      if (demoData?.status === false) {
        setLoadingType(null);
        const message = demoData.message || "Demo login failed";
        setLoginError(message);
        console.error("Demo login failed:", message);
        return;
      }

      if (!handleAuthSuccess(demoData) && demoData?.message) {
        setLoadingType(null);
        setLoginError(demoData.message);
        console.error("Demo login failed:", demoData.message);
      }
    }
  }, [demoData, handleAuthSuccess, isDemoLoadingApi]);

  useEffect(() => {
    if (loginError) {
      toast.error(loginError);
    }
  }, [loginError]);

  useEffect(() => {
    if (loginRequestError) {
      setLoadingType(null);
      setLoginError(getErrorMessage(loginRequestError, "Login request failed"));
    }
  }, [loginRequestError]);

  useEffect(() => {
    if (demoRequestError) {
      setLoadingType(null);
      setLoginError(getErrorMessage(demoRequestError, "Demo login request failed"));
    }
  }, [demoRequestError]);

  // LOGIC: Show error if:
  // 1. Form has been submitted AND field is empty (formSubmitted)
  // OR
  // 2. Field has been touched AND field is empty (touched)
  const showUsernameError = (formSubmitted || touched.username) && !formData.username;
  const showPasswordError = (formSubmitted || touched.password) && !formData.password;

  // Determine if login button should show loading
  const isLoginLoading = loadingType === "login" || (loadingType === "login" && isLoading);
  const isDemoLoading = loadingType === "demo" || isDemoLoadingApi;

  return (
    <div className="ant-design-login-container">
      <div className={`ant-card login-card ${loadingType ? "is-loading" : ""}`}>
        <div className="ant-card-body">

          <div className="login-header">
            <img
              src={logoRolexGolden}
              alt="Logo"
              className="login-logo"
            />
          </div>

          <form className="ant-form" onSubmit={(e) => e.preventDefault()}>

            {/* USERNAME */}
            <div className={`ant-form-item ${showUsernameError ? "ant-form-item-has-error" : ""}`}>
              <span className="ant-input-affix-wrapper">
                <span className="ant-input-prefix"><UserIcon /></span>
                <input
                  className="ant-input"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  // Add aria attributes for accessibility
                  aria-invalid={showUsernameError}
                  aria-describedby={showUsernameError ? "username-error" : undefined}
                  disabled={!!loadingType}
                />
              </span>
              {showUsernameError && (
                <div
                  id="username-error"
                  className="ant-form-item-explain-error"
                  role="alert"
                >
                  Please input your username!
                </div>
              )}
            </div>

            {/* PASSWORD */}
            <div className={`ant-form-item ${showPasswordError ? "ant-form-item-has-error" : ""}`}>
              <span className="ant-input-affix-wrapper ant-input-password">
                <span className="ant-input-prefix"><LockIcon /></span>
                <input
                  className="ant-input"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={showPasswordError}
                  aria-describedby={showPasswordError ? "password-error" : undefined}
                  disabled={!!loadingType}
                />
                <span
                  className="ant-input-password-icon"
                  onClick={() => !loadingType && setShowPassword(!showPassword)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (!loadingType && (e.key === 'Enter' || e.key === ' ')) {
                      setShowPassword(!showPassword);
                    }
                  }}
                  style={{ cursor: loadingType ? 'not-allowed' : 'pointer' }}
                >
                  {showPassword ? <EyeIcon /> : <EyeInvisibleIcon />}
                </span>
              </span>
              {showPasswordError && (
                <div
                  id="password-error"
                  className="ant-form-item-explain-error"
                  role="alert"
                >
                  Please input your password!
                </div>
              )}
            </div>

            {/* SIGN IN */}
            <button
              type="submit"
              className="ant-btn ant-btn-primary ant-btn-block"
              onClick={handleLogin}
              disabled={!!loadingType}
            >
              {isLoginLoading ? <Spinner /> : <ArrowRightIcon />}
              {isLoginLoading ? "Signing in..." : "Sign In"}
            </button>

            <div className="ant-divider ant-divider-with-text">
              <span className="ant-divider-inner-text">or</span>
            </div>

            {/* DEMO */}
            <button
              type="button"
              className="ant-btn ant-btn-default ant-btn-block"
              onClick={handleDemoLogin}
              disabled={!!loadingType}
            >
              {isDemoLoading ? <Spinner /> : <ArrowRightIcon />}
              {isDemoLoading ? "Loading..." : "Demo Login"}
            </button>

          </form>

          <div className="login-footer ">
            <span className="disclaimer">Note: This website is not for Indian Territory</span>
            <div className="footer-links">
              <div className="footer-row">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms & Conditions</a>
              </div>
              <div className="footer-row single">
                <a href="#">Rules & Regulations</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login_New;
