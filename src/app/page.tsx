import VideoInputCard from "@/components/upload/VideoInputCard";

export default function Home() {
  return (
    <main className="flex h-[100dvh] flex-col items-start p-24 gap-[5rem]">
      <h1 className=" text-2xl font-bold">
        Playground For Developing Gallery in PWA
      </h1>
      <VideoInputCard />
    </main>
  );
}
