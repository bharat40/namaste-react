import { useEffect, useState } from "react";

// const useOnlineStatus = () => {
//   const [onlineStatus, setOnlineStatus] = useState(true);
//   // check is online or not

//   useEffect(() => {
//     window.addEventListener("offline", () => {
//       setOnlineStatus(false);
//     });

//     window.addEventListener("online", () => {
//       setOnlineStatus(true);
//     });
//   }, []);

//   // return boolean value
//   return onlineStatus;
// };

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
