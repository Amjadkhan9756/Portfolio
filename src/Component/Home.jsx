import "./Home.css";

function Home() {
  return (
    <>
      <div className="container mt-4 w-90 h-90 bg-gradient-to-r from-gray-400 to-gray-500 shadow-md">
        <div className="row text-center">
          <div className="col  mt-5 ml-4 w-80 h-70 d-flex align-items-center justify-content-center text-white rounded">
            <img className="w-40 h-40" src="/image/IMG_20240919_145329_007.jpg" alt="Portfolio" />
          </div>
          <div className="col"></div>
          <div className="col  mt-5 mr-4 w-80 h-70 d-flex align-items-center justify-content-center text-white rounded">
            Hello
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
