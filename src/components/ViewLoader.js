import React, { useState, useEffect } from "react";

// import data from '../data/example1.json';
// import data from '../data/example2.json';

import PageV1 from "./v1/Page";
import PageV2 from "./v2/Page";

const PAGE_MAP = {
  v1: PageV1,
  v2: PageV2,
};

export default function ViewLoader({ file }) {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const importedData = await import(`../data/${file}`);

        setJsonData(importedData.default);
      } catch (error) {
        console.error("Error importing JSON file:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  if (!jsonData) {
    return <div>Loading ...</div>;
  }

  const PageComponent = PAGE_MAP[jsonData.version];

  return <PageComponent data={jsonData} />;
}
