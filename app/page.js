import Logo from "@/components/logo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div className="bg-gray-800">
      <div className="flex flex-row gap-4 items-center justify-evenly mx-40 py-2">
        <Logo />
        <Nav className="flex items-baseline" />
      </div>
    </div>
  );
}
