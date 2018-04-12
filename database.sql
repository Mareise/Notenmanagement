CREATE TABLE Schueler (
    sid INT NOT NULL AUTO_INCREMENT,
    kid INT,
    PRIMARY KEY (sid,kid),
    vn VARCHAR(20),
    nn VARCHAR(20)
);

CREATE TABLE Klasse (
    kid INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (kid),
    klassenname VARCHAR(20)
);

CREATE TABLE Fach (
    fid INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (fid),
    fachname VARCHAR(20)
);

CREATE TABLE Test (
    tid INT NOT NULL AUTO_INCREMENT,
    fid INT,
    kid INT,
    PRIMARY KEY (tid,fid,kid),
    datum DATE,
    art VARCHAR(30),
    testname VARCHAR(30)
);

CREATE TABLE Ergebniss (
    eid INT NOT NULL AUTO_INCREMENT,
    tid INT,
    sid INT,
    PRIMARY KEY (eid,tid,sid),
    note INT,
    Anmerkung VARCHAR(30)
);

// ----------------------------------------------