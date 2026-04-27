package com.automotora.marca.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.automotora.marca.entities.entities.Marca;
import com.automotora.marca.services.MarcaService;

@RestController
@RequestMapping("marca")
public class MarcaController {
    
    @Autowired
    private MarcaService marcaService;


    @GetMapping("")
    public List<Marca> obtenerMarcas(){
        return marcaService.obtenerTodasLasMarcas();
    }


    @GetMapping("/{idMarca}")
    public Marca obtenerMarcaPorId(@PathVariable int idMarca){
        return marcaService.obtenerMarcaPorId(idMarca);
    }

}
