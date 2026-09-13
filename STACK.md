# 3D Crop Map - Tech Stack

This document tracks the core technologies, libraries, data sources, and architecture used in the `3dcropmap` project.

---

## 📂 Project Data Files
* **Mock Crop GeoJSON Dataset:** [`src/data/crops.json`](file:///c:/Users/EmilShain/Code/3dcropmap/src/data/crops.json)
  * **Format:** **GeoJSON** (`FeatureCollection` RFC 7946) — spatial vector boundaries.
  * **Location:** `src/data/crops.json`
  * **Features:** Terraced mountain parcels situated along Mount Diablo slopes with NDVI vegetation index, soil moisture, field acreage, and 3D prism heights.

---

## 🛠 Core Framework & Architecture
* **[Next.js](https://nextjs.org/)** (v15/16 App Router) - Frontend application framework with Turbopack bundler.
* **Internal Elevation Proxy Route:** [`/api/terrain/[...slug]`](file:///c:/Users/EmilShain/Code/3dcropmap/src/app/api/terrain/[...slug]/route.ts)
  * Proxies AWS Mapzen Terrarium elevation tiles with guaranteed `Access-Control-Allow-Origin: *` headers, enabling full un-tainted WebGL pixel decoding for the 3D terrain mesh.
* **[React](https://react.dev/)** (v19) - UI and State management.
* **[TypeScript](https://www.typescriptlang.org/)** - Static type system.

---

## 🌍 3D Map Engine & Visualizations
* **[MapLibre GL JS](https://maplibre.org/maplibre-gl-js/docs/)** (`maplibre-gl`) - WebGL-based 3D digital elevation model (DEM) and vector rendering engine.
* **3D Terrain Navigation:**
  * **3D Terrain Elevation:** Built directly into the style specification via `/api/terrain/{z}/{x}/{y}.png` with GPU depth buffering and elevation displacement.
  * **Hillshade Relief Layer (`hillshade`):** Dynamic sun-angle hillshading (315° illumination) casting real-time mountain shadow relief and highlights across peaks and canyons.
  * **Max Pitch:** 85° (dramatic ground/horizon perspective).
  * **Interactive Sliders:** Real-time **Tilt / Pitch** (0° to 85°), **Rotation / Bearing** (-180° to 180°), and **3D Mountain Height Exaggeration** (1.0x to 8.0x).
  * **3D Mountain Mesh Showcase:** Fast fly-to presets for Mount Diablo, Grand Canyon, Austrian Alps, and Mount Rainier.
  * **Cinematic 360° Auto-Orbit:** Smooth `requestAnimationFrame` continuous rotation.
* **Tri-Layer Parcel Visualization:**
  * 🏷️ **Floating Badge Pins:** Floating labels directly pinned above parcels.
  * 🎨 **2D Ground Fill:** Solid boundary fills on terrain.
  * 🏢 **3D Fill Extrusions (`fill-extrusion`):** 3D volume blocks elevated across mountain slopes.

---

## 📡 Tile & Elevation Services
* **3D Elevation / Terrain:** **[AWS Mapzen Terrarium](https://registry.opendata.aws/terrain-tiles/)** (Served via `/api/terrain/{z}/{x}/{y}.png`)
* **Basemap Providers:**
  * 🛰️ **Satellite Imagery:** Esri World Imagery (High-res aerial)
  * 🗺️ **OpenStreetMap / OpenFreeMap:** Standard Cartography Tiles
  * 🏙️ **Carto Voyager:** High-contrast light map tiles

---
*This file is continuously updated as new datasets, features, or dependencies are added to the project.*
