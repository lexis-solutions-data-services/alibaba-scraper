![alibaba](https://onstock-net.fra1.cdn.digitaloceanspaces.com/apify/alibaba.png)

## Introduction

## 📊 Actor Stats

| Stat | Value |
|------|-------|
| **Version** | `0.0.15` |
| **Last Update** | Dec 1, 2025 |

---



## 💻 Integration Examples

This repository includes example code showing how to integrate the `alibaba-scraper` actor into your projects.

You can find example implementations in the [`examples/`](./examples) folder:
- **TypeScript/JavaScript**: See [`examples/typescript/`](./examples/typescript) for a complete TypeScript example
- **Python**: See [`examples/python/`](./examples/python) for a complete Python example

Each example includes:
- Ready-to-use code templates
- Setup instructions
- Documentation links

---



The Alibaba.com Apify Scraper is a robust web scraping tool developed to extract data from the popular B2B e-commerce platform, Alibaba.com. This scraper enables users to collect various product-related information, such as product names, prices, descriptions, images, and more.

<p align="center">
  <img src="https://apify-image-uploads-prod.s3.amazonaws.com/5bWFgJNW09lFlCPU2/Yysh7A3JMR8Yjt77z-4AXfLwia_400x400_2.png" alt="Alibaba Scraper" style="height: 60px; margin-right: 15px;" /><a href="https://apify.com/lexis-solutions/alibaba-scraper" target="_blank">
    <img src="https://img.shields.io/badge/Try%20it%20on-Apify-0066FF?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDA4IiBoZWlnaHQ9IjQwOCIgdmlld0JveD0iMCAwIDQwOCA0MDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8zNDFfNDE1NykiPgo8cGF0aCBkPSJNMjE4LjY5NSAxMDRIMzAwLjk3QzMwMi42NDMgMTA0IDMwNCAxMDUuMzU3IDMwNCAxMDcuMDNWMjMyLjc2NkMzMDQgMjM1Ljc3OCAzMDAuMDgzIDIzNi45NDUgMjk4LjQzNCAyMzQuNDI1TDIxNi4xNTkgMTA4LjY5QzIxNC44NDEgMTA2LjY3NCAyMTYuMjg3IDEwNCAyMTguNjk1IDEwNFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xODkuMzA1IDEwNEgxMDcuMDNDMTA1LjM1NyAxMDQgMTA0IDEwNS4zNTcgMTA0IDEwNy4wM1YyMzIuNzY2QzEwNCAyMzUuNzc4IDEwNy45MTcgMjM2Ljk0NSAxMDkuNTY2IDIzNC40MjVMMTkxLjg0IDEwOC42OUMxOTMuMTU5IDEwNi42NzQgMTkxLjcxMyAxMDQgMTg5LjMwNSAxMDRaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMjAyLjU5MSAyMDQuNjY4TDEwOS4xMjcgMjk4LjgzNUMxMDcuMjI5IDMwMC43NDcgMTA4LjU4MyAzMDQgMTExLjI3OCAzMDRIMjk2LjhDMjk5LjQ4MyAzMDQgMzAwLjg0MiAzMDAuNzcgMjk4Ljk2NyAyOTguODUyTDIwNi45MDggMjA0LjY4NUMyMDUuNzI2IDIwMy40NzUgMjAzLjc4MiAyMDMuNDY4IDIwMi41OTEgMjA0LjY2OFoiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMzQxXzQxNTciPgo8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNCAxMDQpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==&logoColor=white" alt="Try it on Apify" style="border-radius: 12px; height: 60px;" />
  </a>
</p>


Alibaba.com is one of the leading B2B platforms globally, offering a wide range of products, including electronics, fashion, home appliances, and more. The Alibaba.com Apify Scraper helps users gather valuable data from this platform, which can be used for various purposes like market research, price monitoring, and competitor analysis. This scraper is built using Apify, a popular web scraping and automation platform, which ensures a seamless and efficient data extraction process.

## Use Cases for the Alibaba Apify Scraper

Alibaba Apify Scraper can be utilized in various scenarios to enhance your business needs. Below are some possible use cases:

- **Market Research**: Collect product details, pricing, customer reviews, and more from Alibaba to understand market trends and get insights for strategic decision-making.
- **Competitor Analysis**: Monitor and analyze competitor products, prices, and ratings to stay ahead and maintain a competitive edge.
- **Product Catalogue**: Update your product catalogue or online store by automatically fetching new and popular products from Alibaba to boost sales and engagement.
- **Inventory Management**: Track stock availability and prices to efficiently manage and maintain a healthy inventory without running out of popular items or overstocking.
- **Lead Generation**: Identify potential suppliers and partners by gathering valuable leads from Alibaba, including contact information and company details.
- **Price Monitoring**: Track price changes for the desired products, receive notifications, and adjust your pricing strategy accordingly to stay competitive.

Happy scraping!

## Input 📥

The table below outlines the required and optional input fields for the actor:

| Field                  | Type    | Required | Description                                   |
| ---------------------- | ------- | -------- | --------------------------------------------- |
| **startUrls**          | array   | Yes      | Search or product URLs to scrape              |
| **maxItems**           | integer | No       | The number of items to be scraped (if search) |
| **proxyConfiguration** | object  | No       | Your proxy configuration from Apify           |

## How to get startUrls?

1. A single product

   Open the product on [Alibaba](https://www.alibaba.com) and copy its link from the browser URL bar.

2. Search

   2.1. Open the [Alibaba](hhttps://www.alibaba.com) website.

   2.2. Navigate to a category or search that you are interested in.

   2.3. Once in the search page, add all needed filters on the page. This will change the URL in the browser search bar. Once ready, copy the URL and paste to Apify as an item in the `startUrls` array.

   2.4 Alternatively, you can use the input query to perform a search. However, if both `startUrls` and `query` are provided, only `startUrls` will be used.

   **Note:** All filtering parameters in the `startUrls` will be removed (except for certain parameters such as keywords, pagination, and country). This is due to Alibaba security measures and to ensure the smooth execution of the scraping process. Additionally, because Alibaba applies some filtering through JavaScript, the URL you provide may not retain all the intended filters, and the results may therefore differ from what you see when browsing manually.

### Examples

A single product:

```
https://www.alibaba.com/product-detail/New-Ergonomic-360-Rotatable-Height-Adjustable_1600813119641.html?s=p
```

A search page ( desktops over 5000$)

```
https://www.alibaba.com/trade/search?fsb=y&IndexArea=product_en&categoryId=701&keywords=Desktops&viewtype=L&&pricef=5000&pricet
```

## Output 📤

<a name="output"></a>

There are 3 supported pricing models:

1. **Single price** - The price is always the same, no matter the quantity. The output will contain the `price` field with the price value.

```json
{
  "name": "Wheel Bearing Front / Rear Wheel For Austin Maestro (1983-1990) 8944646380 38kwd02 4t-cr1-0868 Vkba1452 Auto Bearings Kit - Buy Auto Bearing,Wheel Bearing,Wheel Hub Bearing Kit Product on Alibaba.com",
  "sku": "1600126367334",
  "labels": ["Ready to Ship", "In Stock", "In Stock"],
  "priceString": "3.99",
  "price": 3.99,
  "brand": "Ali",
	"supplierUrl": "https://tpsaade.en.alibaba.com/company_profile.html",
	"supplierWebsite": "https://tpsaade.en.alibaba.com/",
  "link": "https://www.alibaba.com/product-detail/Wheel-bearing-front-rear-wheel-for_1600126367334.html",
  "description": "Wheel Bearing Front / Rear Wheel For Austin Maestro (1983-1990) 8944646380 38kwd02 4t-cr1-0868 Vkba1452 Auto Bearings Kit , Find Complete Details about Wheel Bearing Front / Rear Wheel For Austin Maestro (1983-1990) 8944646380 38kwd02 4t-cr1-0868 Vkba1452 Auto Bearings Kit,Auto Bearing,Wheel Bearing,Wheel Hub Bearing Kit from Liaocheng Junyi Auto Parts Co., Ltd. Supplier or Manufacturer on Alibaba.com",
  "image": "https://sc04.alicdn.com/kf/H400efc5a920b4fae91c15696b675860cu.jpg",
  "reviewRatingValue": "5.0",
  "additionalPhotosArray": [
    "https://s.alicdn.com/@sc02/kf/He69ca137128747a8ab8132fe32748bc1B.jpg_100x100xz.jpg",
    "https://s.alicdn.com/@sc04/kf/H400efc5a920b4fae91c15696b675860cu.jpg_100x100xz.jpg",
    "https://s.alicdn.com/@sc04/kf/H760692567d144dc89ae7b2dfdb9da0a7G.jpg_100x100xz.jpg",
    "https://s.alicdn.com/@sc04/kf/Haebcd9afddf74f1c90a01c73a2abdcd7G.jpg_100x100xz.jpg",
    "https://s.alicdn.com/@sc04/kf/H97b404b30a234912aa5bba7c8313227fI.jpg_100x100xz.jpg",
    "https://s.alicdn.com/@sc04/kf/H64dc9c4f58c04589b17f5e251e3105e3L.jpg_100x100xz.jpg",
    "https://s.alicdn.com/@sc04/kf/Hf609d4e05211498db29d737cbbc61378L.jpg_100x100xz.jpg"
  ]
}
```

2. **Unit pricing**- If the price changes depending on the quantity bought, you get the details in the `unitPricing` field.

```
{
  ...
  "unitPricing": [
		{
			"minUnits": 1,
			"maxUnits": 99,
			"priceString": "4.99",
			"price": 4.99
		},
		{
			"minUnits": 100,
			"maxUnits": 499,
			"priceString": "4.59",
			"price": 4.59
		},
		{
			"minUnits": 500,
			"maxUnits": 999,
			"priceString": "4.29",
			"price": 4.29
		},
		{
			"minUnits": 1000,
			"priceString": "3.99",
			"price": 3.99
		}
	]
}
```

3. **Price range** - If the price is not fixed, you get the price range in the `priceRange` field.

```
{
  ...
 "princeRange": {
		"rangeMinString": "$2.00",
		"rangeMin": 2,
		"rangeMaxString": "$4.00",
		"rangeMax": 4,
		"minOrderString": "2",
		"minOrder": 2
	}
}
```

All price data you get both as a string and a parsed number.

## Need to scrape more products?

👉 Scrape Michaels.com with [Michaels.com Scraper](https://apify.com/lexis-solutions/michaels-scraper)

👉 Scrape BizBuySell with [BizBuySell Scraper](https://apify.com/lexis-solutions/bizubuysell)

## FAQ

**Q: How do I set up the Alibaba.com Apify Scraper?**

A: To set up the scraper, you'll need an Apify account. Once you have an account, you can access the scraper through the Apify Console, input the required parameters, and start the scraping process.

**Q: How fast is the data extraction process?**

A: The speed of data extraction depends on various factors such as the number of products, server response time, and the complexity of the data. The scraper is designed to be efficient and fast, but the actual extraction speed may vary.

**Q: How can I export the extracted data?**

A: The Alibaba.com Apify Scraper allows you to export the extracted data in various formats like JSON, CSV, or Excel. You can download the data directly from the Apify Console or use the Apify API to integrate it into your applications.

## Need more data fields?

If you need more data fields, please [contact us](https://apify.com/lexis-solutions) and we will add them for you.
