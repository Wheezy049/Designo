import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-gray-50/50">
            <div className="fixed top-0 left-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto">
                <Sidebar />
            </div>
            <div className="ml-64 flex flex-col">
                <header className="sticky top-0 z-10">
                    <Navbar />
                </header>
                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
}
