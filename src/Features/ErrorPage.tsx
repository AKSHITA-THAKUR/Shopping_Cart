import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl  font-bold"> 404 - Page Not Found</h1>
      <p className="p-1"> Sorry, the page you are looking for does not exist.</p>
    </div>
  );
};

export default ErrorPage;
