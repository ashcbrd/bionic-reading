const Loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className="inline-block absolute top-0 left-0 right-0 bottom-0 m-auto h-24 w-24 animate-spin rounded-full border-[7px] border-solid border-current border-orange-500 border-r-transparent align-[-0.125em] text-warning motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loading;
