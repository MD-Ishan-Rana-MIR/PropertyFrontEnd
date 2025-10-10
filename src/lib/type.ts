export interface TabData {
  key: "property_type" | "contract_type" | "by_location";
  label: string;
}

export interface TabContent {
  key: TabData["key"];
  content: React.ReactNode; // Content component for the tab
}

export interface FeatureProperties {
  sale_price?: number | string;
  [key: string]: any;
}

export interface FeatureType {
  geometry: {
    coordinates: [number, number];
  };
  properties: FeatureProperties;
}
