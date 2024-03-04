package com.example.tasktie.controller;


import com.example.tasktie.model.Client;
import com.example.tasktie.model.ClientRequest;
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

    @PostMapping("/get")
    public List<Client> getClientList(@RequestBody ClientRequest clientRequest){
        return clientService.getClientList(clientRequest);
    }

    @PostMapping("/post")
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
