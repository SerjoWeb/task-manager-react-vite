const UpdateSunscription = () => {
  return (
    <div className="bg-green p-5 flex items-center relative h-full max-h-[116px] shadow-md">
      <div className="flex items-center gap-x-4">
        <div className="h-[41px] w-[55px]">
          <img
            alt="man"
            src="/award.svg"
            height={41}
            width={55}
            loading="eager"
          />
        </div>

        <p className="text-bluse font-bold tex-xl text-shadow-md shadow-white">Go Pro Upgrade Now</p>

        <div className="h-[71px] w-[66px] bg-blue-dark text-gold flex justify-center items-center absolute top-0 right-6">
          $1
        </div>
      </div>
    </div>
  );
};

export default UpdateSunscription;
