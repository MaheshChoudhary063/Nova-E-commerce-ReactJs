import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer
        style={{ backgroundColor: "bg-white" }}
        className="text-gray-600 body-font"
      >
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center dark:bg-navy-900">
            <span className="text-xl font-bold">Nova</span>
          </a>

          <p className="text-sm dark:bg-navy-900 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Nova —
            <Link
              to={"/"}
              className="dark:bg-navy-900 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @maheshChoudhary 
            </Link>
          </p>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://leetcode.com/mahesh_63/"
              className="dark:bg-navy-900 cursor-pointer"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm3.052 18.083H9.482l-1.115 1.306 3.273-8.634H8.085l3.417-4.202-1.19 9.836 2.74-6.383L14.435 21z" />
              </svg>
            </a>

            <a
              href="https://github.com/MaheshChoudhary063"
              class="ml-3 dark:bg-navy-900 cursor-pointer"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" class="w-5 h-5">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.22 11.385.6.11.822-.26.822-.58 0-.287-.01-1.046-.015-2.055-3.338.724-4.042-1.613-4.042-1.613-.546-1.38-1.334-1.747-1.334-1.747-1.09-.744.082-.727.082-.727 1.205.086 1.838 1.236 1.838 1.236 1.07 1.835 2.81 1.305 3.496.998.108-.776.42-1.306.763-1.605-2.675-.304-5.487-1.337-5.487-5.93 0-1.31.465-2.385 1.235-3.233-.124-.304-.536-1.53.117-3.187 0 0 1.01-.324 3.3 1.235.957-.266 1.98-.398 3-.402 1.02.004 2.043.136 3 .402 2.29-1.56 3.297-1.235 3.297-1.235.654 1.657.24 2.883.117 3.187.77.848 1.234 1.923 1.234 3.233 0 4.607-2.816 5.622-5.492 5.92.43.372.818 1.102.818 2.222 0 1.606-.015 2.896-.015 3.287 0 .32.216.696.828.576C20.566 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/maheshchoudharry/"
              className="ml-3 dark:bg-navy-900 cursor-pointer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/mahesh-choudhary-2aa138243/"
              className="ml-3 dark:bg-navy-900 cursor-pointer"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
