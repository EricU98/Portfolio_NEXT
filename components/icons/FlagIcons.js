export const DEFlag = ({ fill, size, height, width, ...props }) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={size || width || 24}
         height={size || height || 24}
         viewBox="0 0 512 512"
         {...props}
      >
         <rect width="512" height="512" fill="#D00" />
         <circle cx="256" cy="256" r="168" fill="#FFCE00" />
         <path
            d="M215.04 168.64l8.64 26.656h27.776l-22.4 16.256 8.576 26.688-22.368-16.16-22.4 16.16 8.704-26.688-22.464-16.256h27.904zM256 256h-25.792l-8.64 26.656-22.368-16.16 8.576 26.688-22.4-16.256 8.704-26.688-22.464-16.256H192l8.64-26.656h27.776l-22.4-16.256 8.576-26.688-22.368 16.16-22.4-16.16 8.704 26.688-22.464 16.256h27.904L256 119.168l8.64-26.656h27.776l-22.4 16.256 8.576-26.688-22.368 16.16z"
            fill={fill}
         />
      </svg>
   );
};

// const ENFlag = () => (
//    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//       <rect width="512" height="512" fill="#012169" />
//       <path fill="#fff" d="M0 0h512v512H0z" />
//       <path fill="#c8102e" d="M0 0h512v341.33H0z" />
//       <path fill="#fff" d="M0 170.67h512V512H0z" />
//       <path fill="#c8102e" d="M0 341.33h512v170.67H0z" />
//    </svg>
// );

// export { DEFlag, ENFlag };
