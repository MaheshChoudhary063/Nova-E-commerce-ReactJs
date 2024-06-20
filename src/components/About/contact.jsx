import React from 'react'
import Navbar from '../navbar/Navbar'
import Me from '../../assets/Me.png'

function contact() {
  return (
    <>
      <Navbar />
      <div className="py-9 p-8 bg-white rounded">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 py-7  ">
            <as
              href="https://port-folio-liard-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Me}
                alt="Avatar"
                width="300px"
                className="img-fluid rounded-full mx-auto my-5"
              />
            </as>
          </div>
          <div className="w-full lg:w-1/2 py-4 mt-2">
            <div>
              <h1 className="text-blue-800 text-center text-4xl font-bold">
                Mahesh Chaudhary
              </h1>
              <p className="text-gray-700 mt-4">
                I'm Mahesh Software Engineer As a MERN stack developer, I
                specialize in building user-friendly web applications tailored
                to meet client requirements
              </p>
            </div>
            <h3 className="text-xl font-semibold mt-8 mb-4">Contact Info</h3>
            <p className="mb-1"></p>
            <p className="mb-1">
              <a
                href="mailto:cmanishkumar193@gmail.com"
                className="text-blue-700"
              >
                maheshchoudhary0603@gmail.com
              </a>
            </p>
            <p className="mb-1">Jodhpur, India-342802</p>
            <p className="mt-4">
              Visit my{" "}
              <a
                href="https://port-folio-liard-eight.vercel.app//"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900"
              >
                portfolio
              </a>{" "}
              for more information.
            </p>
            <p className="mt-4">
              <a
                href="https://www.linkedin.com/in/maheshchaudhary63/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900"
              >
                LinkedIn
              </a>{" "}
              <a
                href="https://github.com/MaheshChoudhary063"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 ml-2"
              >
                Github
              </a>{" "}
              <a
                href="https://www.instagram.com/maheshchoudharry/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-900 ml-2"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default contact

