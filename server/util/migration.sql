DROP DATABASE IF EXISTS phoenix;
CREATE DATABASE phoenix;

-- CREATE TABLE learner to track learner data--
DROP TABLE IF EXISTS learner;
CREATE TABLE learner
(
    learner_id SERIAL PRIMARY KEY,
    learner_email VARCHAR(100),
    learner_password CHAR(60),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gender VARCHAR(25),
    date_of_birth DATE,
    city VARCHAR(100),
    grade INTEGER,
    school TEXT,
    first_gen BOOLEAN,
    is_hispanic BOOLEAN,
    racial_id VARCHAR(100),
    income VARCHAR(30),
    knows_profession BOOLEAN,
    profession VARCHAR(100),
    company VARCHAR(100),
    knows_field BOOLEAN
);

--Create a table called interests to log the student's interests--
DROP TABLE IF EXISTS interests;
CREATE TABLE interests
(
    interest_id SERIAL PRIMARY KEY,
    learner_id INTEGER REFERENCES learner (learner_id),
    interest_title VARCHAR(100)
);

--create table to track learner's perferred field's of study--
DROP TABLE IF EXISTS field_study;
CREATE TABLE field_study
(
    field_study_id SERIAL PRIMARY KEY,
    field_title VARCHAR(100),
    learner_id INTEGER REFERENCES learner (learner_id)
);

--creates a table to store university data--
DROP TABLE IF EXISTS universities;
CREATE TABLE universities
(
    university_id SERIAL PRIMARY KEY,
    university_name VARCHAR(255),
    undergrad_volume VARCHAR(255),
    grad_volume VARCHAR(255)
);

--create a table to store account info for admissions officers--
DROP TABLE IF EXISTS admissions_account;
CREATE TABLE admissions_account
(
    admissions_id SERIAL PRIMARY KEY,
    admissions_password CHAR(60),
    admissions_email VARCHAR(255),
    admissions_first VARCHAR(100),
    admissions_last VARCHAR(100),
    university_id INTEGER REFERENCES universities (university_id)
);

--create a table to store account data for guidance counselors--
DROP TABLE IF EXISTS counselors;
CREATE TABLE counselors
(
    counselor_id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    counselor_email VARCHAR(255),
    counselor_password CHAR(60)
)