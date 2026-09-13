import 'maplibre-gl/dist/maplibre-gl.css';

export const metadata = {
  title: '3D Crop Map',
  description: 'MapLibre 3D Map',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning style={{ width: '100%', height: '100%', margin: 0, padding: 0 }}>
      <body suppressHydrationWarning style={{ width: '100%', height: '100%', margin: 0, padding: 0, overflow: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
