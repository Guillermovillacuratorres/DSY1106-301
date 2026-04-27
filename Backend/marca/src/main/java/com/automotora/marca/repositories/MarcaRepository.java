package com.automotora.marca.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.automotora.marca.entities.entities.Marca;



public interface MarcaRepository extends JpaRepository<Marca, Integer> {
    
}
