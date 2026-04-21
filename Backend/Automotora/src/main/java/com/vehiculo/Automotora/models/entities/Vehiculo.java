package com.vehiculo.Automotora.models.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "VEHICULO")
public class Vehiculo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_vehiculo;

    @Column(nullable = false)
    private String patente;

    @Column(nullable = false)
    private int id_marca;

    @Column(nullable = false)
    private String color;

    @Column(nullable = false)
    private String modelo;
}
