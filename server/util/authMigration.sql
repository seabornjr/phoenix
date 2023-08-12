DROP TABLE IF EXISTS users;
CREATE TABLE users (
    userID INTEGER PRIMARY KEY AUTOINCREMENT,
    user_first VARCHAR(50),
    user_last VARCHAR(50),
    user_email VARCHAR(200),
    user_password BINARY(64)
)