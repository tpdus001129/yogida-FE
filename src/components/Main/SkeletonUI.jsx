export default function SkeletonUI() {
  const skeletonData = new Array(4).fill(0).map((_, index) => (
    <div key={index} className="gap-[16px] items-center w-full">
      <div className="w-[327px] h-[303px] rounded-[10px] mb-[14px] bg-gray-300"></div>
      <div className="w-[327px] h-[20px] mb-[10px] bg-gray-300"></div>
      <div className="w-[150px] h-[24px] mb-[10px] bg-gray-300"></div>
      <div className="w-[200px] h-[24px] mb-[10px] bg-gray-300"></div>
      <div className="w-[327px] h-[20px] mb-[25px] bg-gray-300"></div>
    </div>
  ));

  return <>{skeletonData}</>;
}
