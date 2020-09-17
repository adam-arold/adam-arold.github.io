package com.eisenhower.eisenhower.domain;

public enum Importance {

    IMPORTANT("Important"),
    NOT_IMPORTANT("Not Important");

    private String label;

    Importance(String label) {
        this.label = label;
    }

    public String label() {
        return label;
    }
}
