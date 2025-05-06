"use client";
import Navbar from "@/components/Navbar";
import Separator from "@/components/Separator";
import Footer from "@/components/Footer";
import { useState } from "react";

const events = [
  { id: 1, name: "Raaga Ratnam(Solo)", price: 250 },
  { id: 2, name: "Battle of Bands(Duo/Duet)", price: 1000 },

];

const TicketsPage = () => {
  const [selectedTickets, setSelectedTickets] = useState<Record<number, number>>({});
  const [totalAmount, setTotalAmount] = useState(0);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleTicketChange = (eventId: number, quantity: number) => {
    if (quantity < 0 || isNaN(quantity)) {
      quantity = 0;
    }
    const updatedTickets = { ...selectedTickets, [eventId]: quantity };
    setSelectedTickets(updatedTickets);

    const total = events.reduce((sum, event) => {
      return sum + (updatedTickets[event.id] || 0) * event.price;
    }, 0);
    setTotalAmount(total);
  };

  const handleProceed = () => {
    if (totalAmount > 0) {
      setIsFormVisible(true);
    } else {
      alert("Please select at least one ticket.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const selectedEventDetails = events
        .filter(event => selectedTickets[event.id])
        .map(event => ({
          name: event.name,
          price: event.price,
          quantity: selectedTickets[event.id],
        }));

      const response = await fetch("/api/send-tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          items: selectedEventDetails,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send the ticket.");
      }
      setIsFormVisible(false);
      setSelectedTickets({});
      setTotalAmount(0);
      setEmail("");
    } catch (error) {
      console.error("Error sending the ticket:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="relative overflow-hidden pl-0 m-2">
      <div className="w-screen flex flex-col justify-between">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-4xl lg:text-6xl font-bold text-orange-500 mb-8">
            Book Your Tickets
          </h1>
          {!isFormVisible ? (
            <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
              {events.map(event => (
                <div
                  key={event.id}
                  className="flex justify-between items-center border-b py-4"
                >
                  <div>
                    <h2 className="text-lg font-semibold">{event.name}</h2>
                    <p className="text-sm text-gray-600">Price: ₹{event.price}</p>
                  </div>
                  <input
                    type="number"
                    min="0"
                    className="w-16 p-2 border rounded-lg text-center"
                    placeholder="0"
                    value={selectedTickets[event.id] || ""}
                    onChange={e =>
                      handleTicketChange(event.id, parseInt(e.target.value) || 0)
                    }
                  />
                </div>
              ))}
              <div className="mt-4 text-lg font-semibold text-right">
                Total Amount: ₹{totalAmount}
              </div>
              <button
                onClick={handleProceed}
                disabled={isLoading}
                className={`mt-6 w-full bg-orange-500 text-white py-2 rounded-lg ${
                  isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600 transition"
                }`}
              >
                {isLoading ? "Processing..." : "Proceed"}
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md bg-white shadow-md rounded-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">Enter Team Leader Email</h2>
              <input
                type="email"
                required
                className="w-full p-2 mb-4 border rounded-lg"
                placeholder="Team lead's email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-orange-500 text-white py-2 rounded-lg ${
                  isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-600 transition"
                }`}
              >
                {isLoading ? "Sending..." : "Send Ticket"}
              </button>
            </form>
          )}
        </div>
        <Separator />
        <Footer />
      </div>
    </main>
  );
};

export default TicketsPage;
