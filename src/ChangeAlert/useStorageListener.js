import React from "react";

function useStorageListener({ syncNow }) {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    const onChange = (change) => {
      if (change.key === "TODOS_V1") {
        console.log("Hubo cambios en TODOS_V1");
        setStorageChange(true);
      }
    };

    window.addEventListener("storage", onChange);

    return () => {
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const toggleShow = () => {
    console.log("aver");
    syncNow();
    setStorageChange(false);
  };

  return {
    show: storageChange,
    toggleShow: toggleShow,
  };
}

export { useStorageListener };
