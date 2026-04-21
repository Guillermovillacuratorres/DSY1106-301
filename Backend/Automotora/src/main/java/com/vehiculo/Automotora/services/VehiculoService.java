package com.vehiculo.Automotora.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vehiculo.Automotora.models.entities.Vehiculo;
import com.vehiculo.Automotora.repositories.VehiculoRepository;

@Service
public class VehiculoService {
    
    @Autowired
    private VehiculoRepository vehiRepo;


    public List<Vehiculo> obtenerTodosLosAutos(){
        return vehiRepo.findAll();
    }


    
}
