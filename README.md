# products-api
Products API rebuild


# PostgresSQL 
import data

```sh
COPY "Products" (id, name, slogan, description, category, default_price) FROM 'filepath/product.csv' WITH (delimiter ',' csv header);
```
```sh
COPY "Styles" (id, "productId", name, sale_price, original_price, default_style) FROM 'filepath/styles.csv' WITH (delimiter ',' csv header null 'null');
```



