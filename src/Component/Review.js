import React from "react";

const Review = () => {
  return (
    <div>
      <h2 className="text-[20px] font-bold my-2 text-slate-600">
        Google & Fb Reviews
      </h2>
      <div className="image-cointner flex items-center justify-around my-5">
        <img
          src={require("./Test Folder/5cb30b93b42e95ee807cc073b66ea1a2.png")}
          className="w=[50px] h-[50px] opacity-30 "
          alt="review-cx"
        />
        <img
          src={require("./Test Folder/808675.png")}
          className="w=[60px] h-[60px]"
          alt="review-cx"
        />
        <img
          src={require("./Test Folder/freepressjournal_import_2017_10_Tom-Cruise.png")}
          className="w=[87px] h-[87px]"
          alt="review-cx"
        />
        <img
          src={require("./Test Folder/5cb30b93b42e95ee807cc073b66ea1a2.png")}
          className="w=[60px] h-[60px]"
          alt="review-cx"
        />
        <img
          src={require("./Test Folder/freepressjournal_import_2017_10_Tom-Cruise.png")}
          className="w=[50px] h-[50px] opacity-30"
          alt="review-cx"
        />
      </div>
      <h2 className="text-[20px] font-bold my-2 text-slate-700">
        Joshua Segar
      </h2>
      {/* star */}
      <div className="flex items-center justify-center">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-[#08b1a2]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>First star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-[#08b1a2]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Second star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-[#08b1a2]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Third star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-[#08b1a2]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Fourth star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-300 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Fifth star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
      <p className="mx-3 text-[12px] text-slate-500 py-2 text-center font-semibold">
        Fantastic company! I discovered them while searching for home trial
        glassses on Google and I’m so glad I did! Excellent customer service,
        super fast and efficient! The website is very easy to use and very user
        friendly. While ordony glasses, I had
      </p>
      <h2 className="text-[18px] text-[#08b1a2] font-bold mt-2 text-center ">
        Learn More
      </h2>
      <div class="my-5">
        <ul class="flex items-center justify-center">
          {/* <!-- Note that we have one <li> for each image in our gallery --></li> */}
          <li class="h-2 w-2 rounded-full mx-1 cursor-pointer bg-[#08b1a2]"></li>
          <li class="h-2 w-2 rounded-full mx-1 cursor-pointer bg-gray-500"></li>
          <li class="h-2 w-2 rounded-full mx-1 cursor-pointer bg-gray-500"></li>
          <li class="h-2 w-2 rounded-full mx-1 cursor-pointer bg-gray-500"></li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
