export const Home = () => {
  return (
    <div className="max-w-[1000px] mx-auto mt-4 p-2">
      <form action="">
        <div className="p-2 flex flex-col sm:flex-row bg-blue-100 border-y-2 my-1">
          <div className="sm:w-3/12 sm:text-right sm:mr-2 sm:self-center mb-2 sm:mb-0">
            <label htmlFor="name">Name:</label>
          </div>
          <div className="sm:w-9/12">
            <input
              className="w-full p-2 border-2 rounded-lg"
              autoFocus
              type="text"
              name="name"
            />
          </div>
        </div>
        <div className="p-2 flex flex-col sm:flex-row bg-blue-100 border-y-2 my-1">
          <div className="sm:w-3/12 sm:text-right sm:mr-2 sm:self-center mb-2 sm:mb-0">
            <label htmlFor="address">Address:</label>
          </div>
          <div className="sm:w-9/12">
            <input
              className="w-full p-2 border-2 rounded-lg"
              type="text"
              name="address"
            />
          </div>
        </div>
        <div className="p-2 flex flex-col sm:flex-row bg-blue-100 border-y-2 my-1">
          <div className="sm:w-3/12 sm:text-right sm:mr-2 sm:self-center mb-2 sm:mb-0">
            <label htmlFor="martial">Martial Status:</label>
          </div>
          <div className="w-4/12 sm:w-3/12">
            <select className="w-full p-2 border-2 rounded-lg" name="martial">
              <option value="1">Married</option>
              <option value="2">Single</option>
            </select>
          </div>
        </div>
        <div className="p-2 flex flex-col sm:flex-row bg-blue-100 border-y-2 my-1">
          <div className="sm:w-3/12 sm:text-right sm:mr-2 sm:self-center mb-2 sm:mb-0">
            <label htmlFor="gender">Gender:</label>
          </div>
          <div>
            <div className="flex flex-col">
              <label htmlFor="male">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  className="form-radio h-4 w-4"
                />
                <span className="ml-2">Male</span>
              </label>
              <label htmlFor="female">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  className="form-radio h-4 w-4"
                />
                <span className="ml-2">Female</span>
              </label>
              <label htmlFor="other">
                <input
                  type="radio"
                  name="gender"
                  id="other"
                  className="form-radio h-4 w-4"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>
        </div>
        <div className="p-2 flex flex-row bg-blue-100 border-y-2 my-1">
          <div className="sm:w-3/12 sm:text-right sm:mr-2 sm:self-center"></div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white w-[150px] rounded-lg p-2 border-2"
          >
            Save
          </button>
          <button
            type="reset"
            className="bg-red-600 hover:bg-red-700 text-white w-[150px] rounded-lg p-2 border-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
