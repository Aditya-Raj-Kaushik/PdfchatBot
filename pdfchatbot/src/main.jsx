import { ClerkProvider, RedirectToSignIn } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const frontendApi = import.meta.env.VITE_CLERK_FRONTEND_API;


function App() {
  return (
    <ClerkProvider frontendApi={frontendApi}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<RedirectToSignIn />} />
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
}
