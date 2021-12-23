# E-Commerce Ratings & Reviews Service
Part of a team tasked with building scalable microservices that replaced the legacy monolithic API for an e-commerce platform to handle the increase in growing traffic. This is for the reviews section of the API and was stress tested using only EC2 t2.micro instances.

## Build with
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

## Project Accomplishments
- Seeded a PostgreSQL database with over 7 million records
- Optimized raw SQL query execution times to average < 1ms per query using indexes, joins and PostgreSQL JSON functions
- Locally optimized to 1000 requests per second with <20 ms latency
- Improved throughput to 10,000 requests per second with <50 ms latency and 0% error rate when deployed and horizontally scaled
- Used total of five EC2 t2.micro instances:
  - One instance hosting Postgres database
  - One instance running NGINX with least connections load balancing and caching enabled.
  - Three instances running the node server with the API

## PostgresSQL 
import data, order maters

```sh
COPY "Products" (id, name, slogan, description, category, default_price) FROM 'filepath/product.csv' WITH (delimiter ',' csv header);

COPY "Styles" (id, "productId", name, sale_price, original_price, default_style) FROM 'filepath/styles.csv' WITH (delimiter ',' csv header null 'null');

COPY "Relateds" (id, current_product_id, related_product_id) FROM 'filepath/related.csv' WITH (delimiter ',' csv header);

COPY "Features" (id, product_id, feature, value) FROM 'filepath/features.csv' WITH (delimiter ',' csv header null 'null');

COPY "Skus" (id, "styleId", size, quantity) FROM 'filepath/skus.csv' WITH (delimiter ',' csv header null 'null');

COPY "Photos" (id, "styleId", url, thumbnail_url) FROM 'filepath/photos.csv' WITH (delimiter ',' csv header null 'null');
```



