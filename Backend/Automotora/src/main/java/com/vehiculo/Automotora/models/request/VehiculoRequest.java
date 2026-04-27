package com.vehiculo.Automotora.models.request;

import lombok.Data;

@Data
public class VehiculoRequest {
    private String patente;
    private int id_marca;
    private String color;
    private String modelo;
}
