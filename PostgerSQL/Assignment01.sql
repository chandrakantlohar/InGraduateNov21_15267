---------------------------------pagila----------------------------
SELECT city,country_id FROM city

SELECT  DISTINCT last_name FROM actor

SELECT  DISTINCT first_name FROM actor

SELECT  DISTINCT inventory_id FROM rental

SELECT  COUNT(*) FROM film

SELECT  COUNT(*) FROM category

SELECT  COUNT(DISTINCT first_name) FROM actor

SELECT rental_id , return_date - rental_date FROM rental

-------------------------------------usda-----------------------------------------
SELECT * FROM data_src WHERE journal='Food Chemistry'

SELECT * FROM nutr_def  WHERE nutrdesc ='Retinol'

SELECT * FROM food_des  WHERE manufacname ='Kellogg, Co.'

SELECT COUNT(*) FROM data_src WHERE year > 2000

SELECT COUNT(*) FROM food_des WHERE fat_factor < 4

SELECT COUNT(*) FROM food_des WHERE fat_factor < 5 AND pro_factor > 1.5

SELECT * FROM data_src WHERE year >= 1990 AND journal='Cereal Foods World'

SELECT COUNT(*) FROM weight WHERE gm_wgt BETWEEN 200 AND 150

SELECT * FROM nutr_def  WHERE units IN('kj','kcal')

SELECT COUNT(*) FROM food_des WHERE fdgrp_cd 
IN (SELECT fdgrp_cd FROM fd_group WHERE NOT fddrp_desc = 'Breakfast Cereals')

SELECT * FROM data_src WHERE (year BETWEEN 1990 AND 2000) AND journal 
IN ('Food Chemistry','J. Food Protection')

SELECT COUNT(*) FROM weight WHERE gm_wgt BETWEEN 50 AND 75

SELECT * FROM data_src WHERE year
IN (1960,1970,1980,1990,2000)

-------------------------------------nortwind--------------------------------------
SELECT * FROM employees

SELECT categoryname ,description FROM categories

SELECT DISTINCT region FROM suppliers

SELECT COUNT(*) FROM orders

SELECT COUNT(DISTINCT productid) FROM order_details

SELECT orderid,unitprice*quantity FROM order_details

SELECT companyname,contactname FROM customers WHERE 
country = 'Mexico'

SELECT COUNT(*) FROM orders WHERE freight >= 250

SELECT COUNT(*) FROM orders WHERE shippeddate < '1997-07-05'

SELECT DISTINCT(customerid) FROM orders WHERE
shipcountry='Brazil' AND shipvia=2

SELECT COUNT(*) FROM suppliers WHERE country='Spain' 
OR country='Germany'

SELECT COUNT(*) FROM suppliers WHERE NOT country='USA' 

SELECT COUNT(*) FROM orders
WHERE (shipcountry='Canada' OR shipcountry='Spain')
AND shippeddate > '1997-05-01'

SELECT COUNT(*) FROM orders
WHERE shippeddate BETWEEN '1996-06-01' AND '1996-09-30'

SELECT COUNT(*) FROM products 
WHERE categoryid IN (1,4,6,7)


select count(customer)
from customer group by country

select count(productname)
from product