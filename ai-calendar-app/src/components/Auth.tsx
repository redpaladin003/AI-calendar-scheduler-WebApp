import { Outlet } from 'react-router';

export default function Auth() {
  return (
    <div>
      <h1>Authentication</h1>
      {/* Render the child route (Login or SignIn) here */}
      <Outlet />
    </div>
  );
}