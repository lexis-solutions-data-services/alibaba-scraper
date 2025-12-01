import { ApifyClient } from 'apify-client';

/**
 * Example: How to call the alibaba-scraper actor using Apify API Client
 *
 * For full documentation of the Apify Client for JavaScript, see: https://docs.apify.com/api/client/js
 * For full documentation of the actor, see: https://apify.com/lexis-solutions/alibaba-scraper
 *
 * Note: This example uses the Apify API Client (apify-client) to call actors from external code.
 * If you want to create Actors, use the Apify SDK (apify) instead.
 */
async function runActor() {
  // Initialize the ApifyClient with your API token
  // Get your API token from https://console.apify.com/account/integrations
  const client = new ApifyClient({
    token: process.env.APIFY_TOKEN || 'YOUR_APIFY_TOKEN',
  });

  // Start the actor run and wait for it to finish
  // The .call() method starts the actor and waits for completion automatically
  const actorId = `lexis-solutions/alibaba-scraper`;
  console.log(`Starting actor: ${actorId}`);

  const { defaultDatasetId } = await client.actor(actorId).call({
    startUrls: [
      {
        "url": "https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&categoryId=201153401&keywords=Groom+Wear&knowledgeGraphId=100010232-10000166340&viewtype=L&&pricef=80&pricet"
      }
    ],
    maxItems: 5,
    query: "Groom Wear",
    proxyConfiguration: {
      "useApifyProxy": false,
      "apifyProxyGroups": []
    },
  });

  console.log(`Actor run completed! Dataset ID: ${defaultDatasetId}`);

  // Get the results from the dataset
  const { items } = await client.dataset(defaultDatasetId).listItems();
  console.log(`Retrieved ${items.length} items from the dataset.`);
  console.log('Results:', items);
  return items;
}

// Run the example
if (require.main === module) {
  runActor()
    .then(() => {
      console.log('Example completed successfully!');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error running example:', error);
      process.exit(1);
    });
}

export { runActor };
