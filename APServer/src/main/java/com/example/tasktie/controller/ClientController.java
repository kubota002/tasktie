package com.example.tasktie.controller;


import com.example.tasktie.model.Client;
import com.example.tasktie.model.Result;
import com.example.tasktie.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/client")
public class ClientController {
    @Autowired
    ClientService clientService;

    @GetMapping
    public List<Client> getClientList(){
        return clientService.getClientList();
    }

    @PostMapping
    public Result saveClient(@RequestBody Client client){
        return clientService.saveClient(client);
    }
    @PostMapping("/update")
    public Result updateClient(@RequestBody Client client){
        return clientService.updateClient(client);
    }

    @GetMapping("/{id}")
    public Client getClient(@PathVariable Long id){
        return clientService.getClient(id);
    }
}
