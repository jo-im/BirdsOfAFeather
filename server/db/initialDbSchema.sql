-- Initialize empty DB whether exists or not
DROP DATABASE IF EXISTS birds;
CREATE DATABASE birds;

-- Connect to DB
\c birds;

-- Users Schema
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR,
  facebookId BIGINT,
  facebookAccessToken VARCHAR
);

-- Concerns Schema
CREATE TABLE concerns (
  concern_id SERIAL PRIMARY KEY,
  name VARCHAR,
  subConcern VARCHAR,
  majorConcern VARCHAR
);

-- User_Concerns Join schema
CREATE TABLE user_concerns (
  id SERIAL PRIMARY KEY
  user_id SERIAL,
  concern_id SERIAL
);

-- Add foreign keys to join
ALTER TABLE user_concerns
  ADD CONSTRAINT user FOREIGN KEY (user_id)
    REFERENCES users (user_id) MATCH FULL;

ALTER TABLE user_concerns
  ADD CONSTRAINT concern FOREIGN KEY (concern_id)
    REFERENCES concerns (concern_id) MATCH FULL;

-- Populate Concerns Schema with Data for allergies
INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('peanuts', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('msg', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('soy', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('wheat', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('corn', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('fish', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('nuts', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('sulfites', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('nightshades', 'allergy', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('shellfish', 'allergy', 'health');

-- Populate Concerns Schema with Data for dietary
INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('vegan', 'diet', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('pescatarian', 'diet', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('eggs', 'diet', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('dairy', 'diet', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('gluten', 'diet', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('controversial', 'diet', 'health');

INSERT INTO concerns (name, subConcern, majorConcern) VALUES
  ('transfats', 'diet', 'health');
