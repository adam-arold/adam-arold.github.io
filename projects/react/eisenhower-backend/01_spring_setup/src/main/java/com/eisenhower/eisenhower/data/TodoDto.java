package com.eisenhower.eisenhower.data;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TodoDto {
    private String id;
    private String urgency;
    private String importance;
    private String title;
    private String description;
}
