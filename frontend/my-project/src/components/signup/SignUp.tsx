import { useState } from "react";
import ImageSignUp from "../../assets/images/signin-signup/7978386d686a5f686ad7fbc612e2db01.jpg";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Xử lý đăng ký ở đây
    console.log({ username, email, password, confirmPassword, agree });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 col-span-5">
      {/* Image Sign Up */}
      <img
        src={ImageSignUp}
        className="h-[619px] w-[450px]  shadow-md"
      />

      {/* Form Sign Up */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <i className="fa-solid fa-user mr-2"></i>
              Username
            </label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <i className="fa-solid fa-envelope mr-2"></i>
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <i className="fa-solid fa-lock mr-2"></i>
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              <i className="fa-solid fa-lock mr-2"></i>
              Confirm Password
            </label>
            <input
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              required
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
            />
            <label className="ml-2 text-sm text-gray-600 ">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:underline">
                terms and conditions
              </a>
            </label>
          </div>
          <button type="submit" className="button-signin-signup">
            Sign Up
          </button>
          <div className="flex items-center justify-between">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="button-google">
            <i className="fa-brands fa-google mr-2"></i>
            Sign In with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
