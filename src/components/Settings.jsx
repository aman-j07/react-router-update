import React, { useRef } from "react";
import { useSearchParams } from "react-router-dom";

function Settings() {
  const [settings, setSettings] = useSearchParams({ first: "", second: "" });

  const refSettings = useRef({ first: null, second: null });

  const saveSettings = (e) => {
    e.preventDefault();
    setSettings({
      first: refSettings.current.first.value,
      second: refSettings.current.second.value,
    });
  };

  return (
    <div className="p-4 m-4 border-0 shadow-sm bg-white">
      <h3 className="mb-2">Settings</h3>
      <form onSubmit={saveSettings}>
        <div className="mb-3">
          <label className="form-label">Setting 1</label>
          <input
            ref={(ele) => {
              refSettings.current.first = ele;
            }}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Setting 2</label>
          <input
            ref={(ele) => {
              refSettings.current.second = ele;
            }}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Change Settings
        </button>
      </form>
      <div className="mt-4">
        <div className="mb-1">
          <span className="fw-bold">Setting 1:</span>
          {settings.get("first")}
        </div>
        <div>
          <span className="fw-bold">Setting 2:</span>
          {settings.get("second")}
        </div>
      </div>
    </div>
  );
}

export default Settings;
