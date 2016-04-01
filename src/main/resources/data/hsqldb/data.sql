INSERT INTO POST (name, resume, publishDate, content, userName) 
VALUES (
'PL/SQL', 
'ossama duis reprehenderit duis ex', 
'2010-01-01 00:00:00',
'Dans le cas de figure particulier ou le roulement se termine par une page pleine (8 lignes de roulement entre la fin de avant-derniere page et la findu roulement), le nombre ne page indique sur le PdF n est pas le bon.',
'James'
);

INSERT INTO POST (name, resume, publishDate, content, userName) 
VALUES (
'JAVA', 
'La livraison sur environnement de R7 du lot 3.', 
'2010-01-01 00:00:00' ,
'at org.springframework.beans.factory.support.AbstractBeanFactory$1.getObject(AbstractBeanFactory.java:306) ~[spring-beans-4.2.5.RELEASE.jar:4.2.5.RELEASE] at org.springframework.beans.factory.support.DefaultSingletonBeanRegistry.getSingleton(DefaultSingletonBeanRegistry.java:230) ~[spring-beans-4.2.5.RELEASE.jar:4.2.5.RELEASE]at org.springframework.beans.factory.support.AbstractBeanFactory.doGetBean(AbstractBeanFactory.java:302) ~[spring-beans-4.2.5.RELEASE.jar:4.2.5.RELEASE]',
'Claud'
);

INSERT INTO POST (name, resume, publishDate, content, userName) 
VALUES (
'ORACLE!', 
'Merci aviser toute personne qui ne serait pas destinataire de ce mail', 
'2010-01-01 00:00:00',
'SQL (sigle de Structured Query Language, en français langage de requete structuree) est un langage informatique normalise servant a exploiter des bases de donnees relationnelles. La partie langage de manipulation des donnees de SQL permet de rechercher, d ajouter, de modifier ou de supprimer des donnees dans les bases de données relationnelles.',
'Tomcat'
);

INSERT INTO COMMENT (userName, city, email, content, publishDate, postId)
VALUES('TOTO', 'city', 'email', '2016-03-30 10:49:15.194  INFO 6784 --- [nio-9000-exec-1] o.s.web.servlet.DispatcherServlet', '2010-01-01 00:00:00', 1);

INSERT INTO COMMENT (userName, city, email, content, publishDate, postId)
VALUES('TATA', 'city', 'email', '16-03-30 10:49:15.457  INFO 6784 --- [nio-9000-exec-4] org.example.ws.service.PostServiceImpl', '2010-01-01 00:00:00', 1)