import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50">
      <h1 className="text-3xl font-bold">Hello, AI Sprint!</h1>
      <Button>Click Me</Button>
    </main>
  );
}
