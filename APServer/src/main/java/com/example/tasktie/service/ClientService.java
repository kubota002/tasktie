package com.example.tasktie.service;

import com.example.tasktie.model.Client;
import com.example.tasktie.model.ClientRequest;
import com.example.tasktie.model.Result;
import com.example.tasktie.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClientService {
    @Autowired
    ClientRepository clientRepository;

    /**
     * 顧客の名前がリクエストに含まれているとき、検索を行う
     * @return clientList
     */
    public List<Client> getClientList(ClientRequest request){
        if (request.getClientName() == null || request.getClientName().isEmpty()){
            return clientRepository.getClientAll();
        }
        System.out.println("search");
        return clientRepository.getClientAll();
    }
    public Result saveClient(Client client){
       boolean status = clientRepository.setClient(client);
       Result result = new Result();
        if (status){
            result.setResult(0);
            result.setMessage("更新に成功しました");
        }else {
            result.setResult(1);
            result.setMessage("更新に失敗しました");
        }
        return result;
    }

    public Client getClient(Long id){
        return clientRepository.getClient(id);
    }
    public Result updateClient(Client client){
        boolean status = clientRepository.updateClient(client);
        Result result = new Result();
        if (status){
            result.setResult(0);
            result.setMessage("更新に成功しました");
        }else {
            result.setResult(1);
            result.setMessage("更新に失敗しました");
        }
        return result;
    }
}
