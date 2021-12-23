![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)


# products-api
Products API rebuild


# PostgresSQL 
import data, order maters

```sh
COPY "Products" (id, name, slogan, description, category, default_price) FROM 'filepath/product.csv' WITH (delimiter ',' csv header);
```

```sh
COPY "Styles" (id, "productId", name, sale_price, original_price, default_style) FROM 'filepath/styles.csv' WITH (delimiter ',' csv header null 'null');
```

```sh
COPY "Relateds" (id, current_product_id, related_product_id) FROM 'filepath/related.csv' WITH (delimiter ',' csv header);
```

```sh
COPY "Features" (id, product_id, feature, value) FROM 'filepath/features.csv' WITH (delimiter ',' csv header null 'null');
```

```sh
COPY "Skus" (id, "styleId", size, quantity) FROM 'filepath/skus.csv' WITH (delimiter ',' csv header null 'null');
```

```sh
COPY "Photos" (id, "styleId", url, thumbnail_url) FROM 'filepath/photos.csv' WITH (delimiter ',' csv header null 'null');
```


