import painting from "../assets/models/Painting.glb";
import iospainting from "../assets/models/Painting.usdz";

import OfficeChair from "../assets/models/OfficeChair.glb";
import OfficeChairUsdz from "../assets/models/OfficeChair.usdz";
import pot from "../assets/models/pot.glb";
import potUsdz from "../assets/models/pot.usdz";

// Import new models
import outdoorChairs from "../assets/models/Outdoor-Chairs.glb";
import outdoorChairsUsdz from "../assets/models/Outdoor-Chairs.usdz";

// Import Earth model
import Earth from "../assets/models/Earth.glb";
import EarthUsdz from "../assets/models/Earth.usdz";

const productItems = [
  {
    id: 2,
    name: "Office Chair",
    modelSrc: OfficeChair,
    iOSSrc: OfficeChairUsdz,
    category: "Furniture",
    color: "black",
    price: 12000,
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  {
    id: 3,
    name: "Plant Pot",
    modelSrc: pot,
    iOSSrc: potUsdz,
    category: "Environment",
    color: "Red",
    price: 2500,
    annotations: [
      {
        title: "pot-structure",
        slot: "hotspot-1",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }
    ]
  },
  {
    id: 4,
    name: "Painting",
    modelSrc: painting,
    iOSSrc: iospainting,
    category: "Art",
    color: "Brown",
    price: 8500,
    annotations: [
      {
        title: "wooden-frame",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "pure-canvas",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  // Add new model: Outdoor Chairs
  {
    id: 5,
    name: "Outdoor Chairs",
    modelSrc: outdoorChairs,
    iOSSrc: outdoorChairsUsdz,
    category: "Outdoor",
    color: "White",
    price: 15000,
    annotations: [
      {
        title: "weather-resistant",
        slot: "hotspot-1",
        position: "0.015m 0.4m -0.12m",
        normal: "0.03m 0.21m 0.97m",
        orbit: "15deg 110deg 0.04m",
        target: "-0.10m 0.02m 0.10m"
      }, 
      {
        title: "comfortable-cushion",
        slot: "hotspot-2",
        position: "0.01m 0.25m 0.15m",
        normal: "-0.31m 0.95m -0.005m",
        orbit: "12deg 115deg 0.035m",
        target: "-0.10m 0.02m 0.10m"
      },
    ]
  },
  // Add Earth model
  {
    id: 6,
    name: "Earth Globe",
    modelSrc: Earth,
    iOSSrc: EarthUsdz,
    category: "Education",
    color: "Blue",
    price: 5000,
    annotations: [
      {
        title: "continents",
        slot: "hotspot-1",
        position: "0m 0m 0.5m",
        normal: "0m 0m 1m",
        orbit: "0deg 90deg 2m",
        target: "0m 0m 0m"
      },
      {
        title: "oceans",
        slot: "hotspot-2",
        position: "-0.4m 0m -0.3m",
        normal: "-0.8m 0m -0.6m",
        orbit: "0deg 180deg 2m",
        target: "0m 0m 0m"
      }
    ]
  }
];

export default productItems;
