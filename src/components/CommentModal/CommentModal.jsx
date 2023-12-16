import Background from './Background';
import Comment from './Comment';
import Input from './Input';

export default function CommentModal() {
  const reply = true;

  return (
    <section className="w-full h-screen flex flex-col">
      <Background />
      <div className="w-full h-[80vh] bg-[#ffffff] absolute bottom-0 rounded-t-[20px] z-[10] ">
        <div className="flex justify-center">
          <div className="w-1/6 h-[4px] bg-[#D9D9D9] rounded-[8px] mt-[16px]"></div>
        </div>
        <hr className="border-[#D9D9D9] mt-[64px] mb-[18px]" />
        <Comment />
        <Comment reply={reply} />
        <Input className={'absolute bottom-[28px] w-full'} />
      </div>
    </section>
  );
}
