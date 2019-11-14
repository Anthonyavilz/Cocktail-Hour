CREATE TABLE Cocktail_Us (
	user_id SERIAL PRIMARY KEY,
	first_name VARCHAR(75) NOT NULL,
	last_name VARCHAR(75) NOT NULL,
	username VARCHAR(75) NOT NULL,
	email TEXT NOT NULL,
	phone_number VARCHAR(15) NOT NULL,
	password TEXT
)

CREATE TABLE Bar (
	bar_id SERIAL PRIMARY KEY,
	user_id INT,
	bar_name VARCHAR(75),
	bar_street VARCHAR(75),
	bar_city VARCHAR(75),
	bar_state VARCHAR(2),
	bar_zipcode VARCHAR(5),
	bar_img TEXT,
	FOREIGN KEY (user_id) REFERENCES cocktail_us(user_id)
)

CREATE TABLE Drink (
	drink_id SERIAL PRIMARY KEY,
	bar_id INT,
	drink_name VARCHAR(75) NOT NULL,
	drink_img TEXT,
	FOREIGN KEY (bar_id) REFERENCES bar(bar_id)
)

CREATE TABLE shopping_list (
	list_id SERIAL PRIMARY KEY,
	drink_id INT,
	FOREIGN KEY (drink_id) REFERENCES drink(drink_id)
)