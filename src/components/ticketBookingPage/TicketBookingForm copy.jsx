import React from "react";

const TicketBookingForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white ">
      {/* Personal Information */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Personal Information:</h3>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Contact Number"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Nationality <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Nationality"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Passport Number (for international tours)
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Passport Number (for international tours)"
            />
          </div>
        </form>
      </section>

      {/* Travel Details */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Travel Details:</h3>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Tour Package Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Tour Package Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Departure Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Return Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Number of Adults <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Number of Adults"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Number of Children (if applicable)
            </label>
            <input
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Number of Children"
            />
          </div>
        </form>
      </section>

      {/* Accommodation Preferences */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Accommodation Preferences:
        </h3>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Hotel Type
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Standard</option>
              <option>Deluxe</option>
              <option>Luxury</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Room Configuration
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Single</option>
              <option>Double</option>
              <option>Triple</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium  text-gray-500">
              Special Requests (if any)
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 min-h-32 "
              placeholder="Special Requests (if any)"
            ></textarea>
          </div>
        </form>
      </section>

      {/* Transportation Preferences */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Transportation Preferences:
        </h3>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Flight Preference (if applicable)
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Flight Preference (if applicable)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Airport Transfers
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Airport Transfers"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">
              Special Transportation Requests (if any)
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 min-h-32 "
              placeholder="Special Transportation Requests (if any)"
            ></textarea>
          </div>
        </form>
      </section>

      {/* Emergency Contact Information */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Emergency Contact Information:
        </h3>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Relationship
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Relationship"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Contact Number
            </label>
            <input
              type="tel"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Contact Number"
            />
          </div>
        </form>
      </section>

      {/* Payment Information */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Payment Information:</h3>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Payment Method
            </label>
            <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
              <option>Credit Card</option>
              <option>Cash</option>
              <option>Bank Transfer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Credit Card Details (if applicable)
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Credit Card Details (if applicable)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Billing Address (if paying by credit card)
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Billing Address (if paying by credit card)"
            />
          </div>
        </form>
      </section>

      {/* Additional Comments/Requests */}
      <section className="mb-8">
        <h3 className="text-lg font-semibold mb-4">
          Additional Comments/Requests:
        </h3>
        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Any specific dietary preferences or restrictions
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 min-h-32 "
              placeholder="Any specific dietary preferences or restrictions"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Special requests or accommodations needed
            </label>
            <textarea
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 min-h-32 "
              placeholder="Special requests or accommodations needed"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500">
              Terms and Conditions Agreement
            </label>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className=" text-gray-500">
                Agreed to the terms and conditions of the tour company
              </span>
            </div>
          </div>
        </form>
      </section>

      <div className="mt-8">
        <button className="w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-900">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default TicketBookingForm;
