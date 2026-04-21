package com.vehiculo.Automotora.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vehiculo.Automotora.models.entities.Vehiculo;

public interface VehiculoRepository extends JpaRepository<Vehiculo, Integer> {
    
}
