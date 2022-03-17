BEGIN;

DROP TABLE IF EXISTS  users,posts,comments CASCADE ;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(200) UNIQUE NOT NULL,
    email VARCHAR(200) UNIQUE,
    password VARCHAR(200) NOT NULL  
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content text NOT NULL,
    user_id  INT,
    img text,
   FOREIGN KEY (user_id) REFERENCES users(id) 
);
CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content text,
    user_id INT,
    post_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (post_id) REFERENCES posts(id)
);
COMMIT;