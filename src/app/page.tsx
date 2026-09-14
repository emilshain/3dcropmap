import fs from 'fs';
import path from 'path';
import Map3DWrapper from '../components/Map3DWrapper';

export default function Home() {
  const filePath = path.join(process.cwd(), 'villages.geojson');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const villageData = JSON.parse(fileContents);

  return (
    <main style={{ position: 'relative', width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#020617' }}>
      <Map3DWrapper 
        initialCenter={[-121.865, 37.855]} // Mount Diablo Terraced Crop Parcels
        initialZoom={13}
        initialPitch={70}
        initialBearing={-45}
        villageData={villageData}
      />
    </main>
  );
}
