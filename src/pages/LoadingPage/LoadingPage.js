import { useNavigate } from "react-router-dom";
import './LoadingPage.scss'
export default function LoadingPage() {
  const navigate = useNavigate();

  return (
    <div className="LoadingPageContainer">
      <h1 className="title">Imagine if</h1>
      <p className="appName">Snapchat </p>
      <h1 className="title">had events</h1>
      <h2 className="subtitle">
        Easily host and share events with your friends across any social media.
      </h2>
      <img
        className="exampleImg"
        alt="loading page"
        src="https://www.envited.io/_ipx/w_1080,q_75/%2FLanding%2Flanding.webp?url=%2FLanding%2Flanding.webp&w=1080&q=75"
      />
      <button
        className="createBtn"
        type="submit"
        onClick={() => navigate("/create")}
      >
        🎉 Create my event
      </button>
    </div>
  );
}
