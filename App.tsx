import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import Dashboard from './pages/Dashboard';
import Deals from './pages/Deals';
import Customers from './pages/Customers';
import Reports from './pages/Reports';
import Integrations from './pages/Integrations';
import Settings from './pages/Settings';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative overflow-hidden font-serif selection:bg-blue-500/30 transition-colors duration-500">
          
          {/* Background Ambient Effects - "Liquid Glass" feel */}
          <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
          <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow delay-700"></div>
          <div className="fixed top-[30%] left-[30%] w-[20%] h-[20%] bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none animate-float"></div>

          <div className="flex relative z-10">
            <Sidebar />
            
            <div className="flex-1 md:ml-64 transition-all duration-300">
              <Navbar />
              
              <main className="p-4 md:p-8 pb-20 max-w-7xl mx-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/deals" element={<Deals />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/integrations" element={<Integrations />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </main>
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;