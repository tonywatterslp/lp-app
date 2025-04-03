import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./theme/theme";
import Layout from "./components/Layout/Layout";
import AdminDashboard from "./pages/AdminDashboard";
import LearnerDashboard from "./pages/LearnerDashboard";
import useKeyboardShortcut from "./hooks/useKeyboardShortcut";
import CourseCreator from "./components/CourseCreator/CourseCreator";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Use our custom hook for keyboard shortcut
  useKeyboardShortcut([
    {
      key: "t",
      ctrlKey: true,
      handler: () => setIsOpen(true),
    },
  ]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <Layout>
          <Routes>
            {/* Admin routes */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/learning-experiences" element={<AdminDashboard />} />
            <Route path="/resources" element={<div>Resources Page</div>} />
            <Route path="/events" element={<div>Events Page</div>} />
            <Route path="/playlists" element={<div>Playlists Page</div>} />
            <Route path="/users" element={<div>Users Page</div>} />
            <Route path="/groups" element={<div>Groups Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />

            {/* Learner routes */}
            <Route path="/learner-dashboard" element={<LearnerDashboard />} />
            <Route path="/dashboard" element={<LearnerDashboard />} />
            <Route path="/discover" element={<div>Discover Page</div>} />
            <Route
              path="/skills-builder"
              element={<div>Skills Builder Page</div>}
            />
            <Route path="/team-skills" element={<div>Team Skills Page</div>} />

            {/* Shared routes */}
            <Route path="/support" element={<div>Support Page</div>} />
            <Route
              path="/organisation-list"
              element={<div>Organisation List Page</div>}
            />
            <Route path="/logout" element={<div>Logout Processing...</div>} />

            {/* Default route */}
            <Route
              path="/"
              element={<Navigate to="/learning-experiences" replace />}
            />
          </Routes>

          {/* The CourseCreator is shared across the application */}
          <CourseCreator
            isOpen={isOpen}
            onCloseHandler={() => setIsOpen(false)}
          />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
