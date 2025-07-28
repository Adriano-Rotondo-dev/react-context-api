export default function Loading() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center spin">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
}
