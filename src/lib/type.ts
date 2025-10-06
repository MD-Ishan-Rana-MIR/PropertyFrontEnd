export interface TabData {
  key: "property_type" | "contract_type" | "by_location";
  label: string;
}

export interface TabContent {
  key: TabData["key"];
  content: React.ReactNode; // Content component for the tab
}
