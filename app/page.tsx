import Header from "@/components/Header";
import MarkdownEditor from "@/components/MarkdownEditor";

export default function Home() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <MarkdownEditor />
        </div>
      </main>
    </>
  );
}
