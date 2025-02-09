"use client";
import React, { useState } from "react";
import NewBoardForm, {
  NewBoardProps,
} from "../../../../../../components/Dashboard_components/UI/Forms/Boardform/Boardform";

const NewBoard: React.FC = () => {
  return (
    <NewBoardForm
      add={false}
      handleForm={function (state: boolean): void {
        throw new Error("Function not implemented.");
      }}
      updateBoard={function (board: NewBoardProps): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default NewBoard;
