package com.vehiculo.Automotora.controller;

import com.vehiculo.Automotora.repositories.VehiculoRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vehiculo.Automotora.models.entities.Vehiculo;
import com.vehiculo.Automotora.models.request.VehiculoActualizarRequest;
import com.vehiculo.Automotora.models.request.VehiculoRequest;
import com.vehiculo.Automotora.services.VehiculoService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


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


    
    @PostMapping("")
    public Vehiculo agregarVehiculo(@RequestBody VehiculoRequest autoNuevo){
        return vehiculoService.agregarAuto(autoNuevo);
    }



    @PutMapping("")
    public Vehiculo actualizarVehiculo(@RequestBody VehiculoActualizarRequest autoEditado) {
        return vehiculoService.actualizarAuto(autoEditado);
    }


    @DeleteMapping("/{idVehiculo}")
    public String eliminarVehiculo(@PathVariable int idVehiculo){
        return vehiculoService.eliminarVehiculo(idVehiculo);
    }

    //POST

    //PUT


    //DELETE


    //PATH


}
