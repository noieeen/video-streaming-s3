import "./App.css";

import { fetchData, putData } from "./AwsFunctions";

function App() {
  const api = process.env.REACT_APP_S3_BUCKET_URL;
  const key =
    "X2Download.app-[4K] 에스파(aespa) “Thirsty & Spicy(One Take ver.)” Band LIVE Concert│에스파의 매운맛 밴드라이브[it’s Live 10mins]-(1080p).mp4";

  const fetchDataFormDynamoDb = () => {
    const ref = fetchData("users");
    console.log(ref);
  };

  const addDataToDynamoDB = async () => {
    const userData = {
      name: "Faisal",
      age: "170",
    };

    await putData("users", userData);
  };

  return (
    <div className="App">
      <h2 className="text-3xl font-bold underline">
        Welcome to Noie Streaming
      </h2>
      <div className="mt-5">
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          onChange={() => console.log("úpload")}
        />
        <hr />
        <button
          className="btn btn-primary"
          onClick={() => fetchDataFormDynamoDb()}
        >
          {" "}
          Fetch{" "}
        </button>{" "}
        <button className="btn btn-primary" onClick={() => addDataToDynamoDB()}>
          {" "}
          Push{" "}
        </button>
      </div>
      <div className="mt-10 flex w-full justify-center">
        <video width={700} height={400} controls>
          <source src={api + key} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
