import React from "react";

const PageTitle = ({ children }) => {
  return (
    <div className="pb-5 md:pb-10 sm:px-10 md:px-20">
      <p className="text-2xl font-bold text-center mb-2 capitalize p-2 bg-gradient-to-r rounded from-yellow-500 dark:from-red-500">
        {children}
      </p>
    </div>
  );
};

export default PageTitle;
