import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#071a13] text-white font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0c241a]/70 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg">
              💼
            </div>
            <h1 className="text-xl font-extrabold tracking-tight">
              FinFlow
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <button className="text-white font-semibold">
              Dashboard
            </button>
            <button className="text-white/60 hover:text-white transition duration-300">
              Transactions
            </button>
            <button className="text-white/60 hover:text-white transition duration-300">
              Profile
            </button>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-bold">Alex Rivera</p>
              <p className="text-xs text-white/60">Premium Member</p>
            </div>

            <div className="w-10 h-10 rounded-full border-2 border-green-500 overflow-hidden">
              <img
                src="/images/avatar.jpg"
                alt="User"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 md:px-10 py-8 space-y-8">
        {/* WELCOME */}
        <div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight">
            Welcome back, Alex 👋
          </h2>
          <p className="text-white/60 mt-1 text-sm md:text-base">
            Here’s what’s happening with your money today.
          </p>
        </div>

        {/* BALANCE CARD */}
        <div className="relative rounded-3xl p-6 md:p-10 overflow-hidden bg-gradient-to-br from-[#0f3b2b] via-[#0b2e22] to-[#062017] shadow-2xl border border-white/10">
          {/* Glow Accent */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-green-500 opacity-20 rounded-full blur-3xl"></div>

          <p className="text-white/70 text-sm font-medium">
            Total Available Balance
          </p>

          <h3 className="text-4xl md:text-6xl font-extrabold mt-2 tracking-tight">
            $24,500.00
          </h3>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold">
              +12.5%
            </span>
            <p className="text-xs text-white/50">
              Updated 2 mins ago
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="bg-white text-[#062017] px-6 py-3 rounded-2xl font-bold hover:bg-gray-200 transition duration-300 shadow-lg">
              Manage Account
            </button>
            <button className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-2xl font-bold transition duration-300 shadow-lg">
              Add Funds
            </button>
          </div>
        </div>

        {/* QUICK ACTIONS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Send Money", "Receive Money", "Pay Bills", "Mobile Top-up"].map(
            (action) => (
              <button
                key={action}
                className="bg-[#0c241a] border border-white/10 p-5 rounded-3xl shadow-lg hover:scale-105 hover:bg-[#113528] transition-all duration-300 text-sm md:text-base font-semibold"
              >
                {action}
              </button>
            )
          )}
        </div>

        {/* TRANSACTIONS */}
        <div className="bg-[#0c241a] border border-white/10 rounded-3xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-white/10 flex justify-between items-center">
            <h4 className="font-bold text-lg">
              Recent Transactions
            </h4>
            <button className="text-green-400 font-semibold text-sm hover:underline">
              View All
            </button>
          </div>

          <div className="divide-y divide-white/10">
            <Transaction
              title="Amazon Tech Store"
              date="Oct 24, 2023"
              amount="-120.50"
              type="expense"
            />
            <Transaction
              title="Monthly Salary Deposit"
              date="Oct 23, 2023"
              amount="+4,200.00"
              type="income"
            />
            <Transaction
              title="Italian Bistro Cafe"
              date="Oct 22, 2023"
              amount="-45.00"
              type="expense"
            />
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-12 py-6 text-center text-white/40 text-sm">
        © 2026 FinFlow Technologies Inc.
      </footer>
    </div>
  );
}

function Transaction({ title, date, amount, type }) {
  return (
    <div className="p-5 flex items-center justify-between hover:bg-[#113528] transition duration-300">
      <div>
        <p className="font-semibold text-sm md:text-base">
          {title}
        </p>
        <p className="text-xs text-white/50">{date}</p>
      </div>

      <p
        className={`font-bold text-sm md:text-base ${
          type === "income"
            ? "text-green-400"
            : "text-red-400"
        }`}
      >
        {amount}
      </p>
    </div>
  );
}