--CREATE SEED FOR LEARNER TABLE--

-- Insert rows into table 'learner'
INSERT INTO learner
    ( -- columns to insert data into
    learner_email, learner_password, first_name, last_name, gender, date_of_birth, city, state_abbrv, grade, school, first_gen, is_hispanic, racial_id, income, knows_profession, profession, company, knows_field
    )
VALUES
    ( -- first row: values for the columns in the list above
        'admin@email.com', '73243890234723284920384723', 'Joe', 'Awesome', 'male', '1988-12-01', 'Anytown', 'VA', 8, 'The Best School', TRUE, FALSE, 'Black or African American', '$52,000 - $85,000', TRUE, 'Software Engineer', 'Google', FALSE
);


-- Insert rows into table 'interests'
INSERT INTO interests
    ( -- columns to insert data into
    learner_id, interest_title
    )
VALUES
    ( -- first row: values for the columns in the list above
        1, 'computers'
);

-- Insert rows into table 'field_study'
INSERT INTO field_study
    ( -- columns to insert data into
    field_study_id, field_title, learner_id
    )
VALUES
    ( -- first row: values for the columns in the list above
        1, 'engineering', 1
);

-- Insert rows into table 'universities'
INSERT INTO universities
    ( -- columns to insert data into
    university_name, undergrad_volume, grad_volume
    )
VALUES
    ( -- first row: values for the columns in the list above
        'Aweseme School', '0-5k', '0-5k'
);

-- Insert rows into table 'admissions_account'
INSERT INTO admissions_account
    ( -- columns to insert data into
    admissions_password, admissions_email, admissions_first, admissions_last, university_id
    )
VALUES
    ( -- first row: values for the columns in the list above
        '1234', 'awesomecounselor@bigname.edu', 'awesome', 'counselor', 1
);


-- Insert rows into table 'counselors'
INSERT INTO counselors
    ( -- columns to insert data into
    first_name, last_name, counselor_email, counselor_password
    )
VALUES
    ( -- first row: values for the columns in the list above
        'Sally', 'TheCounselor', 'sallythecounselor@bigname.edu', '1234'
);


