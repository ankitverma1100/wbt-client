import { useState, useRef, useEffect } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

export default function GameTypeDropdown({ value, onChange }: Props) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`custom-dropdown ${open ? "open" : ""}`}
      ref={dropdownRef}
    >
      {/* SELECTED VALUE */}
      <div
        className={`dropdown-control ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span className="dropdown-value">{value}</span>
        <span className="dropdown-arrow" />
      </div>

      {/* STATIC OPTIONS (ALWAYS RENDERED) */}
      <div className={`dropdown-menu ${open ? "show" : ""}`}>
        <div
          className={`dropdown-item ${
            value === "OPEN" ? "selected" : ""
          }`}
          onClick={() => {
            onChange("OPEN");
            setOpen(false);
          }}
        >
          OPEN
        </div>

        <div
          className={`dropdown-item ${
            value === "CLOSE" ? "selected" : ""
          }`}
          onClick={() => {
            onChange("CLOSE");
            setOpen(false);
          }}
        >
          CLOSE
        </div>

        <div
          className={`dropdown-item ${
            value === "JODI" ? "selected" : ""
          }`}
          onClick={() => {
            onChange("JODI");
            setOpen(false);
          }}
        >
          JODI
        </div>
      </div>
    </div>
  );
}
