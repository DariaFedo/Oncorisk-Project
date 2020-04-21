/*==============================================================*/
/* DBMS name:      xttczuqj_oncoriscDb                                   */
/* Created on:     06.04.2020 12:42:09                          */
/*==============================================================*/
select database xttczuqj_oncoriscDb;

drop table if exists archiwum;

drop table if exists kategorie;

drop table if exists odpowiedzi;

drop table if exists pytania;

drop table if exists uzytkownik;

/*==============================================================*/
/* Table: archiwum                                              */
/*==============================================================*/
create table archiwum
(
   user_id              int not null,
   id_pyt               int not null,
   id_odp               int,
   primary key (user_id, id_pyt)
)
type = InnoDB;

/*==============================================================*/
/* Table: kategorie                                             */
/*==============================================================*/
create table kategorie
(
   id_kategorii         int not null,
   id_pyt               int,
   nazwa_kategorii      string,
   primary key (id_kategorii)
)
type = InnoDB;

/*==============================================================*/
/* Table: odpowiedzi                                            */
/*==============================================================*/
create table odpowiedzi
(
   id_odp               int not null,
   id_pyt               int,
   treœcOdpowiedzi      text,
   primary key (id_odp)
)
type = InnoDB;

/*==============================================================*/
/* Table: pytania                                               */
/*==============================================================*/
create table pytania
(
   id_pyt               int not null,
   id_kat               int not null,
   tresc_pytania        text,
   primary key (id_pyt)
)
type = InnoDB;

/*==============================================================*/
/* Table: uzytkownik                                            */
/*==============================================================*/
create table uzytkownik
(
   user_id              int not null,
   lokalizacja text,
   jezyk text,
   primary key (user_id)
)
type = InnoDB;

alter table archiwum add constraint FK_Reference_3 foreign key (user_id)
      references uzytkownik (user_id) on delete restrict on update restrict;

alter table archiwum add constraint FK_Reference_4 foreign key (id_odp)
      references odpowiedzi (id_odp) on delete restrict on update restrict;

alter table archiwum add constraint FK_Reference_5 foreign key (id_pyt)
      references pytania (id_pyt) on delete restrict on update restrict;

alter table kategorie add constraint FK_Reference_1 foreign key (id_pyt)
      references pytania (id_pyt) on delete restrict on update restrict;

alter table odpowiedzi add constraint FK_Reference_2 foreign key (id_pyt)
      references pytania (id_pyt) on delete restrict on update restrict;

