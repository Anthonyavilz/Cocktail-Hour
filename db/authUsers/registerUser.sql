INSERT INTO cocktail_us (first_name, last_name, username, email, phone_number, password)
VALUES (
    $1, $2, $3, $4, $5, $6
)
RETURNING *