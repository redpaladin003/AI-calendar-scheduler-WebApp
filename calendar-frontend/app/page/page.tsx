import Login from "../components/LoginButton";
import Register from "../components/SigninButton";


export default function Home() {
  return (
    <div className="text-animation flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
        Boost your productivity.
        <br />
        Start using our app right now!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl text-white mb-8">
        Effortlessly manage your schedule with the power of AI.
        <br />
        Organize, plan, and stay ahead with a tool designed to simplify your life.
      </p>
      <div className="flex space-x-4">
        <Login />
        <Register />
      </div>
    </div>
  );
}
