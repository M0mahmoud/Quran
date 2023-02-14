import React from "react";
import { Alert, Spinner } from "react-bootstrap";

const LoadingComponent = ({ children, loading, error }) => {
  return (
    <>
      {loading ? (
        <div className="d-flex d-flex justify-content-center mt-5 pt-5 vh-100">
          <Spinner variant="info" animation="border" />
        </div>
      ) : error ? (
        <Alert className="mt-5 pt-5 text-center" variant="danger">
          {error.message}
        </Alert>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingComponent;
