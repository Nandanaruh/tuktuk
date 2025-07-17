"use client";

export default function TuktukVideo() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-[177.78vh] h-screen sm:w-screen sm:h-[56.25vw]">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube-nocookie.com/embed/8PBn5dIqsog?autoplay=1&mute=1&loop=1&playlist=8PBn5dIqsog&controls=0&rel=0&playsinline=1&cc_load_policy=0&enablejsapi=1&origin=https%3A%2F%2Ftuktukrental.com&widgetid=1&forigin=https%3A%2F%2Ftuktukrental.com%2F&aoriginsup=1&vf=1`}
          title="Explore Sri Lanka by tuktuk!"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
