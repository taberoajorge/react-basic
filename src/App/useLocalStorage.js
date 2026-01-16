import React from "react";

// Custom Hooks
function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [sync, setSync] = React.useState(true);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [itemsToLoad] = React.useState(
    JSON.parse(localStorage.getItem(itemName))
  );

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem("TODO_V1", JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setSync(true);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 3000);
  }, [sync]);

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const sincronize = () => {
    setLoading(true);
    setSync(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    itemsToLoad,
    sincronize,
  };
}

export { useLocalStorage };
