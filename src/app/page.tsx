import fs from 'fs';
import path from 'path';
import Map3DWrapper from '../components/Map3DWrapper';

export default function Home() {
  const filePath = path.join(process.cwd(), 'villages.geojson');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const villageData = JSON.parse(fileContents);

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
      <Map3DWrapper 
        initialCenter={[-122.4194, 37.7749]} // San Francisco
        initialZoom={12}
        initialPitch={60}
        villageData={villageData}
      />
    </main>
  );
}
