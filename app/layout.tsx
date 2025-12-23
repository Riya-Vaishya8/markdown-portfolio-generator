import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white transition-colors">
      {children}
      <footer className="mt-10 py-4 text-center text-sm border-t border-gray-300 dark:border-gray-700">
        © 2025 • Built with ❤️ by Riya Vaishya
      </footer>
        </body>
    </html>
  );
}


