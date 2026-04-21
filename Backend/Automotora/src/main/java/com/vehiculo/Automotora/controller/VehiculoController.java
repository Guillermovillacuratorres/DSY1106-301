package com.vehiculo.Automotora.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vehiculo.Automotora.models.entities.Vehiculo;
import com.vehiculo.Automotora.services.VehiculoService;

@RequestMapping("/vehiculo")
@RestController
public class VehiculoController {
    
    @Autowired
    private VehiculoService vehiculoService;

    //localhost:7575/vehiculo
    @GetMapping("")
    public List<Vehiculo> obtenerTodosAutos(){
        return vehiculoService.obtenerTodosLosAutos();
    }


    //POST

    //PUT


    //DELETE


    //PATH


}
