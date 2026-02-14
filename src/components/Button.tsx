import Link from "next/link";

const Button = ({
  path,
  name,
  status,
}: {
  path: string;
  name: string;
  status: string;
}) => {
  return (
    <div>
      <Link href={path}>
        <button
          data-text={name}
          className={`link before:link squircle before:squircle border-red relative cursor-pointer overflow-hidden rounded-[16px] border px-6 py-3 font-bold! transition-all duration-200 before:absolute before:-inset-1 before:flex before:translate-y-12 before:items-center before:justify-center before:rounded-[16px] before:transition-all before:duration-200 before:content-[attr(data-text)] hover:scale-105 hover:rounded-2xl hover:before:translate-y-0 ${
            status === "solid"
              ? `bg-red before:text-red text-white shadow-[0_4px_0_#a0b2ee,0_8px_0_#c0eaa4] before:bg-white hover:shadow-[0_0px_0_#a0b2ee,0_0px_0_#c0eaa4]`
              : `text-red before:bg-red shadow-[0_0px_0_#a0b2ee,0_0px_0_#c0eaa4] before:text-white hover:shadow-[0_4px_0_#a0b2ee,0_8px_0_#c0eaa4]`
          }`}
        >
          {name}
        </button>
      </Link>
    </div>
  );
};

export default Button;
