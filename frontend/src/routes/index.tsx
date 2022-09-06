import { Details, Home, RegisterNewCommunication } from 'pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cadastrar-nova-comunicacao"
          element={<RegisterNewCommunication />}
        />
        <Route path="/detalhes/:id" element={<Details />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
