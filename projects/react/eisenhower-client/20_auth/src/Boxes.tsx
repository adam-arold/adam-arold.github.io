import React, { FunctionComponent } from "react";
import Box from "./Box";
import Importance from "./Importance";
import Urgency from "./Urgency";
import { useTranslation } from "react-i18next";
import LabelKeys from "./LabelKeys";
import { RouteComponentProps } from "@reach/router";

interface BoxesProps extends RouteComponentProps {
    todos: ITodo[];
}

const Boxes: FunctionComponent<BoxesProps> = ({ todos }) => {
    const { t } = useTranslation();
    return (
        <div className="row row-cols-2">
            <Box
                urgency="urgent"
                importance="important"
                label={t(LabelKeys.URGENT_IMPORTANT)}
                todos={todos.filter((todo) => {
                    return (
                        todo.importance === Importance.IMPORTANT &&
                        todo.urgency === Urgency.URGENT
                    );
                })}
            />
            <Box
                urgency="not-urgent"
                importance="important"
                label={t(LabelKeys.NOT_URGENT_IMPORTANT)}
                todos={todos.filter((todo) => {
                    return (
                        todo.importance === Importance.IMPORTANT &&
                        todo.urgency === Urgency.NOT_URGENT
                    );
                })}
            />
            <Box
                urgency="urgent"
                importance="not-important"
                label={t(LabelKeys.URGENT_NOT_IMPORTANT)}
                todos={todos.filter((todo) => {
                    return (
                        todo.importance === Importance.NOT_IMPORTANT &&
                        todo.urgency === Urgency.URGENT
                    );
                })}
            />
            <Box
                urgency="not-urgent"
                importance="not-important"
                label={t(LabelKeys.NOT_URGENT_NOT_IMPORTANT)}
                todos={todos.filter((todo) => {
                    return (
                        todo.importance === Importance.NOT_IMPORTANT &&
                        todo.urgency === Urgency.NOT_URGENT
                    );
                })}
            />
        </div>
    );
};
export default Boxes;
