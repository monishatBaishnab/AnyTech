import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

const Button = ({ children }: { children: ReactNode | string }) => {
  return (
    <button className="group flex cursor-pointer items-center gap-2 text-white text-lg font-semibold rounded bg-[#FE8B53] hover:bg-[#fe7553] pl-10 pr-14 py-[13px] relative transition-all drop-shadow-[2px_5px_3px_rgba(16,_62,_117,_.37)]">
      {children}
      <div className="absolute right-8 top-0 bottom-0 flex items-center group-hover:right-7 transition-all">
        <ChevronRight className="size-5" />
      </div>
    </button>
  );
};

export default Button;
