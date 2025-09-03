import "./Home.css";

function Home() {
  return (
    <>
      <div className="container mx-auto mt-4 w-4/5 h-120 bg-gradient-to-r from-gray-80 to-gray-300  p-6 shadow hover:shadow-lg transition duration-300">
        <div className="row text-center">
          <div className="col p-5  ml-4 w-100 h-90 d-flex align-items-center justify-content-center text-white rounded bg-amber-300">
            <img
              className="w-100 h-90"
              src="/image/IMG_20240919_145329_007.jpg"
              alt="Portfolio"
            />
          </div>
          <div
            
            className="col-2"
          ></div>

          <div className="col p-5  mr-4 w-100 h-90 d-flex align-items-center justify-content-center text-white rounded bg-amber-900">
            Hello
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
