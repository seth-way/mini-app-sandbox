import AppCard from "@/components/home/app-card";

export default function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-stone-700 to-white bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          NextJS MiniApp Sandbox
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-600 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          A place to host, demo & experiment with new tech through simple
          mini-apps.
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <AppCard
            title="ReCharts"
            description="Data visualization with the re-charts library."
            img="recharts"
            redirectPath="reCharts"
          />
          <AppCard
            title="Chess"
            description="Chess.js & react-chessboard proof of concenpt for Frien-emies app."
            img="chess"
            redirectPath="chess"
          />
        </div>
      </div>
    </>
  );
}
