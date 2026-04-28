package com.automotora.marca.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
       Marca marca =  marcaRepository.findById(idMarca).orElse(null);

       if (marca == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Marca no encontrada ");
       }
       return marca;
    }
    

}
