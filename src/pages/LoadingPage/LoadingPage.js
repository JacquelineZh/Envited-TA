import { useNavigate } from "react-router-dom";
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
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220925%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220925T033001Z&X-Amz-Expires=86400&X-Amz-Signature=b6bab7eb8d78d0e7e1bc025c7dae90a99ce74ef05ab81587e5160c79161ae61c&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
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
