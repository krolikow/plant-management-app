package com.krolikow.plantmanagement.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Entity
@Table(name="plant")
@Data
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private PlantCategory category;

    @Column(name="name")
    private String name;

    @Column(name="description")
    private String description;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name="active")
    private boolean active;

    @Column(name="watering_needs_minutes")
    private Long wateringNeedsMinutes;

    @Column(name="light_requirements")
    private String lightRequirements;

    @Column(name="flowering_period")
    private String floweringPeriod;

    @Column(name="min_temperature_celsius")
    private String minTemperatureCelsius;

    @Column(name="date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name="last_updated")
    @UpdateTimestamp
    private Date lastUpdated;
}
