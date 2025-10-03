function Banner3() {
    return (
  
    <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Drop Us a Line
        </h2>
        <p className="text-gray-500 mb-10">
          Reach out to us from our contact form and we will get back to you shortly.
        </p>
      </div>

      <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="First Name *"
          className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400"
        />
        <input
          type="text"
          placeholder="Last Name *"
          className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400"
        />

        <input
          type="email"
          placeholder="Email *"
          className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none  placeholder:text-gray-400"
        />
        <select
          className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-gray-400 text-gray-400 "
        >
          <option>Select a department</option>
          <option>Support</option>
          <option>Sales</option>
          <option>General</option>
        </select>

 
        <textarea
          placeholder="Message *"
          rows={5}
          className="border rounded-md px-4 py-3 w-full focus:ring-2 focus:ring-blue-500 outline-none md:col-span-2 placeholder:text-gray-400"
        ></textarea>

  
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-medium px-8 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Send message
          </button>
          <p className="text-gray-500 text-sm mt-3">
            * These fields are required.
          </p>
        </div>
      </form>
    </section>


    );
}

export default Banner3;