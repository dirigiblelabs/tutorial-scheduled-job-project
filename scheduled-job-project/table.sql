create table LOG_EVENTS (
    LOG_ID integer primary key auto_increment,
    LOG_SEVERITY varchar(16),
    LOG_MESSAGE varchar(120),
    LOG_TIMESTAMP timestamp
);