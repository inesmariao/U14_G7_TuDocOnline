/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     7/10/2022 3:52:07 p. m.                      */
/*==============================================================*/


/*==============================================================*/
/* Table: agenda_citas                                          */
/*==============================================================*/
create table agenda_citas
(
   id_agenda_cita       bigint not null auto_increment  comment '',
   id_medico            bigint not null  comment '',
   fecha_cita           date not null  comment '',
   hora_cita            time not null  comment '',
   numero_consultorio   varchar(10) not null  comment '',
   estado_cita          int(2) not null  comment '1 - disponible
             2 - asignada
             3 - cancelada',
   tipo_cita            int(2) not null  comment '1 - presencial
             2 - virtual',
   primary key (id_agenda_cita)
);

/*==============================================================*/
/* Table: citas_asignadas                                       */
/*==============================================================*/
create table citas_asignadas
(
   id_cita_asignada     bigint not null auto_increment  comment '',
   id_agenda_cita       bigint not null  comment '',
   id_usuario           bigint not null  comment '',
   primary key (id_cita_asignada)
);

/*==============================================================*/
/* Table: especialidades                                        */
/*==============================================================*/
create table especialidades
(
   id_especialidad      bigint not null auto_increment  comment '',
   nombre_especialidad  varchar(200) not null  comment '',
   primary key (id_especialidad)
);

/*==============================================================*/
/* Table: roles                                                 */
/*==============================================================*/
create table roles
(
   id_rol               bigint not null auto_increment  comment '',
   nombre_rol           varchar(200) not null  comment '',
   estado_rol           int(2) not null  comment '1 - activo
             2 - inactivo',
   primary key (id_rol)
);

/*==============================================================*/
/* Table: usuarios                                              */
/*==============================================================*/
create table usuarios
(
   id_usuario           bigint not null auto_increment  comment '',
   id_rol               bigint not null  comment '',
   id_especialidad      bigint  comment '',
   nombres_usuario      varchar(200) not null  comment '',
   celular_usuario      bigint not null  comment '',
   correo_usuario       varchar(200) not null  comment '',
   direccion_usuario    text not null  comment '',
   usuario_acceso       varchar(200) not null  comment '',
   clave_acceso         varchar(200) not null  comment '',
   estado_usuario       int(2) not null  comment '1 - activo
             2 - inactivo',
   primary key (id_usuario)
);

alter table agenda_citas add constraint fk_agenda_c_reference_usuarios foreign key (id_medico)
      references usuarios (id_usuario) on delete cascade on update cascade;

alter table citas_asignadas add constraint fk_citas_as_reference_agenda_c foreign key (id_agenda_cita)
      references agenda_citas (id_agenda_cita) on delete cascade on update cascade;

alter table citas_asignadas add constraint fk_citas_as_reference_usuarios foreign key (id_usuario)
      references usuarios (id_usuario) on delete cascade on update cascade;

alter table usuarios add constraint fk_usuarios_reference_roles foreign key (id_rol)
      references roles (id_rol) on delete cascade on update cascade;

alter table usuarios add constraint fk_usuarios_reference_especial foreign key (id_especialidad)
      references especialidades (id_especialidad) on delete cascade on update cascade;

