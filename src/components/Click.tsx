import Link from "next/link";

const Click = ({ path, name }: { path: string; name: string }) => {
  return (
    <Link href={path} className="group">
      <div
        data-text={name}
        className="link before:link squircle before:squircle before:bg-red relative overflow-hidden rounded-[8px] p-2 text-black transition-all duration-200 before:absolute before:-inset-1 before:flex before:translate-y-12 before:items-center before:justify-center before:rounded-[8px] before:text-white before:transition-all before:duration-200 before:content-[attr(data-text)] hover:text-transparent hover:before:translate-y-0"
      >
        {name}
      </div>
    </Link>
  );
};

export default Click;
