/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import "./changepassword.scss";
import { useUserCahngePasswordMutation } from "../../store/service/userServices/userServices";
import { useNavigate } from "react-router-dom";

/* ================= SVG ICONS ================= */

const EyeInvisibleIcon = ({ onClick }: { onClick: () => void }) => (
    <span className="password-icon" onClick={onClick}>
        <svg viewBox="64 64 896 896" focusable="false" data-icon="eye-invisible" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z"></path><path d="M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z"></path></svg>
    </span>
);

const EyeIcon = ({ onClick }: { onClick: () => void }) => (
    <span className="password-icon" onClick={onClick}>
        <svg viewBox="64 64 896 896" focusable="false" data-icon="eye" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"></path></svg>
    </span>
);

/* ================= COMPONENT ================= */

const Changepassword = () => {
  const nav = useNavigate();
  const [passwordChange, { data }] = useUserCahngePasswordMutation();

  const [form, setForm] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [touched, setTouched] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [showPasswords, setShowPasswords] = useState(false);
  const [visible, setVisible] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  /* ================= HANDLERS ================= */

  const handleChange = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });

    // 👇 MARK AS TOUCHED AS SOON AS USER TYPES
    if (!touched[key]) {
      setTouched({ ...touched, [key]: true });
    }
  };

  const errors = {
    current:
      touched.current && !form.current
        ? "Please enter current password"
        : "",
    new:
      touched.new && !form.new ? "Please enter new password" : "",
    confirm:
      touched.confirm && !form.confirm
        ? "Please confirm your new password"
        : touched.confirm && form.new !== form.confirm
        ? "Passwords do not match"
        : "",
  };

  const handleSubmit = () => {
    setTouched({
      current: true,
      new: true,
      confirm: true,
    });

    if (errors.current || errors.new || errors.confirm) return;

    passwordChange({
      currentPassword: form.current,
      newPassword: form.new,
    });
  };

  useEffect(() => {
    if (data?.status) {
      localStorage.clear();
      nav("/login");
    }
  }, [data, nav]);

  /* ================= UI ================= */

  return (
    <div className="change-password-page">
      <div className="password-card">
        <div className="card-header">CHANGE PASSWORD</div>

        <div className="card-body">
          {/* CURRENT */}
          <div className={`form-item ${errors.current ? "has-error" : ""}`}>
            <label>* CURRENT PASSWORD</label>
            <div className="input-wrapper">
              <input
                placeholder="Enter current password"
                type={visible.current ? "text" : "password"}
                value={form.current}
                onChange={(e) => handleChange("current", e.target.value)}
              />
              {showPasswords &&
                (visible.current ? (
                  <EyeIcon onClick={() => setVisible({ ...visible, current: false })} />
                ) : (
                  <EyeInvisibleIcon onClick={() => setVisible({ ...visible, current: true })} />
                ))}
            </div>
            <div className="error-text">{errors.current}</div>
          </div>

          {/* NEW */}
          <div className={`form-item ${errors.new ? "has-error" : ""}`}>
            <label>* NEW PASSWORD</label>
            <div className="input-wrapper">
              <input
                placeholder="Enter new password"
                type={visible.new ? "text" : "password"}
                value={form.new}
                onChange={(e) => handleChange("new", e.target.value)}
              />
              {showPasswords &&
                (visible.new ? (
                  <EyeIcon onClick={() => setVisible({ ...visible, new: false })} />
                ) : (
                  <EyeInvisibleIcon onClick={() => setVisible({ ...visible, new: true })} />
                ))}
            </div>
            <div className="error-text">{errors.new}</div>
          </div>

          {/* CONFIRM */}
          <div className={`form-item ${errors.confirm ? "has-error" : ""}`}>
            <label>* CONFIRM NEW PASSWORD</label>
            <div className="input-wrapper">
              <input
                placeholder="Confirm new password"
                type={visible.confirm ? "text" : "password"}
                value={form.confirm}
                onChange={(e) => handleChange("confirm", e.target.value)}
              />
              {showPasswords &&
                (visible.confirm ? (
                  <EyeIcon onClick={() => setVisible({ ...visible, confirm: false })} />
                ) : (
                  <EyeInvisibleIcon onClick={() => setVisible({ ...visible, confirm: true })} />
                ))}
            </div>
            <div className="error-text">{errors.confirm}</div>
          </div>

          <div className="show-passwords">
            <input
              type="checkbox"
              checked={showPasswords}
              onChange={(e) => setShowPasswords(e.target.checked)}
            />
            <span>Show Passwords</span>
          </div>

          <button className="submit-btn" onClick={handleSubmit}>
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Changepassword;