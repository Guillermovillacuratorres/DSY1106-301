package com.automotora.marca.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.automotora.marca.entities.entities.Marca;
import com.automotora.marca.repositories.MarcaRepository;

@Service
public class MarcaService {
    
    @Autowired
    private MarcaRepository marcaRepository;
    

    public List<Marca> obtenerTodasLasMarcas(){
        return marcaRepository.findAll();
    }


    public Marca obtenerMarcaPorId(int idMarca){
        return marcaRepository.findById(idMarca).orElse(null);
    }
    

}
