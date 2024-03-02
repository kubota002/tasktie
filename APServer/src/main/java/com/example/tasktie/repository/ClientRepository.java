package com.example.tasktie.repository;

import com.example.tasktie.model.Client;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;


@Repository
public class ClientRepository  {
    @Autowired
    JdbcTemplate jdbc;

    /**
     *
     * @return 顧客リスト
     */
    public List<Client> getClientAll() throws DataAccessException {
        List<Map<String, Object>> getList = jdbc.queryForList("SELECT * FROM client");
        List<Client> clientList = new ArrayList<>();
        for (Map<String,Object> map: getList){
            Client client = new Client();
            client.setId((Long) map.get("id"));
            client.setClientName((String) map.get("client_name"));
            client.setAddress((String) map.get("address"));
            client.setPhone((Integer) map.get("phone"));
            client.setMemo((String) map.get("memo"));
            clientList.add(client);
        }
        return clientList;
    }

    public boolean setClient(Client client) throws DataAccessException {
        int rowNumber = jdbc.update("INSERT INTO client(client_name," +
                "address," +
                "phone," +
                "memo)" +
                "VALUES(?,?,?,?)",
                client.getClientName(),
                client.getAddress(),
                client.getPhone(),
                client.getMemo());
        return 0 < rowNumber;
    }
    public Client getClient(Long id) throws DataAccessException {
        Client client = new Client();
        Map<String, Object> map = jdbc.queryForMap("SELECT * FROM client WHERE " +
                "client.id = ?",
                id);
        client.setId((Long) map.get("id"));
        client.setClientName((String) map.get("client_name"));
        client.setAddress((String) map.get("address"));
        client.setPhone((Integer) map.get("phone"));
        client.setMemo((String) map.get("memo"));
        return client;
    }

    public boolean updateClient(Client client) throws DataAccessException {
        int rowNumber = jdbc.update("UPDATE client SET " +
                "client_name = ?," +
                "address = ?," +
                "phone = ?," +
                "memo = ? " +
                "WHERE id = ?",
                client.getClientName(),
                client.getAddress(),
                client.getPhone(),
                client.getMemo(),
                client.getId());
        return 0 < rowNumber;
    }

}
