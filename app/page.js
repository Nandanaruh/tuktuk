import Logo from "@/components/logo";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row items-center justify-items-center-safe mx-48 py-2">
        <Logo />
        <Nav />
      </div>
    </div>
  );
}
