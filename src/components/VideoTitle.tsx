interface VideoTitleProps {
  title: string;
  overview: string;
}
const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-26 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-4/12">{overview}</p>
      <div>
        <button className="bg-white cursor-pointer text-black text-xl  rounded-md p-4 px-12 hover:opacity-80">
          ▷ Play
        </button>
        <button className="mx-2 bg-gray-500 cursor-pointer text-white text-xl rounded-md p-4 px-12 hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
