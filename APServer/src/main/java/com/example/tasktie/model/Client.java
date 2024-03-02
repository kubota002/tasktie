package com.example.tasktie.model;

import lombok.Data;

@Data
public class Client {
    private Long id;
    private String clientName;
    private String address;
    private Integer phone;
    private String memo;
}
