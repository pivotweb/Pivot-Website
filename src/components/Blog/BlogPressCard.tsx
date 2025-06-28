// BlogPressCard.tsx
import "./Press.css";

export interface IBlogPressCard {
    title: string;
    src: string;
    type: string;
}
export const BlogPressCard = ({ title, src, type }: IBlogPressCard) => (
    <div className={`hero-bg text-white ${type === "video" ? "show-video" : "show-image"}`}>
    {type === "video" ? (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="background-video"
      >
        <source src={src} type="video/mp4" />
      </video>
    ) : (
      <img
        src={src}
        alt=""
        className="background-image"
      />
    )}

    <div className="gradient-overlay"></div>
    <h2 className="text-xl md:text-2xl font-bold relative z-10">{title}</h2>

  </div>
);