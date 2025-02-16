import ImageSignIn from "../../assets/images/signin-signup/05c4ca433b9000dd5629193656f2e4e3.jpg";
import Footer from "../../layout/footer/Footer";
import Header from "../../layout/header/Header";

const SignIn = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 col-span-5">
        {/* Image Sign In */}
        <div className="relative">
          <img
            src={ImageSignIn}
            alt=""
            className="h-[435px] w-[430px] shadow-lg"
          />
        </div>
        {/* Form Sign In */}
        <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg">
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                <i className="fa-solid fa-user mr-2"></i>
                Username or Email
              </label>
              <input
                type="text"
                required
                className="input"
                placeholder="Enter your username or email"
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
                className="input"
                placeholder="Enter your password"
              />
            </div>
            <button type="submit" className="button-signin-signup ">
              Sign In
            </button>
          </form>
          <div className="flex items-center justify-between">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500">OR</span>
            <hr className="flex-grow border-gray-300" />
          </div>
          <button className="button-google">
            <i className="fa-brands fa-google mr-2"></i>
            Sign In with Google
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SignIn;
