import Icon from "../icons";

function Banner6() {
  return (
    <div className="lg:px-[15vw] py-24  w-full  bg-white">
      <div 

        className="w-full h-full   md:bg-[url('/mapbg.png')]  bg-no-repeat flex justify-center items-center"
      >

        <div className=" gap-2 flex flex-col justify-center items-center mx-5 sm:mx-10 md:mx-12 lg:mx-20 sm:p-0 font-manrope h-full text-center ">
          <p className="text-xl text-gray-300 font-bold ">
            Join Our Community

          </p>
          <p className="text-2xl lg:text-3xl font-bold  ">
            We are trusted by over 5000+ clients. Join them now and grow your business.
          </p>


          <p className="text-lg  font-medium text-gray-500"></p>
          <div className="text-lg   font-medium grid grid-cols-1 sm:grid-cols-3 md:gap-4 text-gray-500 ">
            <div className="flex flex-col items-center w-full  py-4 gap-2" >
         

              <p className="  text-2xl   font-semibold text-blue-500 ">3434</p>
              <p className="text-sm text-gray-500">Completed Projects</p>



            </div>
               <div className="flex flex-col items-center w-full  py-4 gap-2" >
         

              <p className="  text-2xl   font-semibold text-blue-500">3434</p>
              <p className="text-sm text-gray-500">Satisfied Customers</p>



            </div>
               <div className="flex flex-col items-center w-full  py-4 gap-2" >
         

              <p className="  text-2xl   font-semibold text-blue-500">3434</p>
              <p className="text-sm text-gray-500">Expert Employees</p>



            </div>

          </div>
        </div>

      </div>


    </div>

  );
}

export default Banner6;
