import React from "react";

export default function Register() {
  return (
    <div className="relative min-h-screen flex bg-[#071a13] overflow-hidden text-white font-sans">

      {/* Animated Background Blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-emerald-400/10 rounded-full blur-3xl animate-pulse"></div>

      {/* LEFT SIDE */}
      <div className="hidden lg:flex w-1/2 flex-col justify-between p-16 relative z-10">

        <h2 className="text-3xl font-extrabold tracking-tight animate-fadeIn">
          FinTech Plus
        </h2>

        <div className="max-w-md space-y-6 animate-fadeInUp">
          <h1 className="text-5xl font-black leading-tight">
            Join the future of{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              finance.
            </span>
          </h1>

          <p className="text-white/70 text-lg">
            Seamless digital banking with real-time insights, powerful tools,
            and enterprise-grade security.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-10 text-sm text-white/70 animate-fadeInUp">
          <Stat number="50k+" label="Active Users" />
          <Stat number="4.9/5" label="App Rating" />
          <Stat number="24/7" label="Support" />
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex w-full lg:w-1/2 items-center justify-center p-6 sm:p-12 relative z-10">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl p-10 animate-fadeInUp">

          <div className="mb-8">
            <h2 className="text-3xl font-extrabold">
              Create Account
            </h2>
            <p className="text-white/60 mt-2 text-sm">
              Start managing your finances smarter today.
            </p>
          </div>

          <form className="space-y-5">

            <Input label="Full Name" type="text" placeholder="John Doe" />
            <Input label="Email Address" type="email" placeholder="name@example.com" />
            <Input label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Password" type="password" placeholder="••••••••" />
              <Input label="Confirm Password" type="password" placeholder="••••••••" />
            </div>

            <div className="flex items-start gap-3 pt-2 text-sm text-white/70">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 accent-green-500"
              />
              <p>
                I agree to the{" "}
                <span className="text-green-400 font-semibold cursor-pointer hover:underline">
                  Terms
                </span>{" "}
                and{" "}
                <span className="text-green-400 font-semibold cursor-pointer hover:underline">
                  Privacy Policy
                </span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 font-bold rounded-2xl shadow-xl hover:shadow-green-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-white/60">
            Already have an account?{" "}
            <span className="text-green-400 font-bold cursor-pointer hover:underline">
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2 group">
      <label className="text-sm font-semibold text-white/80">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-green-400 focus:ring-2 focus:ring-green-400/30 outline-none transition-all duration-300 group-hover:border-white/40"
      />
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="space-y-1">
      <p className="text-2xl font-bold text-white animate-pulse">
        {number}
      </p>
      <p>{label}</p>
    </div>
  );
}