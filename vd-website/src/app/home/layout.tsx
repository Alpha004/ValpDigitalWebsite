

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="bg-slate-700 overflow-y-scroll w-screen h-screen antialiased text-slate-200 selection:bg-blue-600">
        <div>{children}</div>
      </div>
    );
  }