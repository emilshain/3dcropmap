# 3D Crop Map

An interactive 3D crop and terrain visualization for the Mount Diablo area. Terraced mountain crop parcels (with NDVI, soil moisture, and acreage data) are rendered as extruded 3D prisms on top of a real 3D elevation terrain mesh, with nearby villages shown as risk-level markers.

Built with Next.js, React, MapLibre GL JS, and AWS Mapzen Terrarium elevation tiles.

## Features

- **3D terrain** — GPU-displaced elevation mesh with hillshade relief, up to 85° pitch and 8× height exaggeration
- **Crop parcels in 3D** — GeoJSON parcel boundaries extruded as prisms with floating badge pins
- **Village markers** — point markers with risk-level styling and inspection popups
- **Camera controls** — real-time tilt, rotation, and exaggeration sliders, cinematic 360° auto-orbit, and fly-to presets (Mount Diablo, Grand Canyon, Austrian Alps, Mount Rainier)
- **Basemap switcher** — Esri World Imagery (satellite), OpenStreetMap/OpenFreeMap, and Carto Voyager

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router) + Turbopack |
| UI | [React](https://react.dev/) 19, TypeScript |
| Map engine | [MapLibre GL JS](https://maplibre.org/) via [react-map-gl](https://visgl.github.io/react-map-gl/) |
| Elevation | AWS Mapzen Terrarium tiles |
| Basemaps | Esri World Imagery, OSM / OpenFreeMap, Carto Voyager |

For the full stack reference, see [STACK.md](STACK.md).

## Getting Started

### Prerequisites

- Node.js 18.18 or later

### Installation

```bash
npm install
```

The `postinstall` script copies MapLibre's web worker bundles into `public/`.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/terrain/[...slug]/route.ts   # Elevation tile proxy (adds CORS headers)
│   ├── layout.tsx                       # Root layout
│   └── page.tsx                         # Main page
├── components/
│   ├── Map3D.tsx                        # 3D map component
│   └── Map3DWrapper.tsx                 # Client-side wrapper
└── data/
    └── crops.json                       # Crop parcel GeoJSON (NDVI, moisture, acreage)
```

## Data

The crop dataset (`src/data/crops.json`) is a GeoJSON `FeatureCollection` of terraced mountain parcels along the Mount Diablo slopes. Each feature carries:

- **NDVI** vegetation index
- **Soil moisture**
- **Field acreage**
- **Prism height** used for the 3D extrusion

Village locations live in [`villages.geojson`](villages.geojson) at the repo root.

## Elevation Proxy

Mapzen Terrarium tiles are fetched through the internal route `/api/terrain/{z}/{x}/{y}.png`. The route adds `Access-Control-Allow-Origin: *` headers so WebGL can decode elevation pixels without tainting the canvas, which is what enables the 3D terrain displacement.

## License

ISC
