import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider";
import { Toaster } from "react-hot-toast";
import { router } from "./routes/Routes";
import superbg from "./assets/images/Background/super_bg.jpeg"

createRoot(document.getElementById("root")).render(
  <div className="bg-opacity-50 bg-center" style={{
    background: `url(${superbg})`
  }}>
    <div className="max-w-7xl mx-auto">
      <StrictMode>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
        <Toaster />
      </StrictMode>
    </div>
  </div>
);
