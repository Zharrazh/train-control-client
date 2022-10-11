import React from "react";

import { Card, notification, Typography } from "antd";
import { BackPrevPageLink } from "../../../components/BackPrevPageLink";
import { PageContentContainer } from "../../../components/PageContentContainer";
import { TrainCreateForm, TrainCreateFormProps } from "./TrainCreateForm";
import { useAppDispatch } from "../../../app/hooks";
import { createTrain } from "../../../features/trains/trainsSlice";
import { useNavigate } from "react-router-dom";

export const TrainCreatePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmitHandler: TrainCreateFormProps["onSubmit"] = (values) => {
    dispatch(createTrain(values));
    notification.success({ message: "Поезд успешно создан" });
    navigate("/trains");
  };
  return (
    <PageContentContainer>
      <Card>
        <BackPrevPageLink to="/trains">Назад к списку поездов</BackPrevPageLink>

        <Typography.Title level={3}>Создание поезда</Typography.Title>

        <TrainCreateForm onSubmit={onSubmitHandler} />
      </Card>
    </PageContentContainer>
  );
};
