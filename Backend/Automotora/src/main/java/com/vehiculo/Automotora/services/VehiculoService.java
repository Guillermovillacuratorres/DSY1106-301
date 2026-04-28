package com.vehiculo.Automotora.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import org.springframework.web.server.ResponseStatusException;

import com.vehiculo.Automotora.models.dto.MarcaDto;
import com.vehiculo.Automotora.models.entities.Vehiculo;
import com.vehiculo.Automotora.models.request.VehiculoActualizarRequest;
import com.vehiculo.Automotora.models.request.VehiculoRequest;
import com.vehiculo.Automotora.repositories.VehiculoRepository;

@Service
public class VehiculoService {
    
    @Autowired
    private VehiculoRepository vehiRepo;

    @Autowired
    private WebClient webClient;


    public List<Vehiculo> obtenerTodosLosAutos(){
        return vehiRepo.findAll();
    }

    public Vehiculo agregarAuto(VehiculoRequest autoNuevo){
        MarcaDto marca = null;

        try {
            marca = webClient.get()
            .uri("marca/{idMarca}",autoNuevo.getId_marca())
            .retrieve()
            .bodyToMono(MarcaDto.class)
            .block();
        } catch (WebClientResponseException e) {
            throw new ResponseStatusException(HttpStatus.valueOf(e.getStatusCode().value()),
            "Error al obtener la marca: " + e.getStatusText());
        } catch(Exception e){
            throw new ResponseStatusException(
                HttpStatus.SERVICE_UNAVAILABLE,
                "Error de conexion con el servicio de marca: " + e.getMessage());
        }

        Vehiculo auto = new Vehiculo();
        auto.setPatente(autoNuevo.getPatente());
        auto.setColor(autoNuevo.getColor());
        auto.setId_marca(autoNuevo.getId_marca());
        auto.setModelo(autoNuevo.getModelo());


        return vehiRepo.save(auto);
        
    }


    public Vehiculo actualizarAuto(VehiculoActualizarRequest autoEditado){
        Vehiculo autoExiste = vehiRepo.findById(autoEditado.getId_vehiculo()).orElse(null);
        if (autoExiste == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Vehiculo no encontrado.");
        }
        autoExiste.setColor(autoEditado.getColor());
        autoExiste.setId_marca(autoEditado.getId_marca());
        autoExiste.setModelo(autoEditado.getModelo());
        autoExiste.setPatente(autoEditado.getPatente());
        return vehiRepo.save(autoExiste);
    }


    public String eliminarVehiculo(int idVehiculo){
        Vehiculo autoExiste = vehiRepo.findById(idVehiculo).orElse(null);
        if (autoExiste == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Vehiculo no encontrado.");
        }

        vehiRepo.deleteById(idVehiculo);
        return "Vehiculo eliminado!";
    }

    
}
