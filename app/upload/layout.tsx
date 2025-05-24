// portal/app/upload/layout.tsx
export default function UploadLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="p-4">{children}</main>
    </div>
  );
}
