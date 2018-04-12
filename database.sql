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

// --------- Testdaten anlegen -------------------

INSERT INTO Schueler VALUES
    (null,1,'David','Diermayr'),
    (null,1,'Maximilian','Reisecker'),
    (null,1,'Max','Mustermann'),
    (null,2,'Joe','Gartl'),
    (null,2,'Axel','Gruen'),
    (null,2,'Sepp','Franz');

INSERT INTO Klasse VALUES
    (null,'5AHELS'),
    (null,'4AHMEA');

INSERT INTO Fach VALUES
    (null,'Mathematik'),
    (null,'FSST'),
    (null,'Deutsch'),
    (null,'KSN');

INSERT INTO Test VALUES
	…
	…
	…

INSERT INTO Ergebniss VALUES
    (null,1,1,1,'30 Punkte'),
    (null,1,2,2,'25 Punkte'),
    (null,1,3,3,'20 Punkte'),
    (null,2,1,4,'5 Punkte'),
    (null,2,2,5,'2 Punkte'),
    (null,2,3,1,'10 Punkte'),
    (null,3,4,2,'40 Punkte'),
    (null,3,5,3,'35 Punkte'),
    (null,3,6,4,'30 Punkte'),
    (null,4,4,5,'0 Punkte'),
    (null,4,5,1,'5 Punkte'),
    (null,4,6,2,'4 Punkte'),
    (null,5,1,3,'75 Punkte'),
    (null,5,2,4,'50 Punkte'),
    (null,5,3,5,'25 Punkte');
