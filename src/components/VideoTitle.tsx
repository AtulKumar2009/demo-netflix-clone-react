interface VideoTitleProps {
  title: string;
  overview: string;
}
const VideoTitle = ({ title, overview }: VideoTitleProps) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-26 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">{title}</h1>
      <p className="hidden lg:inline-block py-6 text-md w-4/12">
        {overview.slice(0, 116)}
      </p>
      <div className="my-4  md:my-0 md:mt-6">
        <button className="bg-white cursor-pointer text-black text-xl  rounded-md py-2 lg:py-4 px-4 lg:px-12 hover:opacity-80">
          ▷ Play
        </button>
        <button className="hidden lg:inline-block mx-2 bg-gray-500 cursor-pointer text-white text-xl rounded-md p-4 px-12 hover:opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
