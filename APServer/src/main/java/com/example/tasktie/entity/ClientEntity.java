package com.example.tasktie.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "client")
public class ClientEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "client_name", length = 30)
    private String clientName;

    @Column(name = "address", length = 100)
    private String address;

    @Column(name = "phone", length = 20)
    private Integer phone;

    @Column(name = "memo")
    private String memo;

}
