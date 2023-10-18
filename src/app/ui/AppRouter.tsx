import LoginPage from '@pages/auth/LoginPage';

import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '@shared/hooks/reducer';
import { withNotifications } from '@shared/ui/theme/notification';

function App() {
  const isAuth = useAppSelector((state) => state.userReducer.isAuth);
  return isAuth ? (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/guests" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default withNotifications(App);
  