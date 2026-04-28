package com.vehiculo.Automotora.models.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class VehiculoActualizarRequest {
    
    @NotBlank(message = "EL id del vehiculo no es opcional")
    private int id_vehiculo;

    @NotBlank(message = "La patente del vehiculo no es opcional")
    private String patente;

    @NotBlank(message = "EL id de la marca del vehiculo no es opcional")
    private int id_marca;

    @NotBlank(message = "EL color del vehiculo no es opcional")
    private String color;

    @NotBlank(message = "EL modelo del vehiculo no es opcional")
    private String modelo;
}
