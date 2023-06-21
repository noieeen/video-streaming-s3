import "./App.css";
function App() {
  const api = process.env.REACT_APP_S3_BUCKET_URL;
  const key =
    "X2Download.app-[4K] 에스파(aespa) “Thirsty & Spicy(One Take ver.)” Band LIVE Concert│에스파의 매운맛 밴드라이브[it’s Live 10mins]-(1080p).mp4";
  return (
    <div className="App">
      <h2>Welcome to Noie Streaming</h2>
      <video width={700} height={400} controls>
        <source src={api + key} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
