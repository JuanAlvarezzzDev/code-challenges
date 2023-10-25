/*
Una empresa esta dividida en N sedes, cada sede en M secciones, y cada sección tiene un numero  determinado de empleados. De cada empleado se conoce nombre, sexo, edad, salario básico y deducciones. Crea la base de datos y realiza las consultas para lo siguiente: 👌
a) El promedio de edad de los empleados por sección y por sede ✅
b) El porcentaje de mujeres de 18 años por sección y por sede ✅
c) El numero de mujeres que ganan más de 4 salarios mínimos por sección
e) El nombre y la edad de la mujer más joven por sección
f) El nombre y la edad del hombre más viejo por sede El valor de las deducciones más altas de toda la empresa
h) El promedio de salarios netos de las mujeres mayores de 18 años por sede y sección.
i) El porcentaje de empleados hombres que ganan menos de dos salarios mínimos
por sección.
j) El valor del salario neto más bajo de toda la empresa.

 */
/*CREAR BASE DE DATOS Y TABLAS */
CREATE DATABASE empresa;

USE empresa;

/*CREAR TABLA Sedes */
CREATE TABLE
    sedes (
        id_sede INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50)
    );
    /* CREAR TABLA secciones */
    /*la columna de id_Sede de secciones hace referencia a la columna id_sede a sedes*/
CREATE TABLE
    secciones (
        id_secciones INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50),
        id_sede INT,
        FOREIGN KEY (id_sede) REFERENCES sedes (id_sede)
    );
    /*CREAR TABLA empleados*/
CREATE TABLE
    empleados (
        id_empleado INT AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50),
        sexo VARCHAR(10),
        edad int,
        salario_basico DECIMAL(10, 2),
        deducciones DECIMAL(10, 2),
        id_secciones INT,
        FOREIGN KEY (id_secciones) REFERENCES secciones (id_secciones)
    );
    /* INSERTAR DATOS */
    -- Insertar 3 sedes
INSERT INTO
    sedes (nombre)
VALUES
    ('Sede A'),
    ('Sede B'),
    ('Sede C');

-- Insertar 5 secciones relacionadas a las sedes
INSERT INTO
    secciones (nombre, id_sede)
VALUES
    ('Sección 1', 1), -- Asociada a Sede A
    ('Sección 2', 1), -- Asociada a Sede A
    ('Sección 3', 2), -- Asociada a Sede B
    ('Sección 4', 3), -- Asociada a Sede C
    ('Sección 5', 3);

-- Asociada a Sede C
-- Insertar 5 empleados relacionados a las secciones
INSERT INTO
    empleados (
        nombre,
        sexo,
        salario_basico,
        deducciones,
        id_secciones
    )
VALUES
    (
        'Empleado 1',
        'Masculino',
        24,
        35000.00,
        5000.00,
        1
    ), -- Asociado a Sección 1
    (
        'Empleado 2',
        'Femenino',
        25,
        40000.00,
        6000.00,
        2
    ), -- Asociado a Sección 2
    (
        'Empleado 3',
        'Masculino',
        26,
        32000.00,
        4000.00,
        3
    ), -- Asociado a Sección 3
    (
        'Empleado 4',
        'Femenino',
        30,
        38000.00,
        5500.00,
        4
    ), -- Asociado a Sección 4
    (
        'Empleado 5',
        'Masculino',
        45,
        39000.00,
        7000.00,
        5
    );

-- Asociado a Sección 5
/*a) El promedio de edad de los empleados por sección y por sede*/
SELECT
    sedes.nombre AS sede,
    secciones.nombre AS seccion,
    AVG(edad) AS promedio_edad
FROM
    empleados
    JOIN secciones ON empleados.id_secciones = secciones.id_secciones
    JOIN sedes ON secciones.id_sede = sedes.id_sede
GROUP BY
    sede,
    seccion;

/*b) El porcentaje de mujeres de 18 años por sección y por sede*/
SELECT
    s.nombre AS sede,
    se.nombre AS seccion,
    100.0 * COUNT(
        CASE
            WHEN e.sexo = 'Femenino'
            AND e.edad = 18 THEN 1
        END
    ) / COUNT(
        CASE
            WHEN e.edad = 18 THEN 1
        END
    ) AS porcentaje_mujeres_18_anios
FROM
    empleados e
    JOIN secciones se ON e.id_secciones = se.id_secciones
    JOIN sedes s ON se.id_sede = s.id_sede
GROUP BY
    s.nombre,
    se.nombre;