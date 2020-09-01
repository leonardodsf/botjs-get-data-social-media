create table if not exists sc_facebook (
  id int(11) not null auto_increment,
  url_facebook varchar(255) not null,
  like_facebook varchar(255) not null,
  referencia varchar(255) not null,
  primary key (id)
);


create table if not exists sc_instagram (
  id int(11) not null auto_increment,
  url_instagram varchar(255) not null,
  like_instagram varchar(255) not null,
  imagem_instagram longtext not null,
  referencia varchar(255) not null,
  primary key(id)
);