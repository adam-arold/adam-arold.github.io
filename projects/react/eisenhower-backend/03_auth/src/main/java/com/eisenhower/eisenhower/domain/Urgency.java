package com.eisenhower.eisenhower.domain;

public enum Urgency {

    URGENT("Urgent"),
    NOT_URGENT("Not Urgent");

    private String label;

    Urgency(String label) {
        this.label = label;
    }

    public String label() {
        return label;
    }
}
