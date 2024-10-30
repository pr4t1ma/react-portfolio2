const Intro = () => {
  return (
    <div className="flex  gap-10 my-20 container mx-auto">
      <div>
        <img
          className="w-1/2"
          src="https://img.freepik.com/free-vector/woman-seated-using-laptop_24908-81671.jpg?t=st=1718116457~exp=1718120057~hmac=606432dcce93268bf4a3611c5e6cbd61bb77bf7f57ac58fd5cd8e5b1782c0266&w=1060"
          alt=""
        />
      </div>

      <div className="text-left">
        <h1 className="mb-5">Hi, I'm Jane Doe!</h1>
        <p className="text-xl ">
          I am a full stack developer with 2 years of experence in both
          application and presentation layers. I have worked on application.
        </p>
      </div>
    </div>
  );
};
export default Intro;
