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
INSERT INTO users (username,email,password) VALUES 
('farah','farah@gmail.com','mDmQQ7.mDCCESARTqPu1cDNSbgq'),
('sara','sara@gmail.com','mDmQQ7.mDCCESARTqPu1cDNSbgq'),
('aya','aya@gmail.com','mDmQQ7.mDCCESARTqPu1cDNSbgq');
INSERT INTO posts (title ,content,user_id) VALUES
('my first post','hello from testing',1),
('my secand post','hello from testing',1),
('my first post','hello from testing',2);
INSERT INTO comments(content,  user_id , post_id)VALUES 
('my first comment',1,2),
('my secand comment',1,2),
('my first comment',2,2),
('my first comment',1,1);


COMMIT;