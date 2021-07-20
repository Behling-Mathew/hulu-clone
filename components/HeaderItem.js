import { useRouter } from "next/router";

const HeaderItem = ({ Icon, title, toTrending }) => {
  const router = useRouter();
  return (
    <div
      onClick={toTrending ? () => router.push(`/?genre=fetchTrending`) : null}
      className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white z-50"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
