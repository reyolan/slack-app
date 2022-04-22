import { createContext, useState, useEffect } from "react";

export const MobileInterfaceContext = createContext();

function MobileInterfaceProvider({ children }) {
  const [isLeftSidebarClicked, setIsLeftSidebarClicked] = useState(false);
  const [isRightSidebarClicked, setIsRightSidebarClicked] = useState(false);

  const handleClickRightSidebar = () => {
    if (isRightSidebarClicked) {
      setIsRightSidebarClicked(false);
      return;
    }

    setIsRightSidebarClicked(true);
  };

  const handleClickLeftSidebar = () => {
    if (isLeftSidebarClicked) {
      setIsLeftSidebarClicked(false);
      return;
    }

    setIsLeftSidebarClicked(true);
  };

  useEffect(() => {
    if (isRightSidebarClicked) {
      setIsLeftSidebarClicked(false);
    }
  }, [isRightSidebarClicked]);

  useEffect(() => {
    if (isLeftSidebarClicked) {
      setIsRightSidebarClicked(false);
    }
  }, [isLeftSidebarClicked]);

  return (
    <MobileInterfaceContext.Provider
      value={{
        isLeftSidebarClicked,
        isRightSidebarClicked,
        handleClickRightSidebar,
        handleClickLeftSidebar,
      }}
    >
      {children}
    </MobileInterfaceContext.Provider>
  );
}

export default MobileInterfaceProvider;
