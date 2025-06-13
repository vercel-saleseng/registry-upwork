import UpworkClientTopnav from "@/components/upwork-client-topnav";

export default function StarterPage() {
  return (
    <div className="flex flex-col w-full">
      <UpworkClientTopnav />
      <main className="flex w-full justify-center">
        <div className="container">
          <div className="flex min-h-[90vh] flex-col items-center justify-center gap-4 rounded-md bg-background">
            <div className="min-w-32 text-muted-foreground">
              To get started, click the open in v0 button!
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
