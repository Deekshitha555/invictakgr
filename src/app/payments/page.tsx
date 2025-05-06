"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Separator from "@/components/Separator";
import Footer from "@/components/Footer";

const StripeLikeCheckout = () => {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [upiId, setUpiId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card"); // Default to card

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`This is just a design. No payment functionality implemented. Method: ${paymentMethod}`);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Secure Checkout
          </h1>
          <form onSubmit={handleCheckout}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>

            {/* Payment Method Selector */}
            <div className="mb-6">
              <div className="flex items-center space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Card</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="form-radio text-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">UPI</span>
                </label>
              </div>
            </div>

            {/* Card Payment Fields */}
            {paymentMethod === "card" && (
              <>
                <div className="mb-4">
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-600">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    required
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-600">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      required
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvc" className="block text-sm font-medium text-gray-600">
                      CVC
                    </label>
                    <input
                      type="text"
                      id="cvc"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      required
                      className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="123"
                    />
                  </div>
                </div>
              </>
            )}

            {/* UPI Payment Fields */}
            {paymentMethod === "upi" && (
              <div className="mb-4">
                <label htmlFor="upiId" className="block text-sm font-medium text-gray-600">
                  UPI ID
                </label>
                <input
                  type="text"
                  id="upiId"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  required
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@upi"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Pay 
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Powered by <span className="text-blue-500 font-semibold">Stripe</span>
          </p>
        </div>
      </div>
      <Separator />
      <Footer />
    </div>
  );
};

export default StripeLikeCheckout;
